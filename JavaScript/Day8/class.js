//class is an blueprint of an object

function timepass() {
  class House {
    constructor(name, color, add) {
      this.name = name;
      this.color = color;
      this.add = add;
    }
    myhouse() {
      console.log(`my house:- ${this.name}`);
    }
  }
  class Aparment extends House {
    myhouse() {
      console.log(`i am in the childrean class`);
    }
  }
  class Prestage extends House {
    myhouse() {
      console.log("hello prestage");
    }
  }

  let obj = new House("Shanti Nivas", "Red", "At post Hajapur");
  console.log(obj);
  obj.myhouse();

  //Inheritance and polymorphisum class using extend keyword
  let obj2 = new Aparment("David");
  console.log(obj2);
  obj2.myhouse();

  let obj3 = new Prestage();
  obj3.myhouse();
}
timepass();

