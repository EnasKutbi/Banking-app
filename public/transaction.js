"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(amount) {
        this.amount = amount;
        this.date = new Date();
    }
}
exports.default = Transaction;
