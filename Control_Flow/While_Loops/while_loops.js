'use strict';

/**
 * ============================================================================
 * CONTROL FLOW: WHILE AND DO...WHILE LOOPS
 * ============================================================================
 * 1. WHILE LOOP:
 *    - Evaluates the condition BEFORE executing the loop body.
 *    - If the condition is false initially, the body NEVER executes.
 *    - Ideal when the number of iterations is not known in advance (e.g. waiting
 *      for a random event or user input).
 *
 * 2. DO...WHILE LOOP:
 *    - Evaluates the condition AFTER executing the loop body.
 *    - GUARANTEED to execute at least once, even if the condition is false from the start.
 *
 * CAUTION: Always ensure the loop variable is updated within the body, otherwise
 * the loop will run forever (infinite loop) and crash the runtime.
 */

// ----------------------------------------------------------------------------
// 1. While Loop with Multiples of 9
// ----------------------------------------------------------------------------
console.log('--- 1. Multiples of 9 below 50 ---');
let currentNumber = 0;

while (currentNumber < 50) {
  if (currentNumber % 9 === 0 && currentNumber !== 0) {
    console.log(`Multiple of 9: ${currentNumber}`);
  }
  // Increment step is mandatory to prevent an infinite loop:
  currentNumber++;
}

// ----------------------------------------------------------------------------
// 2. While Loop: Simulating a Dice Roll (Unknown iteration count)
// ----------------------------------------------------------------------------
console.log('--- 2. Rolling a Die Until a 6 is Rolled ---');
let diceRoll = Math.trunc(Math.random() * 6) + 1;
let rollAttempts = 1;

while (diceRoll !== 6) {
  console.log(`Attempt ${rollAttempts}: Rolled a ${diceRoll}. Rolling again...`);
  diceRoll = Math.trunc(Math.random() * 6) + 1;
  rollAttempts++;
}

console.log(`Success! Rolled a 6 on attempt #${rollAttempts}.`);

// ----------------------------------------------------------------------------
// 3. Do...While Loop (Guaranteed At Least One Execution)
// ----------------------------------------------------------------------------
console.log('--- 3. Do...While Execution Guarantee ---');
let flag = false;

do {
  console.log('This message is guaranteed to print at least once, even though flag is false!');
} while (flag);