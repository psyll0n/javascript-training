'use strict';

/**
 * ============================================================================
 * LAB EXERCISE: BARK FUNCTION (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Defining functions with multiple parameters.
 * 2. Conditional branching based on argument values (weight threshold).
 * 3. Calling functions with different sets of arguments.
 */

/**
 * Emulates dog barking sound volume depending on body weight.
 * @param {string} name - Name of the dog
 * @param {number} weight - Weight of the dog in pounds
 */
function bark(name, weight) {
  if (weight > 20) {
    console.log(`${name} says WOOF WOOF!`);
  } else {
    console.log(`${name} says woof woof.`);
  }
}

// Test cases with various dog weights:
bark('Spot', 23);
bark('Scooby', 61);
bark('Lassie', 15);
bark('Tiny', 8);
