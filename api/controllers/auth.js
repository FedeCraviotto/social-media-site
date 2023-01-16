import db from '../connect.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authController = {
    // $2a$10$NrPJk/kiyGempZ4BrAZ.durp1ZNI/F4DCdinx8f1T0SW4ZjB6I8w2
    login : (req, res) => {
        const checkIfUserExists = 'SELECT * FROM users WHERE username = ?';
        db.query(checkIfUserExists, [req.body.username], (err, data) =>{
            if (err){
                return res.status(500).json(err)
            }
            if (data.length === 0){
                return res.status(404).json('User not found')
            }
            
            let hashedPasswordFromDb = data[0].password;
            let passwordMatch = bcryptjs.compareSync(req.body.password,hashedPasswordFromDb)
            if (!passwordMatch){
                return res.status(400).json("Credentials don't match");
            }
            
            const token = jwt.sign({id:data[0].id}, process.env.SECRET_KEY);
            
            const {password, ...theRestOfTheFields} = data[0];
            res
                .status(200)
                .cookie('accessToken', token, {hhtpOnly: true,})
                .json(theRestOfTheFields);
            
        })
    },
    register : (req, res) => {

        const checkIfUserAlreadyExists = 'SELECT * FROM users WHERE username = ?'

        db.query(checkIfUserAlreadyExists, [req.body.username], (err, data)=>{
            if(err) {
                return res.status(500).json(err);
            }
            if (data.length) {
                return res.status(409).json('User already exists');
            }
            const hashedPassword = bcryptjs.hashSync(req.body.password, 10);
            const tableFields = [req.body.username, req.body.email, hashedPassword, req.body.name];
            const createNewUser = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";

            db.query(createNewUser, [tableFields], (err, data) =>{
                if (err){
                    return res.status(500).json(err);
                }
                return res.status(200).json('User created successfully');
            });
        });

    },
    logout : (req, res) => {
        res
            .clearCookie('accessToken',{
            secure:true,
            sameSite:'none'
            
        })
            .status(200)
            .json('Successfully logged out');
    }
};

export default authController;