"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const users = endpoints.users();

describe("Testing /users", () => {

  it("get new address", done => {
    users.get()
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("get profile", done => {
    users.get(process.env.USER_ID)
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

});
