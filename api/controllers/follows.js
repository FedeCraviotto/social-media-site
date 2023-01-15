import db from '../connect.js';
import jwt from 'jsonwebtoken';

const followsController = {
    getFollow: (req, res) => {
        const q = 'SELECT followerUser FROM follows WHERE followedUser = ?';


        db.query(q, [req.query.followedUserId], (err, data) =>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data.map(follow => follow.followerUser));
        });
    
    },
    addFollow: (req, res) => {
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{

            if(err) return res.status(403).json('Invalid token');

            const q = 'INSERT INTO follows (`followerUser`, `followedUSer`) VALUES (?)';
            const likeFields = [userInfoInToken.id, req.body.userId];

            db.query(q, [likeFields], (err, data) =>{
                if (err) return res.status(500).json(err);
                return res.status(200).json('Now following');
            });
        });
    },
    deleteFollow: (req, res) => {
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{

            if(err) return res.status(403).json('Invalid token');
            const q = 'DELETE FROM follows WHERE `followedUser` = ? AND `followerUser` = ?';

            db.query(q, [req.query.userId, userInfoInToken.id], (err, data) =>{
                if (err) return res.status(500).json(err);
                return res.status(200).json('Unfollowing');
            });
        });
    }
}

export default followsController;