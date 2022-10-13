class User {
  name: string;
  teeth: boolean;
  fingerNails: boolean;
  hairColor: string;

  constructor(
    name: string,
    teeth: boolean,
    fingerNails: boolean,
    hairColor: string
  ) {
    this.name = name;
    this.teeth = teeth;
    this.fingerNails = fingerNails;
    this.hairColor = hairColor
  }

  talk() {
    console.log(`My name is ${this.name}. I am talking`);
  }

  walk() {
    console.log(`My name is ${this.name}. I am walking`);
  }
}

let person = new User("John", true, true, "blue");
// person.name = "John";
// person.teeth = false;
// person.fingerNails = true;
// person.hairColor = "Blue"

person.talk();
person.walk();
console.log(person);
