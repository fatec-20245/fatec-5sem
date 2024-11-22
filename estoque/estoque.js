const express = require('express')
const app = express()
const port = 3000

// Rotas
app.get('/estoque/health', (req, res) => {
    res.json({status: 'ok'}).status(200)
})

app.listen(port, () => {
  console.log(`Aplicação iniciada e ouvindo na porta: ${port}`)
})

module.exports = app