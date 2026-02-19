function loop() {
  let input = [1, 2, 3, 4, 5, 6, 7];
  let target = 7;
  let start = 0;
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] == target) {
        arr.push(i + " " + j);
      }
    }
  }
  console.log(arr);
}

function twoPointer() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let target = 7;
  let start = 0;
  let result = [];
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[start] + arr[i] == target) {
      result.push(start, i);
    }
    start++;
  }
  console.log(result);
}
function palinndrome() {
  let st = "madam";
  let start = 0;
  let end = st.length - 1;
  while (start < end) {
    if (st.charAt(start) != st.charAt(end)) {
      console.log("not palendrome");
    } else {
      console.log("Palendrome");
    }
    start++;
    end--;
  }
}
function pal() {
  let str = "madam";
  let reverse = str.split("").reverse().join("");
  if (str == reverse) {
    console.log("is is palendrome");
  } else {
    console.log("not");
  }
}

function pr() {
  let arr = [
    { brand: "iphone", color: "black" },
    { brand: "samsung", color: "white" },
    { brand: "redme", color: "gray" },
    { brand: "iphone", color: "blue" },
  ];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].brand === "iphone") {
      console.log(arr[i]);
    }
  }
}
// twoPointer();
// palinndrome();
// pal();
pr();
