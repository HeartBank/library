"use strict";

const endpoints = require('../endpoints')("developer_key","developer_secret");
const clients = endpoints.clients();

describe("Testing /clients", function() {

  it("auth", function() {
    const auth = clients.auth("username","passcode");
    expect(auth).toBe(null);
  });

  it("get", function() {
    const get = clients.get("client_id","auth_token");
    expect(get).toBe(null);
  });

  it("post", function() {
    const post = clients.post("client_id","auth_token");
    expect(post).toBe(null);
  });

});
