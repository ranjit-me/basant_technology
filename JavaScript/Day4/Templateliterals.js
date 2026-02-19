function templateLiterals() {
  //to reduse the use of concat using template literals

  let name = "David";
  let op = "Hello I am " + name;
  console.log(op);

  console.log(`Hello i am ${name}`);
  console.log(`Hello i am
    _______
    ${name}`);
}
function forInLoop() {
  // for in loop
  // for in loop generally used to iterate there object
  let obj = {
    name: "David",
    Number: "123",
  };
  for (let key in obj) {
    console.log(`key:${key}`);
    //   console.log(key);
    console.log(obj[key]);
  }
}
function forOfLoop() {
  //for of loop used to iterate both
  let arr = ["1", "2", "3", "4", "5"];
  for (let value of arr) {
    console.log(value);
  }
  let city = "Bangalore";
  for (let char of city) {
    console.log(char);
  }
}

forOfLoop();
