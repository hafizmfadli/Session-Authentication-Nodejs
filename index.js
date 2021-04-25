require('dotenv').config()

const express = require('express')
const session = require('./middleware/session')
const userDAO = require('./dao/user')
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

// session middleware
app.use(session)

// endpoint dummy untuk bikin session
app.get('/session', (req, res) => {
    req.session.lastmodifed = new Date()
    res.end()
})

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/login', (req, res) => {
    res.render('pages/login')
})

app.get('/signup', (req, res) => {
    res.render('pages/signup')
})

app.get('/product', (req, res) => {
    res.render('pages/product')
})

app.listen(PORT, async() => {
    try {
        await userDAO.createUserTable()    
        console.log(`LISTEN PORT ${PORT}`)
    } catch (error) {
        console.error(error)
    }
})