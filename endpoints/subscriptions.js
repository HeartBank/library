"use strict";

const request = require('request-promise');

class Subscriptions {

  constructor(developer_key, developer_secret, base_url, client_id, auth_token) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.client_id = client_id;
    this.auth_token = auth_token;
  }

  get() {
    return request({
      method: 'GET',
      uri: this.base_url + '/subscriptions',
      qs: {},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  post({webhook}) {
    return request({
      method: 'POST',
      uri: this.base_url + '/subscriptions',
      form: {webhook},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  put({subscription_id, webhook}) {
    return request({
      method: 'PUT',
      uri: this.base_url + '/subscriptions/' + subscription_id,
      form: {webhook},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  delete({subscription_id}) {
    return request({
      method: 'DELETE',
      uri: this.base_url + '/subscriptions/' + subscription_id,
      form: {},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token) => new Subscriptions(developer_key, developer_secret, base_url, client_id, auth_token);
