var operation = "+";
let n1 = 4;
let n2 = 2;
switch (operation) {
  case "+":
    console.log(n1 + n2);
    break;
  case "-":
    console.log(n1 - n2);
    break;
  case "*":
    console.log(n1 * n2);
    break;
  case "/":
    console.log(n1 / n2);
    break;
  case "%":
    console.log(n1 % n2);
    break;
  default:
    console.log("Wrong input !!");
}

var mobile = "iphone";
switch (mobile) {
  case "iphone":
    console.log("Display Only Iphone");
    break;
  case "samsung":
    console.log("Displlay Only samsung Mobile");
    break;
  case "Vivo":
    console.log("Display Only Vivo Mobile");
    break;
  default:
    console.log("Wrong input..");
}

// remember this.  if case is boolean the switch(true/false) here  
let score = 80;
switch (true) {
  case score > 80:
    console.log("Scored Distintion");
    break;
  case score > 60:
    console.log("Scored first Class");
    break;
  default:
    console.log("Score not available ");
}
