const request = require('supertest');
const app = require('endurance-core/lib/app');
const assert = require('assert');

describe('App', function() {
  it('has the default page with the expected message', function(done) {
       request(app)
    .get('/hello-world/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);

      assert.strictEqual(res.body.message, 'Hello World!');
      
      done();
    });
  });
});
