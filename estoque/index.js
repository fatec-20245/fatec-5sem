const express = require('express')
const app = express()
const port = 3000

// Rotas
app.get('/health/estoque', (req, res) => {
  res.json({status: ok}).status(200)
})

app.listen(port, () => {
  console.log(`Aplicação iniciada e ouvindo na porta: ${port}`)
})