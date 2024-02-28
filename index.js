class Bank{
  name;
  branches;

  constructor(name) {
    this.name = name;
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
  name;
  customers;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }
  addCustomerTransaction(customerId, amount) {}
}

class Customer {
  name;
  id;
  transactions;

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
  getBalance() {}
  addTransactions(amount) {
    this.transactions.push(amount);
  }
}

class Transaction {
  amount;
  date;

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
