/**
 * TestDB Contoller
 * 
 * @author Grotius Cendikia Hasiholan
 */

var fs = require('fs')
const { User_account } = require('../models')

module.exports = {
    index: (req, res) => {
        res.status(200).json({
            status: 200,
            message: 'Welcome to TestDB Section! :D'
        })
    },
    findAllAccounts: async(req, res) => {
        try {
            const datas = await User_account.findAll()

            res.status(200).json({
                status: 200,
                msg: 'Success',
                data: datas
            })
        } catch(err) {
            res.status(200).json({
                status: 500,
                message: err
            })
        }
    }
}