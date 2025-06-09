import request from 'supertest';
import { app as enduranceApp } from 'endurance-core';
import { strict as assert } from 'assert';

describe('App', function () {
  it('should return This is a public endpoint. on /public-endpoint/', async function () {
    const res = await request(enduranceApp)
      .get('/template/public-endpoint/')
      .expect('Content-Type', /json/)
      .expect(200);

    assert.equal(res.body.message, 'This is a public endpoint.');
  });
});
