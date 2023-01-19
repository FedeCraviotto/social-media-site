import db from '../connect.js';
import jwt from 'jsonwebtoken';
import moment from 'moment';

const commentsController = {
    getComments : (req, res) => {

            const q = `SELECT comments.*, userId, description, createdAt, users.name as 'userName', avatar 
            FROM comments 
            JOIN users 
            ON users.id = comments.userId
            WHERE comments.postId = ?
            ORDER BY comments.createdAt
            DESC;`;
            db.query(q, [req.query.postId], (err, data) =>{
                if (err) {
                    return res.status(500).json(err)
                }
                return res.status(200).json(data);
            })
        

    },
    addComment : (req, res) => {

        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')

        jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) =>{
            if(err) return res.status(403).json('Invalid token');

            const q = 'INSERT INTO comments (`description`, `postId`, `createdAt`, `userId`) VALUES (?)';

            const commentInfoFields = [
                req.body.description,
                req.body.postId, // Can be taken also as req.query.postId
                moment(Date.now()).format('YYYY-MM-DD HH-mm-ss'),
                userInfoInToken.id
            ]
            db.query(q, [commentInfoFields], (err, data) =>{
                if (err) return res.status(500).json(err);
                return res.status(200).json('Commnet successfully added!');
            });
        });

    },
    deleteComment : (req, res) => {
        const token = req.cookies.accessToken;
        if(!token) return res.status(401).json('User not logged in')
      
        jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
            if(err) return res.status(403).json('Invalid token');
      
          const commentId = req.params.id;
          const q = "DELETE FROM comments WHERE `id` = ? AND `userId` = ?";
      
          db.query(q, [commentId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.affectedRows > 0) return res.json("Comment successfully deleted!");
            return res.status(403).json("You can delete only your own comments!");
          });
        });
      }
};
export default commentsController;