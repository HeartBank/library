"use strict";

const endpoints = require('../endpoints')("developer_key", "developer_secret");
const recurrences = endpoints.recurrences("client_id", "auth_token", ["branch", "customer", "user"]);
const fs = require('fs');
const media = fs.createReadStream(__dirname + '/heartbank.gif').toString('base64');

describe("Testing /recurrences", function() {

  it("get all recurrences", function() {
    const get = recurrences.get();
    expect(get).toBe(null);
  });

  it("post new recurrence transaction", function() {
    const post = recurrences.post({cycle:"Daily", start:"2017-1-7 12:00 PM", command:"give", amount:10.40, currency:"USD", anonymity:false, description:"🏡 hello world", media});
    expect(post).toBe(null);
  });

  it("post new recurrence message", function() {
    const post = recurrences.post({cycle:"Daily", start:"2017-1-7 12:00 PM", message:"🏡 hello world", media});
    expect(post).toBe(null);
  });

  it("edit recurrence transaction", function() {
    const put = recurrences.put({recurrence_id:1234, cycle:"Daily", start:"2017-1-7 12:00 PM", command:"give", amount:10.40, currency:"USD", anonymity:false, description:"🏡 hello world", media});
    expect(put).toBe(null);
  });

  it("edit recurrence message", function() {
    const put = recurrences.put({recurrence_id:1234, cycle:"Daily", start:"2017-1-7 12:00 PM", message:"🏡 hello world", media});
    expect(put).toBe(null);
  });

  it("delete recurrence", function() {
    const del = recurrences.delete({recurrence_id:1234});
    expect(del).toBe(null);
  });

});
