const express = require('express')
const app = express()
const port = 3000

// Rotas
app.get('/estoque/health', (req, res) => {
    res.json({status: 'ok'}).status(200)
})

if (require.main === module) {
  app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = app