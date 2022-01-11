const Router = require('@koa/router');
const userRouter = new Router();
const userController = require('../controller/userController');
const userServerUrlMapping = require('../config/server/userServerUrlMapping.json');

userRouter.post(userServerUrlMapping.login, userController.login);

module.exports = userRouter;

