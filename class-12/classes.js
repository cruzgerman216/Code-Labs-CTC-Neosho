var User = /** @class */ (function () {
    function User(name, teeth, fingerNails, hairColor) {
        this.name = name;
        this.teeth = teeth;
        this.fingerNails = fingerNails;
        this.hairColor = hairColor;
    }
    User.prototype.talk = function () {
        console.log("My name is ".concat(this.name, ". I am talking"));
    };
    User.prototype.walk = function () {
        console.log("My name is ".concat(this.name, ". I am walking"));
    };
    return User;
}());
var person = new User("John", true, true, "blue");
// person.name = "John";
// person.teeth = false;
// person.fingerNails = true;
// person.hairColor = "Blue"
person.talk();
person.walk();
console.log(person);
