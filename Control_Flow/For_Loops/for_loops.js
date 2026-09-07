'use strict';

/**
 * ============================================================================
 * CONTROL FLOW: FOR LOOPS
 * ============================================================================
 * A `for` loop repeats a block of code until a specified condition evaluates to false.
 *
 * SYNTAX:
 * for (initialization; condition; increment/decrement) {
 *   // loop body executes while condition is true
 * }
 *
 * PHASES:
 * 1. Initialization: Executed once before the loop starts (e.g. let i = 0).
 * 2. Condition: Evaluated before EVERY iteration. If true, the block runs; if false, loop stops.
 * 3. Increment/Decrement: Runs after EVERY loop iteration (e.g. i++).
 */

// ----------------------------------------------------------------------------
// 1. Basic Counter Loop: Calculating Squares
// ----------------------------------------------------------------------------
console.log('--- 1. Squares from 0 to 5 ---');
for (let i = 0; i <= 5; i++) {
  console.log(`The square of ${i} is ${i ** 2}`);
}

// ----------------------------------------------------------------------------
// 2. Decrementing Loop: Countdown
// ----------------------------------------------------------------------------
console.log('--- 2. Countdown Loop ---');
for (let counter = 5; counter > 0; counter--) {
  console.log(`T-minus ${counter}...`);
}
console.log('Liftoff!');

// ----------------------------------------------------------------------------
// 3. Nested For Loops: Multiplication Table (1 to 10)
// ----------------------------------------------------------------------------
console.log('--- 3. Multiplication Table (1 through 10) ---');

for (let row = 1; row <= 10; row++) {
  let tableRow = '';

  for (let col = 1; col <= 10; col++) {
    // CORRECT ARITHMETIC: product is calculated using multiplication (*)
    const product = row * col;
    // Format column cells nicely with tab padding
    tableRow += `${product}\t`;
  }

  console.log(tableRow);
}