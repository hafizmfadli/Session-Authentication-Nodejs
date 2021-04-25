const userDAO = require('../dao/user')

const signup = async (email, password) => {
    // 1. validasi email (di middlware)

    // 2. hashing password
    const hashPassword = password

    // 3. insert to db
    try {
        const user = await userDAO.insertOneUser(email, password)
        return user
    } catch (error) {
        return Promise.reject(new Error('signup failed'))    
    }
}

module.exports = {
    signup    
}