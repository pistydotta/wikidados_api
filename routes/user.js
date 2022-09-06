const express = require('express')
const router = express.Router()
const {findAll, findOne, create, update, deleteUser} = require('../controller/user')

router.get("/users", findAll)
router.get("/users/:id", findOne)
router.post("/users", create)
router.put("/users/:id", update)
router.delete("/users/:id", deleteUser)

module.exports = router