import db from '../connect.js';
import jwt from 'jsonwebtoken';

const likesController = {
    getLikes: (req, res) => {
        const q = 'SELECT userId FROM likes WHERE postId = (?)';


        db.query(q, [req.query.postId], (err, data) =>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data.map(like => like.userId));
        });
    
    },
    addLike: (req, res) => {
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{

            if(err) return res.status(403).json('Invalid token');

            const q = 'INSERT INTO likes (`userId`, `postId`) VALUES (?)';
            const likeFields = [userInfoInToken.id, req.body.postId];

            db.query(q, [likeFields], (err, data) =>{
                if (err) return res.status(500).json(err);
                return res.status(200).json('Post liked');
            });
        });
    },
    deleteLike: (req, res) => {
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{

            if(err) return res.status(403).json('Invalid token');
            const q = 'DELETE FROM likes WHERE `postId` = ? AND `userId` = ?';
            // OJO, cuando los ? estan separados NO podemos pasar los campos como array.
            // const likeFields = [userInfoInToken.id, req.query.postId];

            // El array se pasa para grupos de campos separados por coma, como en el VALUES (?) del INSERT INTO

            // CUIDADO el orden de las cols como condicion del WHERE, que coincidan con los valores pasados en 2do parametro del db.query.
            db.query(q, [req.query.postId, userInfoInToken.id], (err, data) =>{
                if (err) return res.status(500).json(err);
                return res.status(200).json('Like deleted');
            });
        });
    }
}

export default likesController;