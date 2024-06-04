'use strict';

/*
// L33 Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const descriptionUS = describeCountry('United States', 331, 'Washington, D.C.');
const descriptionFinland = describeCountry('Finalnd', 6, 'Helsinki');
const descriptionPortugal = describeCountry('Portugal', 10, 'Lisbon');

console.log(descriptionUS, descriptionFinland, descriptionPortugal);


// L34 Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const popUS = 332;
const popFinland = 6;
const popPortugal = 10;

console.log(percentageOfWorld1(popUS), percentageOfWorld1(popFinland), percentageOfWorld1(popPortugal));


console.log(percentageOfWorld2(popUS), percentageOfWorld2(popFinland), percentageOfWorld2(popPortugal));


// L35 Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageUS = percentageOfWorld3(332);
const percentageFinaland = percentageOfWorld3(6);
const percentagePortugal = percentageOfWorld3(10);

console.log(percentageUS, percentageFinaland, percentagePortugal);


// L36 Functions Calling Other Functions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;

console.log(describePopulation('US', 332), describePopulation('Finaland', 6), describePopulation('Portugal', 10));


// L39 Introduction to Arrays
const population = [332, 6, 10, 38];

console.log(population.length === 4);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages = [
    percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3])
];
console.log(percentages);


// L40 Basic Array Operations (Methods)
const neighbours = ['Canada', 'Mexico'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Canada')] = "People's Republic of Canada";
console.log(neighbours);


// L42 Introduction to Objects
const myCountry = {
    country: 'United States',
    capital: 'Washington, D.C.',
    language: 'english',
    population: 332,
    neighbours: ['Canada', 'Mexico']
};
console.log(myCountry);


// L43 Dot vs. Bracket Notation
const myCountry = {
    country: 'United States',
    capital: 'Washington, D.C',
    language: 'english',
    population: 332,
    neighbours: ['Canada', 'Mexico']
};

console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);  

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


// L44 Object Methods
const myCountry = {
    country: 'United States',
    capital: 'Washington, D.C',
    language: 'english',
    population: 332,
    neighbours: ['Canada', 'Mexico'],
    describe: function() {
        return console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        )
    },
    checkIsIsland: function() {
        this.IsIsland = this.neighbours.length === 0 ? true : false; 
    }
};

myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry);


// L46 Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}


// L47 Looping Arrays, Breaking and Continuing
const population = [10, 1441, 332, 83];
const percentages2 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

for (let i = 0; i < population.length; i++) {
    percentages2[i] = percentageOfWorld1(population[i]);
}

console.log(percentages2);


// L48 Looping Backwards and Loops in Loops
const listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}
*/


// L49 The while Loop
const population = [10, 1441, 332, 83];
const percentages3 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let i = 0;
while (i < population.length) {
    const perc = percentageOfWorld1(population[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);