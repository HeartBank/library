"use strict";

class Clients {

  constructor(developer_key, developer_secret) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
  }

  auth(username, passcode) {
    return null;
  }

  get(client_id, auth_token) {
    return null;
  }

  post(client_id, auth_token) {
    return null;
  }

}

module.exports = (developer_key, developer_secret) => new Clients(developer_key, developer_secret);
