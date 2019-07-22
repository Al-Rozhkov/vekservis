module.exports = async (req, res) => {
  // CORS preflight approve
  if (req.method === 'OPTIONS') {
    console.log('--------------123---------------')
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.setHeader('Access-Control-Max-Age', '86400')
    res.statusCode = 200
    res.end()
    
    const body = ''
    req.on('data', chunk => {
      body += chunk.toString() // convert Buffer to string
    })
    req.on('end', () => {
      console.log(body)
      res.end('ok')
    })
    return
  }

  const { body } = req
  if (body && body.name) {
    return res.end(`Hello ${body.name}, you just parsed the request body!`)
  }

  res.status(400).send('Bad request')
}
