// L32 Activating Strict Mode
'use strict';

/*
// Check for undefined variables
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// Check for reserved variable names
// const interface = 'Audio';
// const private = 534;
// const if = 23;


// L33 Functions
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// L34 Function Declarations vs. Expressions
// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}

// const age1 = calcAge1(1991);

// Function expression
// const age2 = calcAge2(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// L35 Arrow Functions
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// L36 Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}

console.log(fruitProcessor(2, 3));


// L37 Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 -  birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


// L39 Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micahel', 'Steven', 'Peter'];
console.log(friends); 

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 -  birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// L40 Basic Array Operations (Methods)
const friends = ['Micahel', 'Steven', 'Peter'];

// Add elements
let newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);


newLength = friends.unshift('John');
console.log(friends);
console.log(newLength);

// Remove elements
friends.pop(); // Last element
const popped = friends.pop();
console.log(friends);
console.log(popped);

const shifted = friends.shift(); // First element
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
} else if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// L42 Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}


// L43 Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

// Dot Notation
console.log(jonas.lastName);

// Bracket Notation
console.log(jonas['lastName']);

// Expression difference in notations
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know abotu Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas.interestedIn) // This looks for the property 'interestedIn' instead of returned prompt

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Micahel"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// L44 Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    //     // return 2037 - jonas.birthYear;        
    // }
   
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' } driver's license.`;
    },
    
    getSummary2: () => `${console.log(this)} ${this.firstName} is a ${this.age} year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : 'does not have'} a driver's license`  
};

// console.log(jonas.calcAge(1992));
// console.log(jonas['calcAge'](1991));

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46 year old teacher, and he has a driver's licesnse."

console.log(jonas.getSummary())
console.log(jonas.getSummary2())


// L46 Iteration: The for Loop
// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');
// console.log('Lifting weights repetition 7 🏋️');
// console.log('Lifting weights repetition 8 🏋️');
// console.log('Lifting weights repetition 9 🏋️');
// console.log('Lifting weights repetition 10 🏋️');

// for loop keeps runnning while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// for (let rep = 5; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}


// L47 Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];    

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for(let i = 0; i < jonas.length; i++) {
    // Reading for jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS---');  
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---');  
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}


// L48 Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ..., 4
// 4, 3, ...., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------- Start exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}
*/


// L49 The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep} 🏋️`);
    rep++;
}

// Gives us a number between 0 and 5
// +1 gives us a number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}