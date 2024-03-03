import Transaction from "./transaction";
export default class Customer {
  name: string;
  id: number;
  transactions: Transaction[];
  constructor(name: string, id: number) {
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
  addTransactions(amount: number) {
    const transaction = new Transaction(amount);
    const result = this.transactions.push(transaction);
    return result > 0 ? true : false;
  }
}
