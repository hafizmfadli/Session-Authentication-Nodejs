require('dotenv').config()
const express = require('express')
const { MemoryStore } = require('express-session')
const session = require('express-session')
const userDAO = require('./dao/user')
const redis =  require('redis')
const RedisStore = require('connect-redis')(session)
let redisCLient = require('./db/redis')
const app = express()
const PORT = process.env.PORT || 8000

const sessionStorage = new MemoryStore()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

// session middleware
app.use(session({
    name: 'sessionid',
    secret: process.env.SESSION_SECRET,
    store: new RedisStore({ client: redisCLient}),
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60
    }
}))

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