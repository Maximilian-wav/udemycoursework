//max js script for lesson 3

// calculateAge(1990);

//this is hoisting

//function declaration

//function calculateAge(year) {
//console.log(2020 - year);
//}

// function is stored first as the variable object, make it already available for us to use it

//but how does this work out for Function expressions
/*

var retirement = function(year) {
  console.log(65 - (2020 - year));
};

retirement(1990);

*/

//but what happens if we first call function and THEN write the code
/*

retirement(1990);

var retirement = function(year) {
  console.log(65 - (2020 - year));
};

//WE GET AN ERROR MESSAGE
*/

//variable hoisting
/* 

console.log(age); //we get undefined
var age = 25;
console.log(age); //we get 25

//variables that dont have a value yet will always be undefined

function foo() {
  var age = 79;
  console.log(age);
}
foo();
console.log(age);

*/
//most important use case is the fact that we can use function declarations before we declare them in our code
//very useful but confuses new javascript developers

//SCOPING CHAIN

//each new function creates a new scope
//lexical function - the position within our code - a function inside of another function gets access to the scope of the parent function and its variables

//scope chain GLOBAL -> 1st scope -> 2nd scope
//locally scoped variables are not visible to their parent scopes

//scoping example
/*

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}

*/
//this works because of the scoping chain, the 2nd scope has access to the 1st scope and global scope
//execution stack the order in which functions called /= scope chain the order in which functions are written lexically

// This keyword

//this keyword simply points at the global object - the window object by default
// in a method call- function attached to an object , it points to the object
//"this" is not assigned a value until the function it is attached to call

// console.log(this);

//the window object is logged
/*

calculateAge(1994);

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this); //regular function  call- attached to the global object
}

*/

var max = {
  name: "Max",
  yearOfBirth: 1994,
  calculateAge: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

max.calculateAge();

var paige = {
  name: "Paige",
  yearOfBirth: 1996
};

//method  borrowing - borrow max method and use on paige

paige.calculateAge = max.calculateAge;

//now we treat function as variable.
paige.calculateAge();
