const request = require('supertest');
const app = require('./estoque'); // Substitua pelo caminho correto para o seu app

describe('GET /estoque/health', () => {
  it('should respond with status 200', async () => {
    await request(app).get('/estoque/health').then(
      (res)=>{
        expect(res.status).toBe(200);
      }
    );
  });
  
  it('should respond with the correct message', async () => {
    await request(app).get('/estoque/health').then(
      (res)=>{
        expect(res.body).toEqual({ status: 'ok' }); // Ajuste conforme a resposta esperada
      }
    );
  });
});