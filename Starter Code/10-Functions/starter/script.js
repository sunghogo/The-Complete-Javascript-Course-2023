'use strict';

/*
// L128 Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // Without default parameters
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// createBooking('LH123', 1000);
createBooking('LH123', undefined, 1000);

// L129 How Passing Arguments Works: Value vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas); // Check In
console.log(flight); // LH234 unchanged
console.log(jonas); // 'Mr. Jonas Schmedtmann' changed

// Is the same sa doing...
const flightNum = flight; // passing primitive type
const passenger = jonas; // passing object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * e + 11);
};

newPassport(jonas); // original object is changed
checkIn(flight, jonas); // Wrong passport!

// L130 First-Class and Higher-Order Functions

// L131 Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

// L132 Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Arrow function rewrite
// const greetArrow = greeting =>
//   function (name) {
//     console.log(`${greeting} ${name}`);
//   };

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Jonas');

// L133 The call and apply Methods
// L134 The bind Method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Joans Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams'); // TyperError since this is now just a regular function call

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane()

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // NaN, this keyword is the button

const arr = [this];
const obj = {
  t: this,
};
console.log(arr[0], obj.t);

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// const addVAT = value => value + value * 0.23
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Higher-order function similar to bind method partial application
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// L136 Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce(); // But this can be called again later on

// IIFE
(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

// console.log(isPrivate); // ReferenceError

// IIFE arrow function
(() => console.log(`This will ALSO never run again`))();

{
  const isPrivate = 24;
  var notPrivate = 25;
}

// console.log(isPrivate); // ReferenceError
console.log(notPrivate);

// L137 Closures
const passengerCount = 10; // Closure has priority over global variables

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // secureBooking() is popped off the stack and its EC including passengerCount should be no longer be accessible but...

for (const i of new Array(3)) booker(); // 1 2 3

console.dir(booker);
console.log(booker.scopes);
*/

// L138 More Closure Examples
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); // sets f()
f(); // 46 so f closes over VE of g()
console.dir(f); // closure of g

// Re-assigning f function
h(); // resets f()
f(); // 1554 so f closes over VE of h()
console.dir(f); // closure of h

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

const perGroup = 1000; // Not used since closure has priority
boardPassengers(180, 3);
