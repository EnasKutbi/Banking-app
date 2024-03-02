class Bank {
  constructor(name) {
    this.name = name;
    this.branchs = [];
  }
  addBranch(branch) {
    if (!this.branchs.includes(branch)) {
      const result = this.branchs.push(branch);
      return result > 0 ? true : false;
    }
  }

  addCustomer(branch, customer) {
    if (this.branchs.includes(branch)) {
      const result = branch.addCustomer(customer);
      return result > 0 ? true : false;
    }
  }

  addCustomerTransaction(branch, customerId, amount) {
    const targetBranch = this.findBranchByName(branch.name);
    if (targetBranch) {
      targetBranch.addCustomerTransaction(customerId, amount);
      return true;
    } else {
      return false;
    }
  }

  findBranchByName(branchName) {
    return this.branchs.find((branch) => branch.name === branchName);
  }

  checkBranch(branch) {
    return this.branchs.includes(branch);
  }

  listCustomers(branch, includeTransactions) {
    const targetBranch = this.findBranchByName(branch.name);
    if (targetBranch) {
      const customers = targetBranch.getCustomers();
      customers.forEach((customer) => {
        console.log(
          `Customer Name: ${customer.getName()} \nCustmer ID: ${customer.getId()}`
        );
        if (includeTransactions) {
          const transactions = customer.getTransactions();
          transactions.forEach((transaction) => {
            console.log(
              `Amount: ${
                transaction.amount
              } \nDate: ${transaction.date.toDateString()} \n \n`
            );
          });
        }
      });
    }
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

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000);

customer1.addTransactions(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
