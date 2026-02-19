function arr() {
  let arr = [];
  let n = 10;
  let count = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = count;
    count++;
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function countString() {
  let str = "I am in Bangalore";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "a") {
      count++;
    }
  }
  console.log(count);
}

function largeString() {
  let str = "I am in Bangalore";
  let st = "";
  let length = str.length;
  let arr = str.trim().split(" ");

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length > st.length) {
      st = arr[i];
    }
  }
  console.log(st);
}
function aMethod() {
  let arr = ["india", "srilanka"];
  console.log(arr);
  arr.push("Austrelia");
  console.log(arr);
  arr.pop();
  console.log(arr);
  arr.unshift("Zimbambwe");
  console.log(arr);
}
function basic() {
  let arr = ["c", "david", 12, false];
  console.log(arr);
}


// arr();
// countString();
// largeString();
// aMethod();
// basic();

