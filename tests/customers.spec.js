"use strict";

const endpoints = require('../endpoints')("developer_key", "developer_secret");
const customers = endpoints.customers("client_id", "auth_token", ["branch", "customer", "user"]);

describe("Testing /customers", function() {

  it("get", function() {
    const get = customers.get();
    expect(get).toBe(null);
  });

});
