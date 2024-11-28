const request = require('supertest');
const app = require('./auth');

describe('GET /auth/health', () => {
  it('Status 200, OK', async () => {
    await request(app).get('/auth/health').then(
      (res)=>{
        expect(res.status).toBe(200);
      }
    );
  });
  
  it('Mensagem de status: OK', async () => {
    await request(app).get('/auth/health').then(
      (res)=>{
        expect(res.body).toEqual({ status: 'ok' });
      }
    );
  });
});