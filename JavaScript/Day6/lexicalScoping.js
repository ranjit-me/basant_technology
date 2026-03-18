/*
    Global Scope
    Local Scope
    Nested Scope 
    Block Scope
    let=Block Scope
    var=Global Scope
    const=Block Scope
*/

function GlobalScope() {
  let brand = "5 star"; //global scope

  function ad() {
    console.log(`brand is: ${brand}`);
  }
  console.log(`Outside is: ${brand}`);
  ad();
}
function LocalScope() {
  function ad() {
    let name = "Prathamesh"; //Local Scope
    console.log(name);
  }
  ad();
  //   console.log(name);
}
function NestedScope() {
  let name = "Prathamesh";
  function display() {
    let name2 = "Ranjit";
    console.log("Name 2 :-", name2);
  }
  display();
}
let brand = "5 star"; //global Scope
function BlockScope() {
  let name = "Prathamesh"; //local Scope
  function display() {
    let final = "Ad"; //nested scope
    if (true) {
      let name2 = "Rajnit"; // block scope

      console.log(
        `${final}is performed by ${name} and${name2} for ${brand} brand`,
      );
    }
  }
  display();
}
// GlobalScope();
// LocalScope();
// NestedScope();
BlockScope();
