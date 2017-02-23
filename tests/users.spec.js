"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const users = endpoints.users(process.env.CLIENT_ID, process.env.AUTH_TOKEN, [process.env.BRANCH_ID, process.env.CUSTOMER_ID, process.env.USER_ID]);

describe("Testing /users", () => {

  it("get", done => {
    users.get()
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

});
