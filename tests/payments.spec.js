"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const payments = endpoints.payments(process.env.CLIENT_ID, process.env.AUTH_TOKEN, [process.env.BRANCH_ID, process.env.CUSTOMER_ID, process.env.USER_ID]);

describe("Testing /payments", () => {

  it("get all payments", done => {
    payments.get()
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("resend authorization code", done => {
    payments.get({payment_id:process.env.PAYMENT_ID})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post new payment", done => {
    payments.post({amount:10.31, description:"hello world"})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("process payment", done => {
    payments.post({payment_id:process.env.PAYMENT_ID, auth_code:process.env.AUTH_CODE})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

});
