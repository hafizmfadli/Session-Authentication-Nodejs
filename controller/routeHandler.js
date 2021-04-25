const { validationResult } = require('express-validator')

const userServive = require('../service/userService')

const getHomePage = (req, res) => {
    res.render('pages/index')
}

const getLoginPage = (req, res) => {
    res.render('pages/login')
}

const getSignupPage = (req, res) => {
    res.render('pages/signup')
}

const getProductPage = (req, res) => {
    res.render('pages/product')
}

const signupHandler = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const error = validationResult(req)
        if(!error.isEmpty()){
            throw error
        }
        const user = await userServive.signup(email, password)
        req.session.user = user
        res.json({
            message: 'signup user success',
            data: user
        })
    } catch (error) {
        res.status(400).json({errors : error.array()})
    }
}

module.exports = {
    getHomePage,
    getLoginPage,
    getProductPage,
    getSignupPage,
    signupHandler
}