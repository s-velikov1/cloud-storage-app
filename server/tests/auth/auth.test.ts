import supertest from 'supertest';
import app from '../../src/server';
import mongoConnect, { dropTestingDb } from '../../src/config/database';

describe('Auth', () => {
  beforeAll(async() => {
    await mongoConnect(true);
  })

  const userData1 = {
    email: 'testing@gmail.com',
    password: '123456',
    confirmPassword: '123456'
  }

  it('should register a new user', async () => {

    const res = await supertest(app)
      .post('/api/auth')
      .send(userData1)
    ;
    
    expect(res.statusCode).toBe(200);
    // @ts-ignore
    expect(JSON.parse(res.text).success).toBe(true);
  });

  it('should fail register a new user', async () => {
    const res = await supertest(app)
      .post('/api/auth')
      .send(userData1)
    ;

    expect(res.statusCode).toBe(400);
  })

  afterAll(async () => {
    await dropTestingDb();
  })
});
