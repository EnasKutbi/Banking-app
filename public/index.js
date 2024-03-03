"use strict";
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
        const transaction = new Transaction(amount);
        const result = this.transactions.push(transaction);
        return result > 0 ? true : false;
    }
}
class Transaction {
    constructor(amount) {
        this.amount = amount;
        this.date = new Date();
    }
}
const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);
customer1.addTransactions(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
/*My validation checks*/
console.log("\nMy validation checks:");
const bankAlahli = new Bank("Alahli");
const makkahBranch = new Branch("Makkah Branch");
const jeddahBranch = new Branch("Jeddah Branch");
const myCustmer1 = new Customer("Amira", 4);
const myCustmer2 = new Customer("Rana", 5);
const myCustmer3 = new Customer("Ali", 6);
//1 addBranch
console.log("\naddBranch check: ");
console.log(bankAlahli.addBranch(makkahBranch));
console.log(bankAlahli.addBranch(jeddahBranch));
//2 addCustomer
console.log("\naddCustomer check: ");
console.log(bankAlahli.addCustomer(makkahBranch, myCustmer1));
console.log(bankAlahli.addCustomer(makkahBranch, myCustmer2));
console.log(bankAlahli.addCustomer(jeddahBranch, myCustmer3));
//3 addCustomerTransaction
console.log("\naddCustomerTransaction check: ");
console.log(bankAlahli.addCustomerTransaction(makkahBranch, myCustmer1.getId(), 500));
console.log(bankAlahli.addCustomerTransaction(makkahBranch, myCustmer2.getId(), 3000));
console.log(bankAlahli.addCustomerTransaction(jeddahBranch, myCustmer3.getId(), 1000));
//4 findBranchByName
console.log("\nfindBranchByName check: ");
console.log(bankAlahli.findBranchByName("Makkah Branch"));
console.log(bankAlahli.findBranchByName("Jeddah"));
//5 checkBranch
console.log("\ncheckBranch check: ");
console.log(bankAlahli.checkBranch(makkahBranch));
console.log(bankAlahli.checkBranch(jeddahBranch));
//6 addCustomer to Branch
console.log("\naddCustomer to branch check: ");
console.log(makkahBranch.addCustomer(myCustmer3));
//7 addCustomerTransaction
console.log("\naddCustomerTransaction check: ");
console.log(makkahBranch.addCustomerTransaction(5, 400));
//8 addTransactions
console.log("\naddTransactions to customer check: ");
console.log(myCustmer2.addTransactions(5000));
//9 listCustomers
console.log("\nlistCustomers check: ");
console.log(bankAlahli.listCustomers(makkahBranch, true));
console.log(bankAlahli.listCustomers(jeddahBranch, true));
//10 search
console.log("\nsearch check: ");
console.log(bankAlahli.searchCustomer("Ran"));
console.log(bankAlahli.searchCustomer("amira"));
