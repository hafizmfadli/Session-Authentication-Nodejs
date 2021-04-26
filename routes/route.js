const express = require('express')
const router = express.Router()
const controller = require('../controller/routeHandler')
const dataValidatorSanitizer = require('../middleware/dataValidatorSanitizer')

router.get('/', controller.getHomePage)

router.get('/login', controller.getLoginPage)

router.get('/signup', controller.getSignupPage)

router.get('/product', controller.getProductPage)

router.post('/signup', dataValidatorSanitizer.signup, controller.signupHandler)

router.post('/login', dataValidatorSanitizer.login , controller.loginHandler)

router.get('/logout', controller.logoutHandler)

module.exports = router
