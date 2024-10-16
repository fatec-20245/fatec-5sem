const request = require('supertest');
const app = require('../auth'); // Substitua pelo caminho correto para o seu app

describe('GET /auth/health', () => {
  it('should respond with status 200', async () => {
    const response = await request(app).get('/auth/health');
    expect(response.status).toBe(200);
  });

  it('should respond with the correct message', async () => {
    const response = await request(app).get('/auth/health');
    expect(response.body).toEqual({ status: 'ok' }); // Ajuste conforme a resposta esperada
  });
});