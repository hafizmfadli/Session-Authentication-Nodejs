require('dotenv').config()

const express = require('express')
const session = require('./middleware/session')
const userDAO = require('./dao/user')
const routes = require('./routes/route')
const identifyUser = require('./middleware/identifyUser')

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

// middleware
app.use(express.json())
app.use(session)
app.use('*', identifyUser)
app.use(routes)

app.listen(PORT, async() => {
    try {
        await userDAO.createUserTable()    
        console.log(`LISTEN PORT ${PORT}`)
    } catch (error) {
        console.error(error)
    }
})