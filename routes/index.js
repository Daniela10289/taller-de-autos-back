const express = require('express');

const authRouter = require('./authRouter');
const usersRouter = require('./usersRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/auth', authRouter);
    router.use('/users', usersRouter);
}

module.exports = routerApi;