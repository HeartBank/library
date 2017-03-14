"use strict";

const request = require('request-promise');

class Clients {

  constructor(developer_key, developer_secret, base_url) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
  }

  auth(username, passcode) {
    return request({
      method: 'POST',
      uri: this.base_url + '/clients/auth',
      form: {username, passcode},
      json: true,
      headers: {Cookie: ""}, // Note: Cannot have Cookie
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  get(client_id, auth_token) {
    return request({
      method: 'GET',
      uri: this.base_url + '/clients',
      qs: {},
      json: true,
      headers: {Cookie: `client=${client_id}; token=${auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  post(client_id, auth_token) {
    return request({
      method: 'POST',
      uri: this.base_url + '/clients',
      form: {},
      json: true,
      headers: {Cookie: `client=${client_id}; token=${auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

module.exports = (developer_key, developer_secret, base_url) => new Clients(developer_key, developer_secret, base_url);
