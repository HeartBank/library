"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const transactions = endpoints.transactions(process.env.CLIENT_ID, process.env.AUTH_TOKEN, [process.env.BRANCH_ID, process.env.CUSTOMER_ID, process.env.USER_ID]);
const fs = require('fs');
const media = fs.createReadStream(__dirname + '/heartbank.gif').toString('base64');

describe("Testing /transactions", function() {

  it("get from branch", function() {
    const get = transactions.get({q:"hello", fetch:10, page:2, start:"2017-1-7", end:"2017-1-8", filters:{account:false, fund:false, reserve:false}});
    expect(get).toBe(null);
  });

  it("get from customer", function() {
    const get = transactions.get({customer:true, q:"hello", fetch:10, page:2, start:"2017-1-7", end:"2017-1-8", filters:{account:false, fund:false, reserve:false}});
    expect(get).toBe(null);
  });

  it("post with transaction", function() {
    const post = transactions.post({command:"give", amount:10.40, currency:"USD", anonymity:false, description:"🏡 hello world", media});
    expect(post).toBe(null);
  });

  it("post with message", function() {
    const post = transactions.post({message:"🏡 hello world", media});
    expect(post).toBe(null);
  });

});
