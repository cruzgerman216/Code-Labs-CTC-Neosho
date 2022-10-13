var User = /** @class */ (function () {
    function User() {
        // Properties
        this.username = '';
        this.age = 0;
    }
    // Methods 
    User.prototype.talk = function () {
        console.log("I am talking");
    };
    return User;
}());
var firstUser = new User();
firstUser.talk();
