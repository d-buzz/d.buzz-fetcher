const urlMetadata = require('url-metadata')

const scrape = async (req, res) => {
  const { url } = req.query

  console.log({ url })

  urlMetadata(url)
    .then((metadata) =>{
        res.json(metadata)
      }, (error) => {
        res.json({ error }).status(400)
    })

}

module.exports = { scrape }