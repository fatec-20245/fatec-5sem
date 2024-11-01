const express = require('express');
const sum = require('./math');  // Importa a função sum
const app = express();
const port = 3001;

// Middleware para processar JSON
app.use(express.json());

// Endpoint de saúde
app.get('/dummy/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Novo endpoint para somar dois valores
app.get('/dummy/sum', (req, res) => {
    const { a, b } = req.query;

    // Converte os valores de string para número e verifica se são válidos
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Both query parameters "a" and "b" must be valid numbers.' });
    }

    // Chama a função de soma e retorna o resultado
    const result = sum(numA, numB);
    res.json({ result });
});

// Inicia o servidor apenas se este arquivo for executado diretamente
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}

module.exports = app;

