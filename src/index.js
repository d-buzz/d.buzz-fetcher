const express = require('express')
const api = require('./api')
const app = express()
const cors = require('cors')

app.use(cors())

app.use('/api/v1', api)

app.listen(3010, () => console.log('server running on port 3010'))