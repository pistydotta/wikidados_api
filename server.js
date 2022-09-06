require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const cors = require('cors')
app.use(cors())

require('./config/db_connect')
const userRoutes = require('./routes/user')

app.use(bodyParser.json())

app.use('/', userRoutes)

app.listen(port, () => {
    console.log("app listening on port ", port)
})