const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redisCLient = require('../db/redis')

module.exports = session({
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
})
