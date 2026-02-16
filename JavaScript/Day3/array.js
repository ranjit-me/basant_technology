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
  //   console.log(arr[3].length);
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length > st.length) {
      st = arr[i];
    }
  }
  console.log(st);
}

// arr();
// countString();
largeString();
