'use strict';

/**
 * ============================================================================
 * SHORT-CIRCUITING WITH LOGICAL OPERATORS (&& and ||)
 * ============================================================================
 * In JavaScript, logical operators can take ANY data type, return ANY data type,
 * and perform SHORT-CIRCUITING.
 *
 * EVALUATION RULES:
 * - FALSY VALUES in JS: `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`.
 * - TRUTHY VALUES: Everything else (including empty arrays `[]` and empty objects `{}`).
 *
 * 1. OR (||) OPERATOR:
 *    - Short-circuits when the FIRST operand is TRUTHY and immediately returns it.
 *    - If all operands are falsy, it returns the LAST operand.
 *    - Common use case: Setting default fallback values.
 *
 * 2. AND (&&) OPERATOR:
 *    - Short-circuits when the FIRST operand is FALSY and immediately returns it.
 *    - If all operands are truthy, it returns the LAST operand.
 *    - Common use case: Executing code/methods only if a condition or object exists.
 */

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Order: Pizza with ${mainIngredient} and ${otherIngredients.join(', ')}`);
  },
};

// ----------------------------------------------------------------------------
// 1. Short-Circuiting with OR (||)
// ----------------------------------------------------------------------------
console.log('--- Logical OR (||) Short-Circuiting ---');

// Returns 3 because 3 is the first truthy value encountered
console.log(3 || 'Jonas'); // 3

// '' is falsy, so it evaluates the next operand ('Jonas', which is truthy)
console.log('' || 'Jonas'); // "Jonas"

// true is truthy, so it short-circuits immediately without checking 0
console.log(true || 0); // true

// undefined is falsy, so it evaluates null. Both are falsy, so it returns the last one: null
console.log(undefined || null); // null

// In a chain, it returns the first truthy value ('Hello'):
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // "Hello"

// ----------------------------------------------------------------------------
// 2. Setting Default Values with OR (||) and Its Gotcha
// ----------------------------------------------------------------------------
console.log('--- Setting Default Values with OR ---');

// Suppose we want to determine the number of guests, defaulting to 10 if not set:
// Case A: Property does not exist (undefined is falsy)
const guestsA = restaurant.numGuests || 10;
console.log('Guests (when undefined):', guestsA); // 10

// Case B: What if the restaurant legitimately has 0 guests?
restaurant.numGuests = 0;

// GOTCHA: In JavaScript, 0 is a FALSY value!
// Therefore, `0 || 10` evaluates to 10 even though 0 was deliberately specified!
const guestsB = restaurant.numGuests || 10;
console.log('Guests with 0 (Flawed default logic):', guestsB); // 10 (Wrong!)

// NOTE: This flaw is exactly why ES2020 introduced the Nullish Coalescing Operator (??).
// See: Data_Structures/Nullish_Coalescing/nullish_coalescing.js

// ----------------------------------------------------------------------------
// 3. Short-Circuiting with AND (&&)
// ----------------------------------------------------------------------------
console.log('--- Logical AND (&&) Short-Circuiting ---');

// 0 is falsy, so it short-circuits immediately and returns 0 without evaluating 'Jonas'
console.log(0 && 'Jonas'); // 0

// 7 is truthy, so evaluation continues to 'Jonas' (truthy). Since it reached the end, returns 'Jonas'
console.log(7 && 'Jonas'); // "Jonas"

// In a chain, returns the first falsy value (null):
console.log('Hello' && 23 && null && 'Jonas'); // null

// ----------------------------------------------------------------------------
// 4. Practical Application: Guarding Function Calls with AND (&&)
// ----------------------------------------------------------------------------
console.log('--- Guarding Execution with AND ---');

// Traditional if-check:
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}

// Idiomatic short-circuiting check with AND:
// If restaurant.orderPizza exists (truthy), it proceeds to call the function!
restaurant.orderPizza && restaurant.orderPizza('Pepperoni', 'Olives');
