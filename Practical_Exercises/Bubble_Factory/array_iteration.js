'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: ARRAY ITERATION WITH WHILE LOOP (HEAD FIRST JS)
 * ============================================================================
 * Demonstrates iterating over an array using a `while` loop with an explicit
 * index counter variable.
 */

const scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
  34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 48, 44,
];

let index = 0;

while (index < scores.length) {
  const output = `Bubble solution #${index} score: ${scores[index]}`;
  console.log(output);
  index++;
}

console.log(`Finished processing all ${scores.length} solutions.`);
