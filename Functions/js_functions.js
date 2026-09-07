'use strict';

/**
 * ============================================================================
 * JAVASCRIPT FUNCTIONS
 * ============================================================================
 * A function is a reusable block of code designed to perform a particular task.
 * Functions promote the DRY principle (Don't Repeat Yourself).
 *
 * THREE CORE WAYS TO DEFINE FUNCTIONS:
 * 1. Function Declarations:
 *    - Uses `function name(...) { ... }`.
 *    - HOISTED: Can be invoked in code BEFORE they are declared.
 *
 * 2. Function Expressions:
 *    - Stores an anonymous function in a variable: `const fn = function(...) { ... };`.
 *    - NOT hoisted: Cannot be called before the assignment line.
 *
 * 3. Arrow Functions (ES6):
 *    - Concise syntax: `const fn = (...) => ...;`.
 *    - Does NOT have its own `this` keyword (uses lexical `this`).
 */

// ----------------------------------------------------------------------------
// 1. Function Declarations vs Calling Before Declaration (Hoisting)
// ----------------------------------------------------------------------------
console.log('--- 1. Function Declarations ---');

// Calling before declaration works because function declarations are hoisted:
const earlyGreeting = greetUser('Maria');
console.log(earlyGreeting);

/**
 * Greets a user by name
 * @param {string} userName - The name of the user
 * @returns {string} The greeting message
 */
function greetUser(userName) {
  return `Hello, ${userName}! Welcome to modern JavaScript.`;
}

// ----------------------------------------------------------------------------
// 2. Function Expressions
// ----------------------------------------------------------------------------
console.log('--- 2. Function Expressions ---');

/**
 * Calculates retirement years remaining
 * @param {number} birthYear - The year of birth
 * @param {string} firstName - The individual's first name
 * @returns {string} Summary statement
 */
const yearsUntilRetirement = function (birthYear, firstName) {
  const currentAge = 2037 - birthYear;
  const retirementAge = 65;
  const yearsLeft = retirementAge - currentAge;

  if (yearsLeft > 0) {
    return `${firstName} retires in ${yearsLeft} years.`;
  } else {
    return `${firstName} has already reached retirement age!`;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Bob'));

// ----------------------------------------------------------------------------
// 3. Arrow Functions (ES6)
// ----------------------------------------------------------------------------
console.log('--- 3. Arrow Functions ---');

// Single parameter with implicit return:
const calcSquare = (num) => num * num;
console.log('Square of 7:', calcSquare(7)); // 49

// Multiple parameters with block body:
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log('Average of 10, 20, 30:', calcAverage(10, 20, 30)); // 20

// ----------------------------------------------------------------------------
// 4. Functions Calling Other Functions (The Oven Controller)
// ----------------------------------------------------------------------------
console.log('--- 4. Functions Calling Other Functions ---');

function setOvenMode(mode) {
  console.log(`[Oven Hardware] Setting mode to: "${mode}"`);
}

function setOvenTemperature(degrees) {
  console.log(`[Oven Hardware] Setting target temperature to: ${degrees}°F`);
}

/**
 * Coordinates baking procedure and validates temperature thresholds
 * @param {number} degrees - Desired baking temperature in Fahrenheit
 * @returns {string} Status report message
 */
function bake(degrees) {
  let message;

  if (degrees > 500) {
    message = "Warning: Exceeds safe limit! I'm an oven, not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "Warning: Temperature too low! I'm an oven, not a refrigerator!";
  } else {
    message = `Heating up to ${degrees}°F. Baking cycle initiated!`;
    // Calling helper functions to execute hardware configuration:
    setOvenMode('Bake');
    setOvenTemperature(degrees);
  }

  return message;
}

// Test varying temperature scenarios:
console.log('Test 1 (Valid):', bake(350));
console.log('Test 2 (Too Hot):', bake(650));
console.log('Test 3 (Too Cold):', bake(50));
