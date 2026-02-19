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
