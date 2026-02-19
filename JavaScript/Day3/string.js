function lengthTrim() {
  let str = "I am in Bangalore                        ";
  console.log(str.trim().length);
}

/* 
    single space separaete str.split(" ");
    single _ separaete str.split("_");
    single __ separaete str.split("__");
*/
function splitJoin() {
  let str = "I am in Bangalore";
  console.log("Split Method " + str.split(" "));
  console.log("Split and Join Method  " + str.split(" ").join(" "));
}

function luCase() {
  let city = "bangAloRe";
  let state = "Karnataka";
  console.log(city.toLocaleLowerCase());
  console.log(city.toLocaleUpperCase());
  console.log(state + " " + city);
  console.log(state.concat(" " + city));
}

function includeSearch(){
  let str = "i am in bangalore";
  console.log(str.includes("am"));
  console.log(str.search("am"));
  console.log(str.search("The"));
}
// lengthTrim();
// splitJoin();
// luCase();
includeSearch();
