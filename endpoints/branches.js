"use strict";

const request = require('request-promise');

class Branches {

  constructor(developer_key, developer_secret, base_url, client_id, auth_token) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.client_id = client_id;
    this.auth_token = auth_token;
  }

  get({branch_id}) {
    return request({
      method: 'GET',
      uri: this.base_url + '/branches/' + branch_id,
      qs: {},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  put({branch_id, interest, rate}) {
    return request({
      method: 'PUT',
      uri: this.base_url + '/branches/' + branch_id,
      form: {interest, rate},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token) => new Branches(developer_key, developer_secret, base_url, client_id, auth_token);
