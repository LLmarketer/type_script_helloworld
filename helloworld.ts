/* helloworld.ts */
class Greeter {
  // this is a construction
    constructor(public message: string) { }
    // we're saying take a string as parameter
    sayHi() {
      //say hi it is a method that say enclose the string
      //into 2 h1 tags
        return "<h1>" + this.message + "</h1>";
    }
}
//we instantiate the class passing a new string which is the
//hello world in this case into the new declared variable greeter
let greeter = new Greeter("Hello, Crazy World!");

//we call the document the page asking to add to the body (property)
//innerHTML (another property) and we ask to add the variable greeter
//with the method sayHi
document.body.innerHTML = greeter.sayHi();
