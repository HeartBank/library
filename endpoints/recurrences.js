"use strict";

const request = require('request-promise');

class Recurrences {

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
      uri: this.base_url + '/recurrences',
      qs: {},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${this.client_id}; token=${this.auth_token}`
      }
    });
  }

  post({cycle, start, message, command, to, amount, currency, anonymity, description, media}) {
    if (message) { // new recurrence message
      return request({
        method: 'POST',
        uri: this.base_url + '/recurrences/message',
        form: {cycle, start, message, media},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    } else { // new recurrence transaction
      return request({
        method: 'POST',
        uri: this.base_url + '/recurrences',
        form: {cycle, start, command, to, amount, currency, anonymity, description, media},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    }
  }

  put({recurrence_id, cycle, start, message, command, to, amount, currency, anonymity, description, media}) {
    if (message) { // edit recurrence message
      return request({
        method: 'PUT',
        uri: this.base_url + '/recurrences/' + recurrence_id + '/message',
        form: {cycle, start, message, media},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    } else { // edit recurrence transaction
      return request({
        method: 'PUT',
        uri: this.base_url + '/recurrences/' + recurrence_id,
        form: {cycle, start, command, to, amount, currency, anonymity, description, media},
        json: true,
        headers: {
          "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
          "Cookie": `client=${this.client_id}; token=${this.auth_token}`
        }
      });
    }
  }

  delete({recurrence_id}) {
    return request({
      method: 'DELETE',
      uri: this.base_url + '/recurrences/' + recurrence_id,
      form: {},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${this.client_id}; token=${this.auth_token}`
      }
    });
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token, ids) => new Recurrences(developer_key, developer_secret, base_url, client_id, auth_token, ids);
