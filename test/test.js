var expect  = require('chai').expect;
var request = require('request');

it('API status', function(done) {
    request('http://127.0.0.1:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('API body', function(done) {
    request('http://127.0.0.1:3000' , function(error, response, body) {
        var result = JSON.parse(body);
        expect(result).to.have.property('notas');
        done();
    });
});