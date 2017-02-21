"use strict";

const endpoints = require('../endpoints')("developer_key", "developer_secret");
const transactions = endpoints.transactions("client_id", "auth_token", ["branch", "customer", "user"]);

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
    const post = transactions.post({command:"give", amount:10.40, currency:"USD", anonymity:false, description:"🏡 hello world", media:""});
    expect(post).toBe(null);
  });

  it("post with message", function() {
    const post = transactions.post({message:"🏡 hello world", media:""});
    expect(post).toBe(null);
  });

});
