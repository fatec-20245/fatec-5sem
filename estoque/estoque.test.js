const request = require('supertest');
const app = require('../estoque'); // Substitua pelo caminho correto para o seu app

describe('GET /health/estoque', () => {
  it('should respond with status 200', async () => {
    const response = await request(app).get('/health/estoque');
    expect(response.status).toBe(200);
  });

  it('should respond with the correct message', async () => {
    const response = await request(app).get('/health/estoque');
    expect(response.body).toEqual({ status: 'ok' }); // Ajuste conforme a resposta esperada
  });
});
