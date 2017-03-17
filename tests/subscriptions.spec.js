"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const subscriptions = endpoints.subscriptions(process.env.CLIENT_ID, process.env.AUTH_TOKEN);

xdescribe("Testing /subscriptions", () => {

  it("get all subscriptions", done => {
    subscriptions.get()
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post new subscription", done => {
    subscriptions.post({webhook:"http://example.com"})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("edit subscription", done => {
    subscriptions.put({subscription_id:process.env.SUBSCRIPTION_ID, webhook:"http://example.com"})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("delete subscription", done => {
    subscriptions.delete({subscription_id:process.env.SUBSCRIPTION_ID})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

});
