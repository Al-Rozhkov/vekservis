module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.setHeader('Access-Control-Max-Age', '86400')
  }
  
  const { body } = req
  if (body && body.name) {
    return res.end(`Hello ${body.name}, you just parsed the request body!`)
  }

  res.status(400).send('Bad request')
}
