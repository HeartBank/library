"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const recurrences = endpoints.recurrences(process.env.CLIENT_ID, process.env.AUTH_TOKEN);
const fs = require('fs');
const media = fs.readFileSync(__dirname + '/heartbank.gif');

xdescribe("Testing /recurrences", () => {

  it("get all recurrences", done => {
    recurrences.get()
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post new recurrence transaction", done => {
    recurrences.post({cycle:"Daily", start:"2020-1-7 12:00", command:"give", to:"John", amount:10.40, currency:"USD", anonymity:false, description:"🏡 hello world", media})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("post new recurrence message", done => {
    recurrences.post({cycle:"Daily", start:"2020-1-7 12:00", message:"🏡 hello world", media:null})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("edit recurrence transaction", done => {
    recurrences.put({recurrence_id:process.env.RECURRENCE_ID, cycle:"Daily", start:"2017-1-7 12:00", command:"give", to:"John", amount:10.40, currency:"USD", anonymity:false, description:"🏡 hello world", media})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(410);
      done();
    });
  });

  it("edit recurrence message", done => {
    recurrences.put({recurrence_id:process.env.RECURRENCE_ID, cycle:"Daily", start:"2017-1-7 12:00", message:"🏡 hello world", media})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(410);
      done();
    });
  });

  it("delete recurrence", done => {
    recurrences.delete({recurrence_id:process.env.RECURRENCE_ID})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(410);
      done();
    });
  });

});
