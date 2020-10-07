const urlMetadata = require('url-metadata')
const utils = require('./../../utils')
const axios = require('axios')
const base58 = require('base58-encode')

const scrape = async (req, res) => {
  const { url } = req.query

  console.log({ url })

  if(!url){
    res.json({ error: 'Invalid url'}).status(400)
  }

  try {
    const metadata = await new Promise(function (resolve, reject) {
      urlMetadata(url)
        .then((metadata) => {
          resolve(metadata);
        }, (error) => {
          reject(error)
        })
    });

    if(metadata.hasOwnProperty('image') && metadata.image){
      metadata.image = utils.replaceHttp(metadata.image)
    }
    
    res.json(metadata)
  } catch (error) {
    res.json(error).status(400)
  }
}

const proxyLinkGenerator = (link) => {
  return `https://images.hive.blog/p/${base58(link)}`
}

const checkIfImage = (link) => {
  return new Promise((resolve, reject) => {
    const requestUrl = proxyLinkGenerator(link)
    console.log({ requestUrl })
    axios.get(requestUrl)
      .then(function (result) {
        const data = result.data
        resolve(data)
      })
      .catch(function (error) {
        resolve(error)
      })
  })
}

const generateImageLink = async (req, res) => {
  const { links } = req.body
  let hasImage = false
  let imageUrl = null

  for(let index = 0; index < links.length; index++) {
    const link = links[index]
    const result = await checkIfImage(link)

    if(typeof result === 'string') {
      hasImage = true
      imageUrl = link
      index = links.length
    }
  }

  res.json({hasImage, imageUrl}).status(200)
}

module.exports = { scrape, generateImageLink }