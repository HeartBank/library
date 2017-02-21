"use strict";

const endpoints = require('../endpoints')("developer_key", "developer_secret");
const payments = endpoints.payments("client_id", "auth_token", ["branch", "customer", "user"]);

describe("Testing /payments", function() {

  it("get", function() {
    const get = payments.get();
    expect(get).toBe(null);
  });

});
