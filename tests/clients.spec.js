"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const clients = endpoints.clients();

describe("Testing /clients", () => {

  it("auth", done => {

    clients.auth(process.env.USERNAME, process.env.PASSCODE)
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    })

  });

  it("get", done => {
    clients.get(process.env.CLIENT_ID, process.env.AUTH_TOKEN)
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    })
  });

  it("post", done => {
    clients.post(process.env.CLIENT_ID, process.env.AUTH_TOKEN)
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    })
  });

});
