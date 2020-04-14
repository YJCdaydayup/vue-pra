const userModel = require('./../models/user')

module.exports = {
    async showRegister(ctx, next) {
        let users = await userModel.getUser()
        ctx.render('register')
    }
}