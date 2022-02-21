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
        try {
            res.status(200).json({
                status: 200,
                message: 'Welcome to Login_user Section! :D'
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error
            })
        }
    },
    login_post: async (req, res) => {
        const input = {
            username: req.body.username,
            password: req.body.password
        }
        if (input.username.length == 0 || input.password.length == 0)
            res.status(202).json({
                status: 202,
                result: 'FAILED',
                message: 'Please fulfill all of the form data!'
            })
        else {
            await User_account.authenticate(input)
                .then(result => {
                    if(result.data)
                        res.status(result.status).json({
                            status: result.status,
                            result: result.result,
                            message: result.message,
                            data: format(result.data)
                        })
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