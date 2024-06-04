'use strict';

/*
// L93 Scoping in Practice
// Parent function scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   //   console.log(lastName); // Variable not in scope chain
  //   console.log(firstName); // Variable lookup into parent scope/global scope

  // Child function scope
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // Variable lookups
    console.log(output);

    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // Creating New variable wit same name as outer scope's variable
      const str = `Oh, and you are a millenial, ${firstName}`; // Variable lookup
      console.log(str);

      // Functions are also block scoped in ES6
      function add(a, b) {
        return a + b;
      }

      output = `NEW OUTPUT!`; // Reassigning outher scope's variable
      //   const output = `NEW OUTPUT!`; // Creating new variable
    }
    // console.log(str); // Error: str is block scoped and not accessible outside
    console.log(millenial); // var is function scoped
    // console.log(add(2, 3)); // Error:  functions are blocked scoped so cannot be accessed outside it scope chain IN STRICT MODE
    console.log(output); // Redefined an existing variable that is in scope
  }
  printAge();

  return age;
}

const firstName = 'Jonas'; // Global Variable
calcAge((1991); // Code in function only executed once it is called
// console.log(age); // Error: Cannot access to a child scope
// printAge(); // Error: In global scope, do not have access to any variables defined in child scopes


// L95 Hoisting and TDZ in Practice

// Variables Hoisting
console.log(me); // Undefined
// console.log(job); // ReferenceError TDZ
// console.log(year); // ReferenceError TDZ

var me = 'Jonas';
let job = 'teacher ';
const year = 1991;

// Functions Hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// ReferenceError TDZ
const addExpr = function (a, b) {
  return a + b;
};

// // ReferenceError TDZ
// const addArrow = (a, b) => a + b;

// // TypeError same as calling undefined()
// var addExpr = function (a, b) {
//   return a + b;
// };

// ReferenceError same as calling undefined()
var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// L97 The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // Undefined in strict mode
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window, since arrow functions get lexical this
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // Method borrowing
matilda.calcAge(); // this points to matilda object and not jonas object

const f = jonas.calcAge;
f(); // Undefined, since this is undefined and so is this.year

// L98 Regular Functions vs. Arrow Functions
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   // console.log(this); // undefined
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self); // jonas
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    // Arrow funciton inherits the this keyword parent scopre
    const isMillenial = () => {
      console.log(this); // jonas
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); // this is regular function call so the this keyword must be undefined
  },

  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}`);
  }, // this refers to parent scope, which is global scope/object
};
jonas.greet();
jonas.calcAge();
// console.log(this.firstName); // window object, undefined unless var firstName declaration

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// addArrow(2, 5, 8); // RefereneError since arrow functions do not have arguments keyword

// L99 Primitives vs. Objects (Primitive vs. Reference Types)
let age = 30;
let oldAge = age; // points to old stack address holding 30
age = 31; // points to new stack address holding 31
console.log(age, oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me; // points to same object as me on heap
friend.age = 27; // changes value on heap object, thus changing both me.age and friend.age
console.log('Friend', friend);
console.log('Me', me);


// L100 Primitives vs. Objects in Practice
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Rerefernce types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary', 'John'); // Deep nested object wiill still be referenced for both jessica2 and jessicaCopy

console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);
*/

// Addition this keyword sandboxing
function decl() {
  console.log('decl', this);
}
const expr = function () {
  console.log('expr', this);
};
const arrow = () => {
  console.log('arrow', this);
};
const obj = {
  one: console.log(this),
  two: function sneed() {
    console.log(this);
  },
  three: () => {
    console.log(this);
  },
  four: 4,
  five: 5,
  six: this.four + this.five,
  seven() {
    console.log(this.four * this.five);
  },
};

console.log(this); // window object
// By default, this refers to the global object which is window in browser UNLESS using strict mode which is undefined
decl(); // undefined
expr(); // undefined

// Has no own this keyword, which is determined lexically based on surrounding scope
arrow(); // window object

// Properties by themselves cannot access this keyword as it is undefined, need to be inside a function declaration, and be called as a method
console.log('obj 1', obj.one); // undefined
obj.two(); // obj object
obj.three(); // window object
console.log(`obj 6`, obj.six); // NaN
obj.seven(); // 28
