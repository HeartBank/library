"use strict";

const request = require('request');

class Clients {

  constructor(developer_key, developer_secret, base_url) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
  }

  auth(username, passcode) {
    request
    .post('http://google.com/img.png')
    .form({})
    .on('response', function(response) {
      console.log(response.statusCode)
      console.log(response.headers['content-type'])
    });
    return null;
  }

  get(client_id, auth_token) {
    return null;
  }

  post(client_id, auth_token) {
    return null;
  }

}

module.exports = (developer_key, developer_secret, base_url) => new Clients(developer_key, developer_secret, base_url);
