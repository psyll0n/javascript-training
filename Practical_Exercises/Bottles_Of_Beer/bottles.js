'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: 99 BOTTLES OF BEER (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Decrementing while loops.
 * 2. String concatenation and template literals.
 * 3. Conditional logic handling singular vs. plural noun forms ("1 bottle" vs. "2 bottles").
 */

let count = 10; // Started at 10 for concise console demonstration (can be set to 99)

while (count > 0) {
  const currentBottleNoun = count === 1 ? 'bottle' : 'bottles';
  console.log(`${count} ${currentBottleNoun} of beer on the wall,`);
  console.log(`${count} ${currentBottleNoun} of beer.`);
  console.log('Take one down, pass it around,');

  count--;

  if (count > 0) {
    const nextBottleNoun = count === 1 ? 'bottle' : 'bottles';
    console.log(`${count} ${nextBottleNoun} of beer on the wall!\n`);
  } else {
    console.log('No more bottles of beer on the wall!\n');
  }
}