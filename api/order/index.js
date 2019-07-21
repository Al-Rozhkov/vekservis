module.exports = async (req, res) => {
  const { body } = req
  if (body.name) {
    return res.end(`Hello ${body.name}, you just parsed the request body!`)
  }

  res.status(400).send('Bad request')
}
