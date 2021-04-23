const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

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

app.listen(PORT, () => console.log(`LISTEN ${PORT}`))