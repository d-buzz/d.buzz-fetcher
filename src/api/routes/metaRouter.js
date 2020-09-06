const { Router } = require('express')
const { scrape } = require('../controllers/getMeta')

const metaRouter = Router()

metaRouter.get('/', scrape)

module.exports = metaRouter