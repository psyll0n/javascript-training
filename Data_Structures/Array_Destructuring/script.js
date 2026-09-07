'use strict';

/**
 * ============================================================================
 * ARRAY DESTRUCTURING (ES6)
 * ============================================================================
 * Destructuring is an ES6 feature that allows us to unpack values from arrays
 * (or properties from objects) into distinct, individual variables.
 *
 * KEY RULES:
 * 1. Matching is positional (based on index in the array).
 * 2. Elements can be skipped using an empty comma `, ,`.
 * 3. Default values can be provided for undefined positions.
 * 4. Can be used to easily swap variables without a temporary variable.
 */

// Example domain model
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Method that returns an array of two selected items
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ----------------------------------------------------------------------------
// 1. Basic Destructuring vs Traditional Index Access
// ----------------------------------------------------------------------------
const numbers = [2, 3, 4];

// Traditional way:
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];
console.log('Traditional:', first, second, third);

// Destructuring way:
const [x, y, z] = numbers;
console.log('Destructured:', x, y, z);
console.log('Original array remains intact:', numbers);

// ----------------------------------------------------------------------------
// 2. Skipping Elements
// ----------------------------------------------------------------------------
// To skip the second element, leave a blank space between commas:
let [mainCategory, , tertiaryCategory] = restaurant.categories;
console.log('Categories (first and third):', mainCategory, tertiaryCategory);

// ----------------------------------------------------------------------------
// 3. Swapping / Switching Variables Without a Temp Variable
// ----------------------------------------------------------------------------
// Traditional swap required:
// let temp = mainCategory;
// mainCategory = tertiaryCategory;
// tertiaryCategory = temp;

// Destructuring swap:
[mainCategory, tertiaryCategory] = [tertiaryCategory, mainCategory];
console.log('Swapped categories:', mainCategory, tertiaryCategory);

// ----------------------------------------------------------------------------
// 4. Receiving Multiple Return Values From a Function
// ----------------------------------------------------------------------------
// restaurant.order() returns [starter, mainCourse]
const [starterMeal, mainMeal] = restaurant.order(2, 0);
console.log('Ordered items:', starterMeal, '|', mainMeal);

// ----------------------------------------------------------------------------
// 5. Nested Array Destructuring
// ----------------------------------------------------------------------------
const nested = [2, 4, [5, 6]];
// Extract 2 into `firstNum`, and unpack [5, 6] into `nestedA` and `nestedB`
const [firstNum, , [nestedA, nestedB]] = nested;
console.log('Nested unpacked values:', firstNum, nestedA, nestedB);

// ----------------------------------------------------------------------------
// 6. Default Values in Destructuring
// ----------------------------------------------------------------------------
// Useful when the length of the incoming array is unknown
// If an element is undefined, the default value is used.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log('Default values applied (r gets 1):', p, q, r); // 8, 9, 1