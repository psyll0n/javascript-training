'use strict';

/**
 * ============================================================================
 * MODIFYING ARRAYS - BASIC & ADVANCED ARRAY METHODS
 * ============================================================================
 * JavaScript provides built-in methods on Array.prototype to add, remove,
 * search, and extract elements.
 *
 * It is crucial to know which methods MUTATE the original array and which
 * methods are IMMUTABLE (return a new array).
 */

const teamMembers = ['Doug', 'Sally', 'Sam', 'Matt'];
console.log('Initial array:', teamMembers);

// ----------------------------------------------------------------------------
// 1. Adding Elements (Mutating)
// ----------------------------------------------------------------------------

// Array.prototype.push()
// Adds one or more elements to the END of the array.
// Returns: The new length of the array.
const newLengthAfterPush = teamMembers.push('Pat');
console.log('After push("Pat"):', teamMembers);
console.log('New array length returned by push:', newLengthAfterPush); // 5

// Array.prototype.unshift()
// Adds one or more elements to the BEGINNING of the array.
// Returns: The new length of the array.
const newLengthAfterUnshift = teamMembers.unshift('Alice');
console.log('After unshift("Alice"):', teamMembers);
console.log('New array length returned by unshift:', newLengthAfterUnshift); // 6

// ----------------------------------------------------------------------------
// 2. Removing Elements (Mutating)
// ----------------------------------------------------------------------------

// Array.prototype.pop()
// Removes the LAST element from the array.
// Returns: The element that was removed.
const poppedElement = teamMembers.pop();
console.log('After pop():', teamMembers);
console.log('Removed element:', poppedElement); // "Pat"

// Array.prototype.shift()
// Removes the FIRST element from the array.
// Returns: The element that was removed.
const shiftedElement = teamMembers.shift();
console.log('After shift():', teamMembers);
console.log('Removed element:', shiftedElement); // "Alice"

// ----------------------------------------------------------------------------
// 3. Modifying Elements by Index
// ----------------------------------------------------------------------------
// Direct assignment modifies the element at the specified index in-place.
teamMembers[0] = 'Tim';
console.log('After modifying index 0 to "Tim":', teamMembers);

// ----------------------------------------------------------------------------
// 4. Searching Arrays
// ----------------------------------------------------------------------------

// Array.prototype.indexOf()
// Returns the first index at which a given element can be found, or -1 if not present.
console.log('Index of "Sally":', teamMembers.indexOf('Sally')); // 1
console.log('Index of "Bob" (not present):', teamMembers.indexOf('Bob')); // -1

// Array.prototype.includes() (ES2016)
// Returns true if the array contains the value, false otherwise.
// Uses strict equality (===), meaning 23 !== '23'.
console.log('Includes "Matt":', teamMembers.includes('Matt')); // true
console.log('Includes "Bob":', teamMembers.includes('Bob'));   // false

// Practical usage of includes() with conditionals:
if (teamMembers.includes('Sally')) {
  console.log('Sally is part of the active team!');
}

// ----------------------------------------------------------------------------
// 5. Splice vs Slice
// ----------------------------------------------------------------------------

// Array.prototype.splice(startIndex, deleteCount, ...itemsToAdd)
// MUTATING: Changes the contents of an array by removing or replacing existing
// elements and/or adding new elements in place.
// Returns: An array containing the deleted elements.
const deletedItems = teamMembers.splice(1, 2, 'Elena', 'Lucas');
console.log('After splice(1, 2, "Elena", "Lucas"):', teamMembers);
console.log('Deleted items from splice:', deletedItems); // ['Sally', 'Sam']

// Array.prototype.slice(startIndex, endIndex)
// NON-MUTATING: Extracts a section of an array and returns a NEW array.
// The endIndex is not included in the extracted portion.
const extractedPortion = teamMembers.slice(1, 3);
console.log('Extracted slice(1, 3):', extractedPortion);
console.log('Original array remains unmodified after slice:', teamMembers);