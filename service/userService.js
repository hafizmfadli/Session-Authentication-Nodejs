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
        return Promise.reject(new Error('signup failed'))    
    }
}

module.exports = {
    signup    
}