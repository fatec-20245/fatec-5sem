const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Endpoint de autenticação
app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    // Lógica simples de autenticação (substitua com sua lógica real)
    if (username === 'user' && password === 'pass') {
        return res.status(200).json({ message: 'Autenticação bem-sucedida!' });
    } else {
        return res.status(401).json({ message: 'Credenciais inválidas.' });
    }
});

// Endpoint de saúde
app.get('/auth/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Inicia o servidor
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    })
}

module.exports = app;
