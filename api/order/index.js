module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
  }
  
  const { body } = req
  if (body && body.name) {
    return res.end(`Hello ${body.name}, you just parsed the request body!`)
  }

  res.status(400).send('Bad request')
}
