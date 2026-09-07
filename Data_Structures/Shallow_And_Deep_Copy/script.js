'use strict';

/**
 * ============================================================================
 * SHALLOW COPY VS. DEEP COPY IN JAVASCRIPT
 * ============================================================================
 * Understanding the difference between shallow and deep copies is critical
 * because objects and arrays in JavaScript are REFERENCE TYPES stored in the heap.
 *
 * 1. PRIMITIVES (Numbers, Strings, Booleans, etc.):
 *    - Copied BY VALUE. Changing a copy never affects the original.
 *
 * 2. SHALLOW COPY (e.g., Object spread `{...obj}` or `Object.assign({}, obj)`):
 *    - Copies the TOP-LEVEL primitive properties.
 *    - HOWEVER, nested reference types (nested objects or arrays) still share
 *      the SAME memory pointers! Modifying a nested array/object in the copy
 *      WILL mutate the original object.
 *
 * 3. DEEP COPY (e.g., `structuredClone(obj)`):
 *    - Recursively duplicates the object AND every nested object/array within it.
 *    - The cloned object is completely disconnected from the original.
 */

// Original object containing both primitive properties and a nested array
const jessica = {
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 28,
  family: ['Alice', 'Bob'], // Nested reference type
};

// ----------------------------------------------------------------------------
// 1. Shallow Copy Demonstration (Object Spread)
// ----------------------------------------------------------------------------
console.log('--- 1. Shallow Copy with Spread Operator ---');

const jessicaShallowCopy = { ...jessica };

// Modifying a top-level primitive property:
jessicaShallowCopy.lastName = 'Davis';

// Modifying the nested array:
jessicaShallowCopy.family.push('Mary');
jessicaShallowCopy.family.push('John');

console.log('Original Jessica (Notice family was mutated!):', jessica);
console.log('Shallow Copy Jessica:', jessicaShallowCopy);
// Explanation: jessica.family and jessicaShallowCopy.family point to the EXACT same array in memory.

// ----------------------------------------------------------------------------
// 2. Deep Copy Demonstration (structuredClone)
// ----------------------------------------------------------------------------
console.log('--- 2. Deep Copy with structuredClone() ---');

// Reset base object
const jessicaOriginal = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 30,
  family: ['Alice', 'Bob'],
};

// structuredClone() is the official modern JavaScript standard for deep cloning
const jessicaDeepClone = structuredClone(jessicaOriginal);

// Mutate top-level primitive:
jessicaDeepClone.lastName = 'Taylor';

// Mutate nested array in the clone:
jessicaDeepClone.family.push('Harry');
jessicaDeepClone.family.push('Janet');

console.log('Original Jessica (Untouched!):', jessicaOriginal);
console.log('Deep Cloned Jessica (Independent nested array):', jessicaDeepClone);
// Explanation: jessicaDeepClone has its own separate copy of the family array.