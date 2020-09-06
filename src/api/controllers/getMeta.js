const urlMetadata = require('url-metadata')

const scrape = async (req, res) => {
  const { url } = req.query

  urlMetadata(url)
    .then((metadata) =>{
        res.json({ metadata })
      }, (error) => {
        res.json({ error }).status(400)
    })

}

module.exports = { scrape }