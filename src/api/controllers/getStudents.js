
const getSampleNames = (req, res) => {
  res.send({
    users:[
    {id: 1, name: 'How to train your dragon' },
    {id: 2, name: 'Queen of Katwe'},
    ]
  })
}

module.exports = { getSampleNames }