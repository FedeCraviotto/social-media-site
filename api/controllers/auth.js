import db from '../connect.js';
const authController = {
    login : (req, res) => {
        res.send('ok');
    },
    register : (req, res) => {

    },
    logout : (req, res) => {
        res.send('ok');
    }
};

export default authController;