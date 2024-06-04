/*
// L6-10
let js = 'amazing';
console.log(40 + 8 + 23 -10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = 'jonas';
let firstNamePerson

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM'";
let name = "Jonas";

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


// L!2 Data Types
let javascriptIsFun= true;
console.log(true);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// L13 let, const, var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


// L14 Basic Operators
// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

// Assignment oerators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=< <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// L15 Operator Precedence
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah);


// L17 Strings and Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


// L18 Taking Decisions if / else Statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


// L20 Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' ** '2');


let n = '1' + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n);

console.log(2 + 3 + 4 + '5'); // '95'
console.log('10' - '4' - '3' - 2  + '5') // '15'


// L21 Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean());
console.log(Boolean('Jonas'));
console.log(Boolean({})); // empty object

// const money = 0;
const money = 100;

if (money) {
    console.log("Don't Spend it all");
} else {
    console.log('You should get a job!');
}

// let height;
let height = 0;

if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


// L22 Equality Operators: == vs. ===
// const age = 18;
const age = '18';

if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

console.log('18' == 18);
console.log('18' === 18);

const favourite = Number(prompt("What's your favorite numebr?"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) { // '23' == 23
if (favourite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?'); 


// L23 Boolean Logic
const age = 16
const A = age >= 20; // false
const B = age < 30; // true

console.log(A); // false
console.log(B); // true
console.log(!A); // true
console.log(A && B); // false
console.log(A || B); // true
console.log(!A && B); // true
console.log(A || !B); // false

// L24 Logical Operators
const hasDriversLicense = true; // A
// const hasGoodVision = false; // B
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// const shouldDrive = hasDriversLicense && hasGoodVision;

// const isTired = true; // C
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}


// L26 The switch Statement
// const day = 'monday';
// const day = 'tuesday';
// const day = 'wednesday';
const day = 'thursday';


switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
    }

// if else counteraprt
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'saturday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}


// L27 Statements and Expressions
// Expressions that produce a value
3 + 4
1991
true && false && !false

// Statement that doesn't produce a value
if (23 > 10) {
    const str = 
    '23 is bigger'; // this string is an expression
    // the whole line is a statement
}

console.log(`I'm ${2037 - 1991} years old`); // this works
// console.log(`I'm ${const str = '23 is bigger'} years old`);  // this does not work
*/


// L28 The Conditional (Ternary) Operator
// const age = 23;
const age = 15;
age >= 18 ? console.log('I like to drinke wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

// if else counterpart
let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


// L30 JavaScript Releases: ES5, ES6+ and ESNext