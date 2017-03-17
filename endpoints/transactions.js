"use strict";

const request = require('request-promise');

class Transactions {

  constructor(developer_key, developer_secret, base_url, client_id, auth_token) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.client_id = client_id;
    this.auth_token = auth_token;
  }

  get({branch_id, customer_id, q, fetch, page, start, end, filters:{account, fund, reserve}}) {
    if (customer_id) { // return customer's transactions
      return request({
        method: 'GET',
        uri: this.base_url + '/transactions/' + branch_id + '/' + customer_id,
        qs: {q, fetch, page, start, end, account, fund, reserve},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    } else { // return branch's transactions
      return request({
        method: 'GET',
        uri: this.base_url + '/transactions/' + branch_id,
        qs: {q, fetch, page, start, end, account, fund, reserve},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    }
  }

  post({message, command, to, amount, currency, anonymity, description, media}) {
    if (message) { // new transaction message
      return request({
        method: 'POST',
        uri: this.base_url + '/transactions/message',
        form: {message, media:media ? Buffer.from(media).toString('base64') : null},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    } else { // new transaction
      return request({
        method: 'POST',
        uri: this.base_url + '/transactions',
        form: {command, to, amount, currency, anonymity, description, media:media ? Buffer.from(media).toString('base64') : null},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    }
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token) => new Transactions(developer_key, developer_secret, base_url, client_id, auth_token);
