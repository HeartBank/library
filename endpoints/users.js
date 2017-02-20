"use strict";

class Users {

  constructor(developer_key, developer_secret, client_id, auth_token, ids) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.client_id = client_id;
    this.auth_token = auth_token;
    this.branch_id = ids[0];
    this.customer_id = ids[1];
    this.user_id = ids[2];
  }

  get() {
    return null;
  }

}

module.exports = (developer_key, developer_secret, client_id, auth_token, ids) => new Users(developer_key, developer_secret, client_id, auth_token, ids);
