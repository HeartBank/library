"use strict";

const request = require('request-promise');

class Customers {

  constructor(developer_key, developer_secret, base_url, client_id, auth_token) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.client_id = client_id;
    this.auth_token = auth_token;
  }

  get({customer_id}) {
    return request({
      method: 'GET',
      uri: this.base_url + '/customers/' + customer_id,
      qs: {},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  post({customer_id, message}) {
    return request({
      method: 'POST',
      uri: this.base_url + '/customers/' + customer_id,
      form: {message},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token) => new Customers(developer_key, developer_secret, base_url, client_id, auth_token);
