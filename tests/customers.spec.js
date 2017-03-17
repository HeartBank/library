"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const customers = endpoints.customers(process.env.CLIENT_ID, process.env.AUTH_TOKEN);

xdescribe("Testing /customers", () => {

  it("get", done => {
    customers.get({customer_id:process.env.CUSTOMER_ID})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post", done => {
    customers.post({customer_id:process.env.CUSTOMER_ID, message:"hello world"})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

});
