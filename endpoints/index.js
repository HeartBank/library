"use strict";

class Endpoints {

  constructor(developer_key, developer_secret, base_url="https://kiitos.heartbank.cloud") {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
  }

  users() {
    return require('./users')(this.developer_key, this.developer_secret, this.base_url);
  }

  clients() {
    return require('./clients')(this.developer_key, this.developer_secret, this.base_url);
  }

  branches(client_id, auth_token) {
    return require('./branches')(this.developer_key, this.developer_secret, this.base_url, client_id, auth_token);
  }

  customers(client_id, auth_token) {
    return require('./customers')(this.developer_key, this.developer_secret, this.base_url, client_id, auth_token);
  }

  transactions(client_id, auth_token) {
    return require('./transactions')(this.developer_key, this.developer_secret, this.base_url, client_id, auth_token);
  }

  payments(client_id, auth_token) {
    return require('./payments')(this.developer_key, this.developer_secret, this.base_url, client_id, auth_token);
  }

  recurrences(client_id, auth_token) {
    return require('./recurrences')(this.developer_key, this.developer_secret, this.base_url, client_id, auth_token);
  }

  subscriptions(client_id, auth_token) {
    return require('./subscriptions')(this.developer_key, this.developer_secret, this.base_url, client_id, auth_token);
  }

}

module.exports = (developer_key, developer_secret, base_url) => new Endpoints(developer_key, developer_secret, base_url);
