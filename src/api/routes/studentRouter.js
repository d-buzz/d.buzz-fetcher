const { Router } = require('express')
const { getSampleNames } = require('../controllers/getStudents')

const studentRouter = Router()

studentRouter.get('/names', getSampleNames)

module.exports = studentRouter