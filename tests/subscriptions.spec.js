"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const subscriptions = endpoints.subscriptions(process.env.CLIENT_ID, process.env.AUTH_TOKEN, [process.env.BRANCH_ID, process.env.CUSTOMER_ID, process.env.USER_ID]);

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
