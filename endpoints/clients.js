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
      headers: {"Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64')} // Note: Cannot have Cookie
    });

  }

  get(client_id, auth_token) {

    return request({
      method: 'GET',
      uri: this.base_url + '/clients',
      form: {},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${client_id}; token=${auth_token}`
      }
    });

  }

  post(client_id, auth_token) {

    return request({
      method: 'POST',
      uri: this.base_url + '/clients',
      form: {},
      json: true,
      headers: {
        "Authorization": 'Basic ' + Buffer.from(this.developer_key + ':' + this.developer_secret).toString('base64'),
        "Cookie": `client=${client_id}; token=${auth_token}`
      }
    });

  }

}

module.exports = (developer_key, developer_secret, base_url) => new Clients(developer_key, developer_secret, base_url);
