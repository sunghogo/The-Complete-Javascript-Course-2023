"use strict";

// Coding Challenge #1
// 1) Understanding the problem
// - The input array will contain numbers representing the temperature in celcius in i index days
// - The function will print out the array data in a single string format

// 2) Breaking up into sub-problems
// - Initialize string
// - Iterate through input array
// - Concatenate the data into string
// - Log string

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
//  - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let logString = "... ";

  for (let i = 0; i < arr.length; i++) {
    logString += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log(logString);
};

printForecast(data1);
printForecast(data2);
