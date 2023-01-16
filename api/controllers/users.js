import db from "../connect.js ";
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs';

const userController = {
  getUser: (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id = ?";

    db.query(q, [userId], (err, data) => {
      if (err) return res.status(500).json(err);
      // const { password, ...info } = data[0];
      // return res.json(info);
      return res.json(data[0]);
    });
  },
  updateUser: (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("User not logged in");

    jwt.verify(token, process.env.SECRET_KEY, (err, userInfoInToken) => {
      if (err) return res.status(403).json("Invalid token");

      // let hashedPassword = null;
      // if(req.body.password !== '') {
      //   console.log(req.body.password)
      //   hashedPassword = bcryptjs.hashSync(req.body.password, 10);
      // }
      
      const q = 'UPDATE users SET `name` =?, `email` =?, `cover`=?, `avatar`=?, `city`=?, `website`= ? WHERE id = ?';

      // const q = 'UPDATE users SET `name` =?, `email` =?, `password` =?, `cover`=?, `avatar`=?, `city`=?, `website`= ? WHERE id = ?';

      const fields = [
        req.body.name,
        req.body.email,
        // hashedPassword,
        req.body.cover,
        req.body.avatar,
        req.body.city,
        req.body.website,
        userInfoInToken.id
      ]
      db.query(q, fields, (err, data) => {
        if(err) res.status(500).json(err);
        if(data.affectedRows > 0) return res.json('updated!');
        return res.status(403).json('You can update only your profile');
      })
    });
  },
};

export default userController;
