let request = require('supertest');
let app = require('../server.js');

const HELLO_WORLD = "Hello World!";

describe('GET /', function () {
    it('should display "Hello World!"', function (done) {
        // The line below is the core test of our app.
        request(app).get('/').expect(HELLO_WORLD, done)
    });
});
