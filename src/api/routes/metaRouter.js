const { Router } = require('express')
const { scrape, generateImageLink } = require('../controllers/getMeta')

const metaRouter = Router()

metaRouter.get('/', scrape)
metaRouter.post('/generate', generateImageLink)

module.exports = metaRouter