import db from '../connect.js';
import bcryptjs from 'bcryptjs';

const authController = {
    login : (req, res) => {
        // const checkIfUserExists = 'SELECT * FROM users WHERE username = ?';
        // db.query(checkIfUserExists, [req.body.username], (err, data) =>{
        //     if (err){
        //         return res.status(404).json("Credentials error. Password or user doesn't match an existing record.")
        //     }
        //     if (data.length){
        //         let hashedPasswordFromDb = data.password;
        //         if (bcryptjs.compareSync(req.body.password,hashedPasswordFromDb)){

        //         }
        //     }
        // })
    },
    register : (req, res) => {

        const checkIfUserAlreadyExists = 'SELECT * FROM users WHERE username = ?'

        db.query(checkIfUserAlreadyExists, [req.body.username], (err, data)=>{
            if(err) {
                return res.status(500).json(err);
            }
            if (data.length) {
                return res.status(409).json('User already exists')
            }
            const hashedPassword = bcryptjs.hashSync(req.body.password, 10);
            const tableFields = [req.body.username, req.body.email, hashedPassword, req.body.name];
            const createNewUser = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";

            db.query(createNewUser, [tableFields], (err, data) =>{
                return res.status(200).json('User created successfully');
            });
        });

    },
    logout : (req, res) => {
        res.send('ok');
    }
};

export default authController;