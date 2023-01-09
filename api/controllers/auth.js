import db from '../connect.js';
import bcryptjs from 'bcryptjs';
import { jwt } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authController = {
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
            // Creamos un token con el cual el usuario va a poder consultar todo lo que tenga que consultar al backend.
            // Con su id, y la secret key
            // Usamos JWT  poder propagar entre dos partes, y de forma segura, la identidad de un determinado usuario
            // Sigue el estándar de autorización OAuth 2.0, que es “Bearer”.
            //Estos privilegios están codificados en objetos de tipo JSON, que se incrustan dentro de del payload o cuerpo de un mensaje que va firmado digitalmente.
            const token = jwt.sign({id:data[0].id}, process.env.SECRET_KEY);
            // Deconstruimos para devolver los datos del usuario logeado, salvo su password
            // En la respuesta, ademas de enviar el json, guardamos el token en las cookies
            // HttpOnly para que solo circule entre sitios web
            const {password, ...theRestOfTheFields} = data[0];
            res.status(200).cookie('acessToken', token, {hhtpOnly: true,}).json(theRestOfTheFields);
            
        })
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
                if (err){
                    return res.status(500).json(err);
                }
                return res.status(200).json('User created successfully');
            });
        });

    },
    logout : (req, res) => {
        res.send('ok');
    }
};

export default authController;