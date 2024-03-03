"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(branch) {
        if (!this.branches.includes(branch)) {
            const result = this.branches.push(branch);
            return result > 0 ? `${branch.name} has been added` : "Branch not exist";
        }
        else {
            return false;
        }
    }
    addCustomer(branch, customer) {
        if (this.branches.includes(branch)) {
            const result = branch.addCustomer(customer);
            if (result) {
                return true;
            }
        }
        return false;
    }
    addCustomerTransaction(branch, customerId, amount) {
        const targetBranch = this.findBranchByName(branch.name);
        if (targetBranch) {
            targetBranch.addCustomerTransaction(customerId, amount);
            return true;
        }
        else {
            return false;
        }
    }
    findBranchByName(branchName) {
        return this.branches.find((branch) => branch.name === branchName);
    }
    checkBranch(branch) {
        return this.branches.includes(branch);
    }
    listCustomers(branch, includeTransactions) {
        const targetBranch = this.findBranchByName(branch.name);
        if (targetBranch) {
            const customers = targetBranch.getCustomers();
            customers.forEach((customer) => {
                console.log(`---------------------------------------
          \nCustomer information:\nName: ${customer.getName()} \t ID: ${customer.getId()}`);
                if (includeTransactions) {
                    const transactions = customer.getTransactions();
                    transactions.forEach((transaction) => {
                        console.log(`transaction:\nAmount: ${transaction.amount} \tDate: ${transaction.date.toDateString()} `);
                    });
                }
            });
        }
    }
    searchCustomer(customerName) {
        this.branches.forEach((branch) => {
            const customers = branch.getCustomers();
            customers.forEach((customer) => {
                if (customer.getName().toLowerCase().includes(customerName.toLowerCase())) {
                    console.log(`-------------------------------------
            \nCustomer Name: ${customer.getName()} \nCustmer ID: ${customer.getId()}`);
                }
            });
        });
    }
}
exports.default = Bank;
