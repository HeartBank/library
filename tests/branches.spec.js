"use strict";

const endpoints = require('../endpoints')("developer_key","developer_secret");
const branches = endpoints.branches("client_id","auth_token",["branch","customer","user"]);

describe("Testing /branches", function() {

  it("get", function() {
    const get = branches.get();
    expect(get).toBe(null);
  });

});
