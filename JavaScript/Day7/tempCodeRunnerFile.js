function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(`count is ${count}`);
  }
  return inner;
}
let closure = outer();
closure();
closure();