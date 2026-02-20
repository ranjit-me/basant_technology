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

