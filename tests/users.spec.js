"use strict";

const endpoints = require('../endpoints')("developer_key","developer_secret");
const users = endpoints.users("client_id","auth_token",["branch","customer","user"]);

describe("Testing /users", function() {

  it("get", function() {
    const get = users.get();
    expect(get).toBe(null);
  });

});
