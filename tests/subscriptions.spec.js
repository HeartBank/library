"use strict";

const endpoints = require('../endpoints')("developer_key", "developer_secret");
const subscriptions = endpoints.subscriptions("client_id", "auth_token", ["branch", "customer", "user"]);

describe("Testing /subscriptions", function() {

  it("get all subscriptions", function() {
    const get = subscriptions.get();
    expect(get).toBe(null);
  });

  it("post new subscription", function() {
    const post = subscriptions.post({webhook:"http://example.com"});
    expect(post).toBe(null);
  });

  it("edit subscription", function() {
    const put = subscriptions.put({subscription_id:1234, webhook:"http://example.com"});
    expect(put).toBe(null);
  });

  it("delete subscription", function() {
    const del = subscriptions.delete({subscription_id:1234});
    expect(del).toBe(null);
  });

});
