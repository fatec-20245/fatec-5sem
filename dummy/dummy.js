const express = require('express');
const app = express();
const port = 3001;

// Middleware para processar JSON
app.use(express.json());

// Endpoint de saúde
app.get('/dummy/health', (req, res) => {
    res.json({ status: 'not ok' });
});

// Inicia o servidor apenas se este arquivo for executado diretamente
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}

module.exports = app;
