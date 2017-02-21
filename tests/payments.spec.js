"use strict";

const endpoints = require('../endpoints')("developer_key", "developer_secret");
const payments = endpoints.payments("client_id", "auth_token", ["branch", "customer", "user"]);

describe("Testing /payments", function() {

  it("get all payments", function() {
    const get = payments.get();
    expect(get).toBe(null);
  });

  it("resend authorization code", function() {
    const get = payments.get({payment_id:1234});
    expect(get).toBe(null);
  });

  it("post new payment", function() {
    const post = payments.post({amount:10.31, description:"hello world"});
    expect(post).toBe(null);
  });

  it("process payment", function() {
    const post = payments.post({payment_id:1234, auth_code:"123456"});
    expect(post).toBe(null);
  });

});
