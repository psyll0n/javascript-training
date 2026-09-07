'use strict';

/**
 * ============================================================================
 * CONTROL FLOW: COMPOUND CONDITIONALS & BOOLEAN LOGIC
 * ============================================================================
 * Compound conditionals combine multiple boolean expressions using logical
 * operators:
 * - AND (`&&`): Evaluates to true ONLY if ALL conditions are true.
 * - OR (`||`): Evaluates to true if AT LEAST ONE condition is true.
 * - NOT (`!`): Inverts the truthiness of a boolean value.
 *
 * PRECEDENCE:
 * `!` has higher precedence than `&&`, which has higher precedence than `||`.
 * Always use parentheses `()` to clarify grouping and intended order of evaluation.
 */

// ----------------------------------------------------------------------------
// 1. Logical OR (||)
// ----------------------------------------------------------------------------
const hasDriverLicense = true;
const hasGoodVision = false;

// Evaluates to true because hasDriverLicense is true
if (hasDriverLicense || hasGoodVision) {
  console.log('Only one condition needs to be true for an OR (||) evaluation to pass.');
}

// ----------------------------------------------------------------------------
// 2. Logical AND (&&)
// ----------------------------------------------------------------------------
const isTired = false;

// Requires ALL operands to be true
if (hasDriverLicense && !isTired) {
  console.log('Driver has a license and is well-rested: Safe to drive!');
} else {
  console.log('Driver cannot safely operate the vehicle.');
}

// ----------------------------------------------------------------------------
// 3. Range Checking with Logical AND
// ----------------------------------------------------------------------------
const minLimit = 5;
const maxLimit = 20;
const testValue = 10;

// Verify that testValue is strictly between minLimit and maxLimit
if (testValue > minLimit && testValue < maxLimit) {
  console.log(`Value ${testValue} falls strictly between ${minLimit} and ${maxLimit}.`);
} else {
  console.log(`Value ${testValue} is outside the range.`);
}

// ----------------------------------------------------------------------------
// 4. Multi-Condition Grouping (Combining AND and OR)
// ----------------------------------------------------------------------------
const xMin = 1, xMax = 5;
const yMin = 1, yMax = 3;

const xCoord = 3;
const yCoord = 2;

// Check if a point (x, y) lies inside a bounded 2D coordinate rectangle:
const isXInside = xCoord >= xMin && xCoord <= xMax;
const isYInside = yCoord >= yMin && yCoord <= yMax;

if (isXInside && isYInside) {
  console.log(`Coordinates (${xCoord}, ${yCoord}) are located within the target rectangle.`);
} else {
  console.log(`Coordinates (${xCoord}, ${yCoord}) fall outside the boundaries.`);
}

// ----------------------------------------------------------------------------
// 5. Logical NOT (!)
// ----------------------------------------------------------------------------
const isRegistered = false;

if (!isRegistered) {
  console.log('!isRegistered: Inverting false results in true (user must register).');
}

// Double negation (!!) casts any value to its exact boolean equivalent:
console.log('Boolean coercion with !!:');
console.log('!!"hello":', !!"hello"); // true
console.log('!!0:', !!0);             // false
console.log('!!null:', !!null);       // false