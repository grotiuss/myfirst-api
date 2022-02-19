/**
 * Login_user Contoller
 * 
 * @author Grotius Cendikia Hasiholan
 */

var fs = require('fs')
const {
    User_account
} = require('../models')

const format = (user) => {
    const { id, username } = user
    return ({
        id,
        username,
        accessToken: user.generateToken()
    })
}

module.exports = {
    index: (req, res) => {
        res.status(200).json({
            status: 200,
            message: 'Welcome to Login_user Section! :D'
        })
    },
    login_post: async (req, res) => {
        const input = {
            username: req.body.username,
            password: req.body.password
        }
        if (input.username.length == 0 || input.password.length == 0)
            res.status(205).json({
                status: 205,
                result: 'FAILED',
                message: 'Please fullfill all of the form data!'
            })
        else {
            await User_account.authenticate(input)
                .then(result => {
                    if(result.data)
                        res.status(result.status).json(format(result.data))
                    else
                        res.status(result.status).json(result)
                })
        }

    },
    login_test: async(req, res) => {
        const result = {
            id: req.user.id,
            username: req.user.username,
            asAdmin: req.user.asAdmin,
            iat: req.user.iat,
            msg: 'Success'
        }
        res.status(200).json(result)
    }
}