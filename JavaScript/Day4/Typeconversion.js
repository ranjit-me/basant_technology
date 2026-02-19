//Implicite conversion Explicite coversion

function implicit() {
  let st = 5 + "3";
  console.log(st);
  let value = 5 ** "3";
  console.log(value);
  let n = 1 + 2 + "abcd" + 1 + 2;
  console.log(n);
  let data = 1 + 2 + 3 + "avc";
  console.log(data);
  let condition = 1 + true;
  console.log(condition);
  console.log(1 / 0);
}
function explicit() {
  // explicite conversion also called as type casting
  let num = 123;
  console.log(num);
  var value = String(1234);
  console.log(value);
  value = Boolean("1234");
  console.log(value);
  value = Boolean("");
  console.log(value);
  value = Number("1234");
  console.log(value);
}
// implicit();
explicit();
