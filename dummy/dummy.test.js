const request = require('supertest');
const app = require('../dummy'); // Substitua pelo caminho correto para o seu app

describe('GET /dummy/health', () => {
  it('should respond with status 200', async () => {
    const response = await request(app).get('/dummy/health');
    expect(response.status).toBe(200);
  });

  it('should respond with the correct message', async () => {
    const response = await request(app).get('/dummy/health');
    expect(response.body).toEqual({ status: 'ok' }); // Ajuste conforme a resposta esperada
  });
});
