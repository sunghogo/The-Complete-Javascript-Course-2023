// L281 Let's Fix Some Bad Code: Part 1
// L283 Let's Fix Some Bad Code: Part 2

'strict mode';

// Change all var declaratiosn to const/lim

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
// budget[0].value = 10000;
// budget[9] = 'jonas'; // Unacceptable

// limits -> spendingLimits
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200; // Unacceptable
// console.log(spendingLimits);

// Refactor repeated code into functions
// Pass in all arguments used so it doesn't have to look up in the scope chain
const getLimit = (limits, user) => limits?.[user] ?? 0;

// add -> addExpense
// Impure function
// Is now a pure function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // Use default parameers
  // Avoid data mutations
  const cleanUser = user.toLowerCase();

  // Use ternary operator
  // Cleaner code by using optional chaining and null coalescing operator
  // Use refactored function directly into the conditional
  // With enchanged literal syntax, don't need to repeat
  // Do not mutate original data
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(newBudget1);
// console.log(newBudget2);
console.log(newBudget3);

// Impure function
// Pure function :D
const checkExpenses = (state, limits) =>
  // Cleaner code using optional chaining and null coalescing operator
  // Call refactored code as a function in the conditional directly
  // Do not mutate original state
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure function due to console.log
const logBigExpenses = function (state, bigLimit) {
  // Replace if statement with ternary
  // Avoid mutating output string variable
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
