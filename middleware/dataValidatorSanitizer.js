const { body } = require('express-validator')
const UserDAO = require('../dao/user')

const signup = [
    body('email', 'email tidak valid').exists().isEmail().bail(),
    body('email').custom((value) => {
        return UserDAO.findUserByEmail(value).then((user) => {
            if(user){
                return Promise.reject(new Error('email sudah terdaftar'))
            }
        })
    }),
    body('password', 'password minimal 8 karakter').exists().isLength({ min: 8}).trim()
]

module.exports = {
    signup
}