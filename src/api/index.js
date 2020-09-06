const express = require('express')
const studentRouter = require('./routes/studentRouter')
const api = express()

api.use('/students', studentRouter)

module.exports = api