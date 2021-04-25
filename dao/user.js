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
        console.log("User table berhasil dibuat")    
        return Promise.resolve()
    } catch (error) {
        return Promise.reject(new Error("User table gagal dibuat"))        
    }    
}

module.exports = {
    createUserTable
}