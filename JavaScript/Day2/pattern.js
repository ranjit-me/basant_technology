function pattern1() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
function patt3() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let str = "*";
    console.log(str.repeat(i));
  }
}
function patt4() {
  let n = 5;
  let str = "*";
  let space = " ";
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + str.repeat(i));
  }
}
function patt5() {
  let n = 5;
  let str = "* ";
  let space = " ";
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + str.repeat(i));
  }
  for (let i = n - 1; i >= 1; i--) {
    console.log(space.repeat(n - i) + str.repeat(i));
  }
}

pattern1();

patt3();
patt4();
patt5();
