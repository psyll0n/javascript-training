'use strict';

/**
 * ============================================================================
 * LOOPS AND ARRAYS
 * ============================================================================
 * Iterating through arrays is one of the most common tasks in programming.
 * JavaScript offers several idiomatic looping constructs for arrays:
 * 1. Traditional `for` loop (offers precise index control, reverse looping).
 * 2. Modern `for...of` loop (cleaner syntax, iterates directly over values).
 * 3. Array.prototype.entries() with destructuring (gets both index and element).
 */

const team = ['Doug', 'Sally', 'Janet', 'Matt'];

// ----------------------------------------------------------------------------
// 1. Traditional For Loop (Forward Iteration)
// ----------------------------------------------------------------------------
console.log('--- 1. Forward For Loop ---');
for (let i = 0; i < team.length; i++) {
  console.log(`Index ${i}: Hello, ${team[i]}!`);
}

// ----------------------------------------------------------------------------
// 2. Traditional For Loop (Reverse Iteration)
// ----------------------------------------------------------------------------
console.log('--- 2. Reverse For Loop ---');
for (let i = team.length - 1; i >= 0; i--) {
  console.log(`Index ${i}: Farewell, ${team[i]}!`);
}

// ----------------------------------------------------------------------------
// 3. Modern For...Of Loop (ES6)
// ----------------------------------------------------------------------------
// Iterates directly through values without needing an index counter variable.
console.log('--- 3. For...Of Loop ---');
for (const member of team) {
  console.log(`Member: ${member}`);
}

// ----------------------------------------------------------------------------
// 4. For...Of Loop with Array.prototype.entries()
// ----------------------------------------------------------------------------
// .entries() returns an iterator of [index, element] pairs.
// By combining with array destructuring `[index, element]`, we get both cleanly:
console.log('--- 4. For...Of with entries() & Destructuring ---');
for (const [index, member] of team.entries()) {
  console.log(`${index + 1}: ${member}`);
}

// ----------------------------------------------------------------------------
// 5. Control Statements: continue and break
// ----------------------------------------------------------------------------
const mixedItems = ['Pen', 42, 'Notebook', true, 'Eraser', null, 'Ruler'];

console.log('--- 5. Continue (Skip non-strings) ---');
for (const item of mixedItems) {
  if (typeof item !== 'string') continue; // Skip to next iteration
  console.log(`String item: ${item}`);
}

console.log('--- 6. Break (Stop once a number is found) ---');
for (const item of mixedItems) {
  if (typeof item === 'number') {
    console.log(`Found a number (${item}), stopping search!`);
    break; // Terminate loop completely
  }
}
