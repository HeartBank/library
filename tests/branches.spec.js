"use strict";

require('dotenv').config();
const endpoints = require('../endpoints')(process.env.DEVELOPER_KEY, process.env.DEVELOPER_SECRET, process.env.LOCALHOST);
const branches = endpoints.branches(process.env.CLIENT_ID, process.env.AUTH_TOKEN);

xdescribe("Testing /branches", () => {

  it("get", done => {
    branches.get({branch_id:process.env.BRANCH_ID})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

  it("put", done => {
    branches.put({branch_id:process.env.BRANCH_ID, interest:"savings", rate:10})
    .then(data => {
      console.log(data);
      expect(data.code).toBe(200);
      done();
    });
  });

});
