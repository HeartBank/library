"use strict";

const request = require('request-promise');

class Transactions {

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

  get({customer, q, fetch, page, start, end, filters:{account, fund, reserve}}) {
    if (customer) { // return customer's transactions
      return request({
        method: 'GET',
        uri: this.base_url + '/transactions/' + this.branch_id + '/' + this.customer_id,
        qs: {q, fetch, page, start, end, account, fund, reserve},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    } else { // return branch's transactions
      return request({
        method: 'GET',
        uri: this.base_url + '/transactions/' + this.branch_id,
        qs: {q, fetch, page, start, end, account, fund, reserve},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    }
  }

  post({message, command, to, amount, currency, anonymity, description, media}) {
    if (message) { // new transaction message
      return request({
        method: 'POST',
        uri: this.base_url + '/transactions/message',
        form: {message, media:Buffer.from(media).toString('base64')},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    } else { // new transaction
      return request({
        method: 'POST',
        uri: this.base_url + '/transactions',
        form: {command, to, amount, currency, anonymity, description, media:Buffer.from(media).toString('base64')},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    }
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token, ids) => new Transactions(developer_key, developer_secret, base_url, client_id, auth_token, ids);
