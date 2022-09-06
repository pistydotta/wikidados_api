const user = require('../models/user')
const User = require('../models/user')



module.exports = {

    findAll: async (req, res) => {
        try {
            const users = await User.find()
            res.send({ users, statusCode: 200 })
        } catch (error) {
            res.send({ error, message: "Erro ao encontrar usuarios", statusCode: 500 })
        }
    },

    findOne: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.send({ user, statusCode: 200 })
        } catch (error) {
            res.send({ error, message: "Erro ao encontrar usuario especifico", statusCode: 500 })
        }

    },

    create: async (req, res) => {
        try {
            const user = await User.create({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            })
            res.send({ user, statusCode: 200, message: "Usuario criado com sucesso" })
        } catch (error) {
            res.send({ error, message: "Erro ao criar usuario", statusCode: 500 })
        }
    },

    update: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            })
            res.send({ user, statusCode: 201 })
        } catch (error) {
            console.log(error)
            res.send({ error, statusCode: 500 })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.send({ user, statusCode: 200 })
        } catch (error) {
            res.send({ error, statusCode: 500 })
        }
    }



}