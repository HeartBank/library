"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const transactions = endpoints.transactions(process.env.CLIENT_ID, process.env.AUTH_TOKEN);
const fs = require('fs');
const media = fs.readFileSync(__dirname + '/heartbank.gif');

xdescribe("Testing /transactions", () => {

  it("get from branch", done => {
    transactions.get({branch_id:process.env.BRANCH_ID, q:"hello", fetch:10, page:1, start:"2016-1-7", end:"2018-1-7", filters:{account:false, fund:false, reserve:false}})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("get from customer", done => {
    transactions.get({branch_id:process.env.BRANCH_ID, customer_id:process.env.CUSTOMER_ID, q:"hello", fetch:10, page:1, start:"2016-1-7", end:"2018-1-7", filters:{account:false, fund:false, reserve:false}})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post with transaction", done => {
    transactions.post({command:"give", to:"John", amount:10.40, currency:"USD", anonymity:false, description:"🏡 hello world", media:null})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post with message", done => {
    transactions.post({message:"🏡 hello world", media})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

});
