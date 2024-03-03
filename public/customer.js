"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("./transaction");
class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }
    addTransactions(amount) {
        const transaction = new transaction_1.default(amount);
        const result = this.transactions.push(transaction);
        return result > 0 ? true : false;
    }
}
exports.default = Customer;
