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

  post(user_id=null) {
    return new Post(this.developer_key, this.developer_secret, this.base_url, user_id);
  }

  put(user_id=null) {
    return new Put(this.developer_key, this.developer_secret, this.base_url, user_id);
  }

}

class Post {

  constructor(developer_key, developer_secret, base_url, user_id) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.user_id = user_id;
  }

  verify({address, message, signature}) {
    return request({
      method: 'POST',
      uri: this.base_url + '/users',
      form: {address, message, signature},
      json: true,
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  thank({address, amount, description, pin}) {
    return request({
      method: 'POST',
      uri: this.base_url + '/users/' + this.user_id,
      form: {address, amount, description, pin},
      json: true,
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

class Put {

  constructor(developer_key, developer_secret, base_url, user_id) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
    this.user_id = user_id;
  }

  webhook({url}) {
    return request({
      method: 'PUT',
      uri: this.base_url + '/users',
      form: {webhook:url},
      json: true,
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

  withdraw({address, cycle, pin}) {
    return request({
      method: 'PUT',
      uri: this.base_url + '/users/' + this.user_id,
      form: {address, cycle, pin},
      json: true,
      auth: {user:this.developer_key, pass:this.developer_secret, sendImmediately:true}
    });
  }

}

module.exports = (developer_key, developer_secret, base_url) => new Users(developer_key, developer_secret, base_url);
