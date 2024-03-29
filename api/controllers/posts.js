import moment from 'moment/moment.js';
import jwt from 'jsonwebtoken';
import db from '../connect.js';
const postController = {
    getPosts : (req, res) => {

        const userId = req.query.userId;
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{
            if(err) {
                return res.status(403).json('Invalid token');
            }

            const q = userId !== 'undefined'
              ? "SELECT posts.id as `postId`, userId, description, image, createdAt, users.name as `userName`, avatar FROM posts JOIN users ON (users.id = posts.userId) WHERE posts.userId = (?) ORDER BY posts.createdAt DESC"
              : `SELECT DISTINCT posts.id as 'postId', userId, description, image, createdAt, users.name as 'userName', avatar FROM posts JOIN users ON (users.id = posts.userId) LEFT JOIN follows ON (posts.userId = follows.followedUser) WHERE follows.followerUser = ? OR posts.userId = ? ORDER BY posts.createdAt DESC`;

            const fields = userId !== 'undefined' ? [userId] : [userInfoInToken.id, userInfoInToken.id];

            db.query(q, fields, (err, data) =>{
                if (err) {
                    return res.status(500).json(err)
                }
                return res.status(200).json(data);
            })
        })

    },
    addPost : (req, res) => {

        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{
            if(err) return res.status(403).json('Invalid token');

            const q = 'INSERT INTO posts (`description`, `image`, `createdAt`, `userId`) VALUES (?)';

            const postInfoFields = [
                req.body.description,
                req.body.image,
                moment(Date.now()).format('YYYY-MM-DD HH-mm-ss'),
                userInfoInToken.id
            ]
            db.query(q, [postInfoFields], (err, data) =>{
                if (err) return res.status(500).json(err);
                return res.status(200).json('Post successfully added!');
            })
        })

    },
    deletePost : (req, res) => {
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{
            if(err) return res.status(403).json('Invalid token');

            const q = 'DELETE FROM posts WHERE `id` = ? AND `userId` = ?';

            db.query(q, [req.params.id, userInfoInToken.id], (err, data) =>{
                if (err) return res.status(500).json(err);
                if(data.affectedRows > 0) return res.status(200).json('Post has been deleted!');
                return res.status(403).json("You can only delete your own posts");
            })
        })
    }
};

export default postController;