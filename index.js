require('dotenv').config()
const express = require('express')
const { MemoryStore } = require('express-session')
const session = require('express-session')
const app = express()
const PORT = process.env.PORT || 8000

const sessionStorage = new MemoryStore()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

// session middleware
app.use(session({
    name: 'sessionid',
    secret: process.env.SESSION_SECRET,
    store: sessionStorage,
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60
    }
}))

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

app.listen(PORT, () => console.log(`LISTEN ${PORT} SESSION_SECRET`))