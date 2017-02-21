"use strict";

class Payments {

  constructor(developer_key, developer_secret, client_id, auth_token, [branch_id, customer_id, user_id]) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.client_id = client_id;
    this.auth_token = auth_token;
    this.branch_id = branch_id;
    this.customer_id = customer_id;
    this.user_id = user_id;
  }

  get(payment_id=null) {
    return null;
  }

  post(payment_id=null,{auth_code}) {
    return null;
  }

}

module.exports = (developer_key, developer_secret, client_id, auth_token, ids) => new Payments(developer_key, developer_secret, client_id, auth_token, ids);
