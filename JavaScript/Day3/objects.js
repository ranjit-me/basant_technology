function Object() {
  let laptop = {
    name: "Apple",
    mode: "Air M4",
    processer: "M4",
    ram: "16 gb",
  };
  console.log(laptop);
  console.log(laptop.name);
  console.log(laptop["name"]);
}
function obj2() {
  let employee = {
    name: "David",
  };
  console.log(employee);
  employee.programming = "javasctipt";
  console.log(employee);
  employee["id"] = 1234;
  console.log(employee);
}

function objMethods() {
  let employee = {
    name: "David",
    id: 123,
  };
  console.log(Object.keys(employee));
  console.log(Object.values(employee));
}



objMethods();

// Object();
// obj2();
