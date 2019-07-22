module.exports = async (req, res) => {
  // CORS preflight approve
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Max-Age': '86400'
    })
    return res.end()
  }
  
  const { body } = req
  if (body && body.name) {
    return res.end(`Hello ${body.name}, you just parsed the request body!`)
  }

  res.status(400).send('Bad request')
}
