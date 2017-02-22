"use strict";

const request = require('request-promise');

class Clients {

  constructor(developer_key, developer_secret, base_url) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
  }

  auth(username, passcode) {

      request({
        method: 'POST',
        uri: this.base_url + '/clients/auth',
        form: {username, passcode},
        json: true,
        headers: {

        }
      })

      .then(function (body) {
        //console.log(body);
        return body;
      })

      .catch(function (err) {
        console.log(err);
      });

  }

  get(client_id, auth_token) {
    return null;
  }

  post(client_id, auth_token) {
    return null;
  }

}

module.exports = (developer_key, developer_secret, base_url) => new Clients(developer_key, developer_secret, base_url);
