const urlMetadata = require('url-metadata')
const utils = require('./../../utils')

const scrape = async (req, res) => {
  const { url } = req.query

  console.log({ url })

  if(!url){
    return res.json({ error: 'Invalid url'}).status(400)
  }

  try {
    const metadata = await new Promise(function (resolve, reject) {
      urlMetadata(url)
        .then((metadata) => {
          resolve(metadata);
        }, (error) => {
          reject(error);
        })
    });

    if(metadata.hasOwnProperty('image') && metadata.image){
      metadata.image = utils.replaceHttp(metadata.image)
    }
    return res.json(metadata)
  } catch (error) {
    return res.json(error).status(400);
  }
}

module.exports = { scrape }