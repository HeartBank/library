"use strict";

class Recurrences {

  constructor(developer_key, developer_secret, client_id, auth_token, [branch_id, customer_id, user_id]) {
    this.developer_key = developer_key;
    this.developer_secret = developer_secret;
    this.client_id = client_id;
    this.auth_token = auth_token;
    this.branch_id = branch_id;
    this.customer_id = customer_id;
    this.user_id = user_id;
  }

  get() {
    return null;
  }

  post({cycle, start, message, command, amount, currency, anonymity, description, media}) {
    if (message) { // new recurrence message
      return null;
    } else { // new recurrence transaction
      return null;
    }
  }

  put({recurrence_id, cycle, start, message, command, amount, currency, anonymity, description, media}) {
    if (message) { // edit recurrence message
      return null;
    } else { // edit recurrence transaction
      return null;
    }
  }

  delete({recurrence_id}) {
    return null;
  }

}

module.exports = (developer_key, developer_secret, client_id, auth_token, ids) => new Recurrences(developer_key, developer_secret, client_id, auth_token, ids);
