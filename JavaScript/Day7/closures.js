function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(`count is ${count}`);
  }
  return inner;
}
let closure = outer();
closure();
closure();
// closure = it is a JS that allows to retain outer variable value even after outher function is closed
// it is a JS function that rememnbers outer varaible even after the outer function is closed

function banking() {
  let balance = 10000;
  function addMoney(value) {
    balance = balance + value;
    return balance;
  }
  function withdrawMoney(value) {
    balance = balance - value;
    return balance;
  }
  return { addMoney, withdrawMoney };
}
let balanceData = banking();
console.log("i have balance", balanceData.addMoney(2000));
console.log("i have new balance", balanceData.withdrawMoney(150));
