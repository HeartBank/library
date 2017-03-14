"use strict";

const request = require('request-promise');

class Payments {

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

  get({payment_id}={payment_id:null}) {
    if (payment_id) { // resend authorization code
      return request({
        method: 'GET',
        uri: this.base_url + '/payments/' + payment_id,
        qs: {},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    } else { // return all payments
      return request({
        method: 'GET',
        uri: this.base_url + '/payments',
        qs: {},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    }
  }

  post({payment_id, code, amount, description}) {
    if (payment_id) { // process payment
      return request({
        method: 'POST',
        uri: this.base_url + '/payments/' + payment_id,
        form: {code},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    } else { // create new payment
      return request({
        method: 'POST',
        uri: this.base_url + '/payments',
        form: {amount, description},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    }
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token, ids) => new Payments(developer_key, developer_secret, base_url, client_id, auth_token, ids);
