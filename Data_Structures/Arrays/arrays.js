'use strict';

/**
 * ============================================================================
 * JAVASCRIPT ARRAYS - FUNDAMENTALS
 * ============================================================================
 * An Array is a specialized, zero-indexed list-like object used to store multiple
 * values under a single variable name.
 *
 * KEY CONCEPTS:
 * 1. Zero-Indexed: The first element is at index 0, the second at 1, etc.
 * 2. Heterogeneous: Arrays can hold mixed data types (numbers, strings, booleans,
 *    objects, functions, and even other arrays).
 * 3. Dynamic Length: Unlike fixed-size arrays in languages like C/Java, JavaScript
 *    arrays grow and shrink dynamically as elements are added or removed.
 * 4. Reference Type: Arrays are objects stored in memory by reference.
 */

// ----------------------------------------------------------------------------
// 1. Array Creation
// ----------------------------------------------------------------------------

// Method A: Array Literal syntax (preferred and most common)
const friends = ['Michael', 'Steven', 'Peter'];
console.log('Friends array:', friends);

// Method B: Array Constructor using the `new` keyword
const years = new Array(1991, 1984, 2008, 2020);
console.log('Years array:', years);

// Empty array initialization:
const emptyList = [];

// ----------------------------------------------------------------------------
// 2. Heterogeneous Values (Mixed Data Types)
// ----------------------------------------------------------------------------
const firstName = 'Jonas';
const mixedData = [
  firstName,
  'Developer',
  2037 - 1991,
  true,
  ['HTML', 'CSS', 'JavaScript'], // Nested array
  { country: 'Portugal' },        // Nested object
];
console.log('Mixed data array:', mixedData);

// ----------------------------------------------------------------------------
// 3. Accessing Elements (Zero-Based Indexing)
// ----------------------------------------------------------------------------
console.log('First friend (index 0):', friends[0]);   // "Michael"
console.log('Second friend (index 1):', friends[1]);  // "Steven"
console.log('Third friend (index 2):', friends[2]);   // "Peter"

// Accessing an out-of-bounds index returns `undefined` (does not throw an error)
console.log('Non-existent index 5:', friends[5]);     // undefined

// ----------------------------------------------------------------------------
// 4. Array Length & Accessing the Last Element
// ----------------------------------------------------------------------------
// The .length property returns the total number of elements in the array
console.log('Total friends count:', friends.length);  // 3

// Idiomatic way to retrieve the last element:
console.log('Last friend (via length - 1):', friends[friends.length - 1]); // "Peter"

// Modern ES2022 method: Array.prototype.at()
// Negative indices count backwards from the end:
console.log('Last friend (via .at(-1)):', friends.at(-1));   // "Peter"
console.log('Second to last (via .at(-2)):', friends.at(-2)); // "Steven"

// ----------------------------------------------------------------------------
// 5. Mutating Array Elements by Index
// ----------------------------------------------------------------------------
// Even if an array is declared with `const`, its internal elements CAN be mutated
// because `const` only protects the variable reference, not the array contents.
friends[1] = 'Jay';
console.log('Friends after index mutation:', friends); // ['Michael', 'Jay', 'Peter']

// Reassigning the entire array variable is NOT allowed if declared with const:
// friends = ['Bob', 'Alice']; // TypeError: Assignment to constant variable.

// ----------------------------------------------------------------------------
// 6. Basic Operations with Functions
// ----------------------------------------------------------------------------
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];

// Calculate ages by passing individual array elements:
const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const ageLast = calcAge(birthYears.at(-1));
console.log('Computed ages:', age1, age2, ageLast);

// Store the computed results into a new array:
const ages = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears.at(-1)),
];
console.log('Ages array:', ages);