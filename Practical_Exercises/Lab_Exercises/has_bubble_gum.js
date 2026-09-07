'use strict';

/**
 * ============================================================================
 * LAB EXERCISE: PARALLEL ARRAYS & BUBBLE GUM SEARCH (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Synchronized / parallel arrays (indices correlate between two arrays).
 * 2. While loop iteration with correct boundary condition (`i < array.length`).
 * 3. Boolean flag filtering and formatted console reporting.
 */

const products = ['Cho Choo Chocolate', 'Icy Mint', 'Cake Batter', 'Bubble Gum Delight'];
const hasBubbleGum = [false, false, false, true];

let i = 0;

// FIXED BUG: Changed condition from `i > hasBubbleGum.length` to `i < hasBubbleGum.length`
while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    // FIXED BUG: Placed the entire formatted string INSIDE console.log()
    console.log(`Product "${products[i]}" contains bubble gum!`);
  } else {
    console.log(`Product "${products[i]}" does not contain bubble gum.`);
  }
  i++;
}
