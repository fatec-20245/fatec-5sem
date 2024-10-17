
const express = require('express');
const app = express();
const port = 4000;

// Endpoint para verificar o status de saúde
app.get('/cart/health', (req, res) => {
    res.json({ status: "ok" });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
