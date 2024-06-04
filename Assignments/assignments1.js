// Lecture 10 Values and Variables
/*
let country = "United States";
let continent = "North America";
let population = "331.9";

console.log(country);
console.log(continent);
console.log(population);
*/


//Lecture 12 Data Types
/*
let isIsland = false;
let language;

console.log(isIsland);
console.log(country);
console.log(continent);
console.log(population);\
*/


// Lecture 13 let, const and var
const language = "english";
const country = "United States";
const continent = "North America";
let population = "331.9";
const isIsland = false;
// isIsland = true;


// Lecture 14: Basic Operators
const halfPopulation = population / 2;
population++;
// console.log(population);

const finlandPopulation = 6;
const populationGreaterFinland = population > finlandPopulation;
// console.log(populationGreaterFinland);

const averagePopulation = 33;
const populationGreaterAverage = population < averagePopulation;
// console.log(populationGreaterAverage);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language; 
// console.log(description);


// L17 Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);


// L18 Taking Decisions if / else Statements
/*
population = 13

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} below average`);
}
*/


// L20 Type Conversion and Coercion
/*
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
*/


// L22 Equality Operators: == vs. ===
/*
const numNeighbours = Number(prompt('How many neightbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


// L24 Logical Operators
if ( language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :('`);
}


// L26 The switch Statement
switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    case 'default':
        console.log('Great language too :D');
        break;
}
*/


// L28 The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
