let arr = [-3, 30, 1, -2, 10];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let sortedArray = bubbleSort(arr);
console.log(arr);
function bubbleSortDo(arr) {
  let interchnage;
  do {
    interchnage = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        interchnage = true;
      }
    }
  } while (interchnage);
  return arr;
}
let sortedDo = bubbleSortDo("Two for Loop" + arr);
console.log("Usig Bubble Sort " + sortedDo);
