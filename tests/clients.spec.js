"use strict";

const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const clients = endpoints.clients();

describe("Testing /clients", function() {

  it("auth", function() {
    const auth = clients.auth(process.env.USERNAME, process.env.PASSCODE);
    expect(auth).toBe(null);
  });

  it("get", function() {
    const get = clients.get(process.env.CLIENT_ID, process.env.AUTH_TOKEN);
    expect(get).toBe(null);
  });

  it("post", function() {
    const post = clients.post(process.env.CLIENT_ID, process.env.AUTH_TOKEN);
    expect(post).toBe(null);
  });

});
