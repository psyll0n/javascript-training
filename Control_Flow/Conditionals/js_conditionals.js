'use strict';

/**
 * ============================================================================
 * CONTROL FLOW: CONDITIONALS (if, else if, else)
 * ============================================================================
 * Conditional statements execute different blocks of code based on whether a
 * condition evaluates to true or false (truthy or falsy).
 *
 * KEY CONCEPTS:
 * 1. Strict Equality (`===`) vs Loose Equality (`==`):
 *    - Always prefer `===` because it compares both TYPE and VALUE without type coercion.
 *    - `==` performs implicit type conversion (e.g. `'5' == 5` is true, `'5' === 5` is false).
 * 2. Blocks: Use curly braces `{}` for readability and maintainability.
 */

// ----------------------------------------------------------------------------
// 1. Basic `if` Statement
// ----------------------------------------------------------------------------
const knowsJavaScript = true;
console.log(`knowsJavaScript: ${knowsJavaScript} (type: ${typeof knowsJavaScript})`);

if (knowsJavaScript) {
  console.log('You are ready to write modern JavaScript!');
}

// Single-line syntax (valid, but curly braces are recommended for clarity):
if (knowsJavaScript) console.log('Single-line conditional executed.');

// ----------------------------------------------------------------------------
// 2. Strict Equality (`===`) vs Relational Operators
// ----------------------------------------------------------------------------
const score = 5;

if (score === 5) {
  console.log('Score is strictly equal to 5.');
}

// ----------------------------------------------------------------------------
// 3. `if...else` Statement
// ----------------------------------------------------------------------------
const temperature = 18;

if (temperature >= 20) {
  console.log('It is warm outside; no jacket required.');
} else {
  console.log('It is cool outside; consider wearing a light jacket.');
}

// ----------------------------------------------------------------------------
// 4. `if...else if...else` Ladder
// ----------------------------------------------------------------------------
const userRole = 'editor';

if (userRole === 'admin') {
  console.log('Access granted: Full administrative permissions.');
} else if (userRole === 'editor') {
  console.log('Access granted: Content editing permissions.');
} else if (userRole === 'viewer') {
  console.log('Access granted: Read-only permissions.');
} else {
  console.log('Access denied: Unknown role.');
}

// ----------------------------------------------------------------------------
// 5. Nested Conditionals
// ----------------------------------------------------------------------------
const age = 22;
const hasValidID = true;

if (age >= 18) {
  console.log('User is of legal age.');

  if (hasValidID) {
    console.log('User has valid identification: Entry permitted.');
  } else {
    console.log('Identification missing: Entry denied.');
  }
} else {
  console.log('User is underage: Entry denied.');
}
