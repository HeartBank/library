"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const recurrences = endpoints.recurrences(process.env.CLIENT_ID, process.env.AUTH_TOKEN, [process.env.BRANCH_ID, process.env.CUSTOMER_ID, process.env.USER_ID]);
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
