var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
var greeter = new Greeter("Hello, Crazy World!");
document.body.innerHTML = greeter.sayHi();
