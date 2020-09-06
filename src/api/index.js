const express = require('express')
const metaRouter = require('./routes/metaRouter')
const api = express()

api.use('/scrape', metaRouter)

module.exports = api