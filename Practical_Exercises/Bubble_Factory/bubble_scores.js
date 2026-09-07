'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: BUBBLE FACTORY TEST LAB (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Iterating through arrays using standard for loops.
 * 2. Finding the maximum value in an array.
 * 3. Finding all indices corresponding to the maximum value.
 */

const scores = [
  60, 50, 60, 58, 54, 54,
  58, 50, 52, 54, 48, 69,
  34, 55, 51, 52, 44, 51,
  69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44,
];

// ----------------------------------------------------------------------------
// 1. Print All Scores
// ----------------------------------------------------------------------------
console.log('--- Bubble Solution Scores ---');
for (let i = 0; i < scores.length; i++) {
  console.log(`Bubble solution #${i} score: ${scores[i]}`);
}
console.log(`Total tests conducted: ${scores.length}`);

// ----------------------------------------------------------------------------
// 2. Find Highest Score
// ----------------------------------------------------------------------------
let highScore = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}
console.log(`\nHighest bubble score: ${highScore}`);

// ----------------------------------------------------------------------------
// 3. Find All Solutions With the Highest Score
// ----------------------------------------------------------------------------
const bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === highScore) {
    bestSolutions.push(i);
  }
}
console.log(`Solutions with highest score: #${bestSolutions.join(', #')}`);
