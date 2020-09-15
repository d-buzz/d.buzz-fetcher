const express = require('express')
const api = require('./api')
const app = express()
const cors = require('cors')
const config = require('./config')

app.use(cors())
app.get('/', (req, res) => {
    res.send({
      status: 'Dbuzz metascraper is online',
    })
  })
  
app.use('/api/v1/meta', api)
app.listen(config.port, () => console.log('server running on port ',config.port))