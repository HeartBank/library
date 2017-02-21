"use strict";

class Transactions {

  constructor(developer_key, developer_secret, client_id, auth_token, [branch_id, customer_id, user_id]) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.client_id = client_id;
    this.auth_token = auth_token;
    this.branch_id = branch_id;
    this.customer_id = customer_id;
    this.user_id = user_id;
  }

  get({customer, q, fetch, page, start, end, filters:{account, fund, reserve}}) {
    if (customer) { // return customer's transactions
      return null;
    } else { // return branch's transactions
      return null;
    }
  }

  post({message, command, amount, currency, anonymity, description, media}) {
    if (message) { // new transaction message
      return null;
    } else { // new transaction
      return null;
    }
  }

}

module.exports = (developer_key, developer_secret, client_id, auth_token, ids) => new Transactions(developer_key, developer_secret, client_id, auth_token, ids);
