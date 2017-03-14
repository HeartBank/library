"use strict";

const request = require('request-promise');

class Users {

  constructor(developer_key, developer_secret, base_url) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
  }

  get(user_id=null) {
    return request({
      method: 'GET',
      uri: this.base_url + '/users' + (user_id ? '/' + user_id : ''),
      qs: {},
      json: true,
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

module.exports = (developer_key, developer_secret, base_url) => new Users(developer_key, developer_secret, base_url);
