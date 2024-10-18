const express = require('express');
const app = express();
const PORT = 3000;

app.get('/notification/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
