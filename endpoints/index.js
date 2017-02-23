"use strict";

class Endpoints {

  constructor(developer_key, developer_secret, base_url="https://endpoint.heartbank.cloud") {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.base_url = base_url;
  }

  clients() {
    return require('./clients')(this.developer_key, this.developer_secret, this.base_url);
  }

  users(client_id, auth_token, ids) {
    return require('./users')(this.developer_key, this.developer_secret, this.base_url, client_id, auth_token, ids);
  }

  branches(client_id, auth_token, ids) {
    return require('./branches')(this.developer_key, this.developer_secret, client_id, auth_token, ids);
  }

  customers(client_id, auth_token, ids) {
    return require('./customers')(this.developer_key, this.developer_secret, client_id, auth_token, ids);
  }

  transactions(client_id, auth_token, ids) {
    return require('./transactions')(this.developer_key, this.developer_secret, client_id, auth_token, ids);
  }

  payments(client_id, auth_token, ids) {
    return require('./payments')(this.developer_key, this.developer_secret, client_id, auth_token, ids);
  }

  recurrences(client_id, auth_token, ids) {
    return require('./recurrences')(this.developer_key, this.developer_secret, client_id, auth_token, ids);
  }

  subscriptions(client_id, auth_token, ids) {
    return require('./subscriptions')(this.developer_key, this.developer_secret, client_id, auth_token, ids);
  }

}

module.exports = (developer_key, developer_secret, base_url) => new Endpoints(developer_key, developer_secret, base_url);
