"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const users = endpoints.users();

describe("Testing /users", () => {

  it("get profile", done => {
    users.get()
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("get new address", done => {
    users.get(process.env.USER_ID)
    .then(data => {
      console.log(data);
      expect(data.code).toBe(410);
      done();
    });
  });

  it("post verify", done => {
    users.verify({address:"165kZ2iWYXNxUXFXwTfSQeQZk3saq3SWEy", message:"hello world", signature:"IImCjrrGYpI6cGH+B3TYGffp56D3Wxse0guGamYlMf7aDQT0QqxHMpzk1Z6OOC/dyqzT2pBT911ORlCC/bto99Q="})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post thank", done => {
    users.thank({user_id:process.env.USER_ID, address:"1PZTKgkvfog8MTroMhqwgkXV9HwL8Xtmtc", amount:0.0001, description:"hello world", pin:"432782265"})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(410);
      done();
    });
  });

  it("put webhook", done => {
    users.webhook({url:process.env.LOCALHOST})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("put withdraw", done => {
    users.withdraw({user_id:process.env.USER_ID, address:"1PZTKgkvfog8MTroMhqwgkXV9HwL8Xtmtc", cycle:"daily", pin:"432782265"})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(410);
      done();
    });
  });

});
