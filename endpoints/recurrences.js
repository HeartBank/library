"use strict";

const request = require('request-promise');

class Recurrences {

  constructor(developer_key, developer_secret, base_url, client_id, auth_token) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.client_id = client_id;
    this.auth_token = auth_token;
    this.branch_id = branch_id;
    this.customer_id = customer_id;
  }

  get() {
    return request({
      method: 'GET',
      uri: this.base_url + '/recurrences',
      qs: {},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  post({cycle, start, message, command, to, amount, currency, anonymity, description, media}) {
    if (message) { // new recurrence message
      return request({
        method: 'POST',
        uri: this.base_url + '/recurrences/message',
        form: {cycle, start, message, media:media ? Buffer.from(media).toString('base64') : null},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    } else { // new recurrence transaction
      return request({
        method: 'POST',
        uri: this.base_url + '/recurrences',
        form: {cycle, start, command, to, amount, currency, anonymity, description, media:media ? Buffer.from(media).toString('base64') : null},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    }
  }

  put({recurrence_id, cycle, start, message, command, to, amount, currency, anonymity, description, media}) {
    if (message) { // edit recurrence message
      return request({
        method: 'PUT',
        uri: this.base_url + '/recurrences/' + recurrence_id + '/message',
        form: {cycle, start, message, media:media ? Buffer.from(media).toString('base64') : null},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    } else { // edit recurrence transaction
      return request({
        method: 'PUT',
        uri: this.base_url + '/recurrences/' + recurrence_id,
        form: {cycle, start, command, to, amount, currency, anonymity, description, media:media ? Buffer.from(media).toString('base64') : null},
        json: true,
        headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
        auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
      });
    }
  }

  delete({recurrence_id}) {
    return request({
      method: 'DELETE',
      uri: this.base_url + '/recurrences/' + recurrence_id,
      form: {},
      json: true,
      headers: {Cookie: `client=${this.client_id}; token=${this.auth_token}`},
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

module.exports = (developer_key, developer_secret, base_url, client_id, auth_token) => new Recurrences(developer_key, developer_secret, base_url, client_id, auth_token);
