import Bank from "./bank";
import Branch from "./branch";
import Customer from "./customer";
import Transaction from "./transaction";

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
console.log(
  bankAlahli.addCustomerTransaction(makkahBranch, myCustmer1.getId(), 500)
);
console.log(
  bankAlahli.addCustomerTransaction(makkahBranch, myCustmer2.getId(), 3000)
);
console.log(
  bankAlahli.addCustomerTransaction(jeddahBranch, myCustmer3.getId(), 1000)
);

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
