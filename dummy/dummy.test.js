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
describe('GET /dummy/sum', () => {
    test('should return 200 and the correct sum when given valid numbers', async () => {
        const response = await request(app).get('/dummy/sum?a=5&b=3');
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(8);
    });

    test('should return 400 if parameters are missing', async () => {
        const response = await request(app).get('/dummy/sum');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Both query parameters "a" and "b" must be valid numbers.');
    });

    test('should return 400 if one or both parameters are not numbers', async () => {
        const response = await request(app).get('/dummy/sum?a=foo&b=3');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Both query parameters "a" and "b" must be valid numbers.');
    });
});
