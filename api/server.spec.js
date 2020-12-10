const server = require('./server');
const request = require('supertest')
describe('server.js',()=>{
    test('check for testing env',()=>{
        expect(process.env.DB_ENV).toBe('testing');
    })
})

describe('GET /',()=>{
    
    test('async returns 200 ok',async()=>{
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
    })
    test('response body is JSON', async ()=>{
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json');
    })

    test('returns {api: "up"}',async ()=>{
        const res = await request(server).get('/');
        expect(res.body).toEqual({api:"up"});
    })
})