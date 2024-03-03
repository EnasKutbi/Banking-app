"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Branch {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        if (!this.customers.includes(customer)) {
            const result = this.customers.push(customer);
            return result > 0 ? `success` : `fail`;
        }
        else {
            return false;
        }
    }
    addCustomerTransaction(customerId, amount) {
        const customer = this.customers.find((customer) => customer.id === customerId);
        if (customer) {
            customer.addTransactions(amount);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = Branch;
