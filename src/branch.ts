import Customer from "./customer";
export default class Branch {
  name: string;
  customers: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }

  addCustomer(customer: Customer) {
    if (!this.customers.includes(customer)) {
      const result = this.customers.push(customer);
      return result > 0 ? `success` : `fail`;
    } else {
      return false;
    }
  }
  addCustomerTransaction(customerId: number, amount: number) {
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
