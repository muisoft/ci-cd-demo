const request = require('supertest');

const app = require('../server.js');

describe('GET /', function(){
    it('Should respond with Hello', function(done){
        request(app).get('/').expect('Hello', done);
    })
})