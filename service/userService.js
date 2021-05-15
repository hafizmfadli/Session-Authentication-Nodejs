const userDAO = require('../dao/user')
const bcrypt = require('bcrypt')

const signup = async (email, password) => {
    // 1. validasi email (dilakukan middlware)

    try {
        // 2. password hashing
        const saltRounds = 10
        const hash = await bcrypt.hash(password, saltRounds)
        
        // 3. insert data to db
        const user = await userDAO.insertOneUser(email, hash)
        return user
    } catch (error) {
        return Promise.reject(error)    
    }
}

const login = async (email, password) => {
    // 1. validasi email (sudah dilakukan di middleware)
    const error = new Error()

    try {
        // 2. find user
        const user = await userDAO.findUserByEmail(email)
        const match = await bcrypt.compare(password, user.password)
        if(match){
            return user
        }
        error.status = 400
        error.errors = [
            {
                param: 'password',
                msg: 'email atau password salah'
            }
        ]
        throw error
    } catch (error) {
        return Promise.reject(error)
    }
} 

module.exports = {
    signup,
    login    
}