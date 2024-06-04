'use strict';

/*
// Coding Challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;

const createWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);        
    } else {
        console.log('No team wins...');
    }
}

// Test Data 1
let scoreDolphins1 = 44;
let scoreDolphins2 = 23;
let scoreDolphins3 = 71;

let scoreKoalas1 = 65;
let scoreKoalas2 = 54;
let scoreKoalas3 = 49;

let avgDolphins = calcAverage(scoreDolphins1, scoreDolphins2, scoreDolphins3);
let avgKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

createWinner(avgDolphins, avgKoalas);

// Test Data 2
scoreDolphins1 = 85;
scoreDolphins2 = 54;
scoreDolphins3 = 41;

scoreKoalas1 = 23;
scoreKoalas2 = 34;
scoreKoalas3 = 27;

avgDolphins = calcAverage(scoreDolphins1, scoreDolphins2, scoreDolphins3);
avgKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

createWinner(avgDolphins, avgKoalas);


// Coding Challenge #2
const calcTip = bill => (50 <= bill && bill <= 300) ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]), 
    calcTip(bills[1]), 
    calcTip(bills[2])
]
const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(bills, tips, total);


// Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    // bmi: this.mass / this.height ** 2,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // bmi: this.mass / this.height ** 2,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
    }
}

// console.log(mark.bmi, john.bmi)
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi)

// console.log(`${john.fullName}'s BMI is (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? 'higher' : 'not higher'} than ${mark.fullName}'s BMI (${mark.calcBMI()})! `);

if (mark.bmi > john.bmi) {
    console.log(`${john.fullName}'s BMI is (${john.bmi}) is lower than ${mark.fullName}'s BMI (${mark.bmi})! `); 
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI is (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})! `)
} else {
    console.log(`${john.fullName}'s BMI is (${john.bmi}) is equal to ${mark.fullName}'s BMI (${mark.bmi})! `)
}
*/


// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => (50 <= bill && bill <= 300) ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]); 
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals))