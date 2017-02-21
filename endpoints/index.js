"use strict";

class Endpoints {

  constructor(developer_key, developer_secret) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
  }

  clients() {
    return require('./clients')(this.developer_key, this.developer_secret);
  }

  users(client_id, auth_token, ids) {
    return require('./users')(this.developer_key, this.developer_secret, client_id, auth_token, ids);
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

}

module.exports = (developer_key, developer_secret) => new Endpoints(developer_key, developer_secret);
