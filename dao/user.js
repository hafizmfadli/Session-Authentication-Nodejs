const db = require('../db/postgres')

const createUserTable = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
        user_id serial PRIMARY KEY,
        email VARCHAR ( 255 ) UNIQUE NOT NULL,
        password VARCHAR ( 255 ) NOT NULL 
    );`
    try {
        await db.query(sql)
        console.log('User table berhasil dibuat')    
        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error)        
    }    
}

const findUserByEmail = async (email) => {
    const text = `SELECT * FROM users WHERE email = $1`
    const values = [email]

    try {
        const user = (await db.query(text, values)).rows[0]
        return user
    } catch (error) {
        return Promise.reject(error)
    }
}

const insertOneUser = async (email, password) => {
    const text = `
    INSERT INTO users(email, password)
    VALUES ($1, $2)
    RETURNING *;
    `
    const values = [email, password]

    try {
        const user = (await db.query(text, values)).rows[0]
        console.log('DAO : INSERT user success', user)
        return user
    } catch (error) {
        return Promise.reject(error)
    }

}

module.exports = {
    createUserTable,
    findUserByEmail,
    insertOneUser
}