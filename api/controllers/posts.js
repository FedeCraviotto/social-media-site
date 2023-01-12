import db from '../connect.js';
const postController = {
    getPosts : (req, res) => {
        // const q2 = `SELECT p.*, u.id AS userId, name, avatar FROM posts AS p JOIN users AS u ON (u.id = p.userId)`;
        const q = `SELECT posts.id as 'postId', userId, description, image, createdAt, users.name as 'userName', avatar FROM posts JOIN users ON users.id = posts.userId`;
        db.query(q, (err, data) =>{
            if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).json(data);
        })
    }
};

export default postController;