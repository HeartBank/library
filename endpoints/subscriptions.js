"use strict";

const request = require('request-promise');

class Subscriptions {

  constructor(developer_key, developer_secret, base_url, client_id, auth_token, [branch_id, customer_id, user_id]) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.client_id = client_id;
    this.auth_token = auth_token;
    this.branch_id = branch_id;
    this.customer_id = customer_id;
    this.user_id = user_id;
  }

  get() {
    return request({
      method: 'GET',
      uri: this.base_url + '/subscriptions',
      qs: {},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${this.client_id}; token=${this.auth_token}`
      }
    });
  }

  post({webhook}) {
    return request({
      method: 'POST',
      uri: this.base_url + '/subscriptions',
      form: {webhook},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${this.client_id}; token=${this.auth_token}`
      }
    });
  }

  put({subscription_id, webhook}) {
    return request({
      method: 'PUT',
      uri: this.base_url + '/subscriptions/' + subscription_id,
      form: {webhook},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${this.client_id}; token=${this.auth_token}`
      }
    });
  }

  delete({subscription_id}) {
    return request({
      method: 'DELETE',
      uri: this.base_url + '/subscriptions/' + subscription_id,
      form: {},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${this.client_id}; token=${this.auth_token}`
      }
    });
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token, ids) => new Subscriptions(developer_key, developer_secret, base_url, client_id, auth_token, ids);
