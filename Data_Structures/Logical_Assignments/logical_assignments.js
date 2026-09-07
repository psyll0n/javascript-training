'use strict';

/**
 * ============================================================================
 * LOGICAL ASSIGNMENT OPERATORS (ES2021)
 * ============================================================================
 * ES2021 introduced three logical assignment operators that combine logical
 * operations with assignment, similar to arithmetic operators like `+=` or `*=`:
 *
 * 1. OR Assignment Operator (`||=`):
 *    - Assigns a value to a variable IF that variable is currently FALSY.
 *    - `x ||= y` is equivalent to: `x = x || y` (conceptually: `if (!x) x = y`).
 *
 * 2. Nullish Assignment Operator (`??=`):
 *    - Assigns a value to a variable IF that variable is currently NULLISH (`null` or `undefined`).
 *    - Does NOT overwrite `0`, `""`, or `false`.
 *    - `x ??= y` is equivalent to: `x = x ?? y`.
 *
 * 3. AND Assignment Operator (`&&=`):
 *    - Assigns a value to a variable IF that variable is currently TRUTHY.
 *    - `x &&= y` is equivalent to: `x = x && y` (conceptually: `if (x) x = y`).
 */

// ----------------------------------------------------------------------------
// 1. Logical OR Assignment (||=)
// ----------------------------------------------------------------------------
console.log('--- 1. Logical OR Assignment (||=) ---');

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Traditional assignment with short-circuit OR:
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Modern concise syntax using ||=
rest1.numGuests ||= 10; // 20 is truthy -> remains 20
rest2.numGuests ||= 10; // undefined is falsy -> assigned 10

console.log('rest1 (numGuests was 20):', rest1.numGuests); // 20
console.log('rest2 (numGuests was undefined):', rest2.numGuests); // 10

// ----------------------------------------------------------------------------
// 2. The Flaw of ||= with Zero & The Fix with ??=
// ----------------------------------------------------------------------------
console.log('--- 2. Logical Nullish Assignment (??=) ---');

const restZero = {
  name: 'Bistro Zero',
  numGuests: 0, // Legitimate party size of 0 guests
};

// If we used ||= here:
// restZero.numGuests ||= 10; // 0 is falsy, so it would mistakenly become 10!

// Using ??= (nullish coalescing assignment):
// 0 is NOT nullish (it is neither null nor undefined), so 0 is preserved!
restZero.numGuests ??= 10;
console.log('restZero (preserved 0 with ??=):', restZero.numGuests); // 0

const restUnassigned = {
  name: 'Trattoria Nova',
};
// Since numGuests is undefined, ??= assigns the default:
restUnassigned.numGuests ??= 10;
console.log('restUnassigned (assigned 10 with ??=):', restUnassigned.numGuests); // 10

// ----------------------------------------------------------------------------
// 3. Logical AND Assignment (&&=)
// ----------------------------------------------------------------------------
console.log('--- 3. Logical AND Assignment (&&=) ---');

const companyA = {
  name: 'TechCorp',
  founder: 'Alice',
};

const companyB = {
  name: 'Unknown LLC',
  founder: undefined,
};

// Anonymize the founder ONLY if a founder property exists and is truthy:
// Traditional: if (companyA.founder) companyA.founder = '<ANONYMOUS>';
companyA.founder &&= '<ANONYMOUS>'; // 'Alice' is truthy -> becomes '<ANONYMOUS>'
companyB.founder &&= '<ANONYMOUS>'; // undefined is falsy -> remains undefined

console.log('companyA founder:', companyA.founder); // "<ANONYMOUS>"
console.log('companyB founder:', companyB.founder); // undefined
