class Bank {
  constructor(name) {
    this.name = name;
    this.branchs = [];
  }
  addBranch(branch) {
    this.branches.push(branch);
  }

  addCustomer(branch, customer) {
    branch.addCustomer(customer);
  }
  addCustomerTransaction(branch, customerId, amount) {}
  findBranchByName(branchName) {}
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
      return result > 0 ? true : false;
    }
  }
  addCustomerTransaction(customerId, amount) {
    const customer = this.customers.find(
      (customer) => customer.id === customerId
    );
    if (customer) {
      customer.addTransactions(amount);
      return true;
    } else {
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
    return this.transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
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

console.log(customer1.name);
