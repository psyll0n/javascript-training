'use strict';

/**
 * ============================================================================
 * SPREAD OPERATOR (...)
 * ============================================================================
 * The Spread Operator allows an iterable (such as an array, string, or set)
 * to be expanded into individual elements in places where zero or more arguments
 * (for function calls) or elements (for array literals) are expected.
 *
 * It can also be used on objects (ES2018) to copy properties into a new object.
 *
 * KEY RULES:
 * 1. SPREAD is used on the RIGHT-HAND SIDE of an assignment operator (`=`),
 *    inside array literals `[...]`, object literals `{...}`, or function arguments `fn(...)`.
 * 2. It does NOT mutate the original data structure; it produces a brand-new structure.
 * 3. It creates a SHALLOW COPY (nested objects or arrays are still referenced).
 */

// Example domain model: A restaurant object with menus and methods
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`);
  },
};

// ----------------------------------------------------------------------------
// 1. Expanding Array Elements & Adding Items
// ----------------------------------------------------------------------------
const baseNumbers = [7, 8, 9];

// Without Spread (manual/tedious approach):
const manualArray = [1, 2, baseNumbers[0], baseNumbers[1], baseNumbers[2]];
console.log('Manual Array:', manualArray);

// With Spread: expands baseNumbers into individual elements
const goodArray = [1, 2, ...baseNumbers];
console.log('With Spread:', goodArray); // [1, 2, 7, 8, 9]

// Passing individual elements to console.log directly:
console.log('Individual elements:', ...goodArray); // 1 2 7 8 9

// ----------------------------------------------------------------------------
// 2. Extending Existing Arrays Without Mutating
// ----------------------------------------------------------------------------
// Append an item to create a new menu list
const updatedMainMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log('Original Main Menu (untouched):', restaurant.mainMenu);
console.log('Updated Main Menu:', updatedMainMenu);

// Prepend and append items simultaneously
const expandedMenu = ['Minestrone', ...restaurant.mainMenu, 'Tiramisu'];
console.log('Expanded Menu:', expandedMenu);

// ----------------------------------------------------------------------------
// 3. Creating Shallow Copies of Arrays
// ----------------------------------------------------------------------------
// Using spread to make a shallow copy (similar to slice())
const starterMenuCopy = [...restaurant.starterMenu];
starterMenuCopy.push('Olives');
console.log('Starter Copy (modified):', starterMenuCopy);
console.log('Original Starter Menu (intact):', restaurant.starterMenu);

// ----------------------------------------------------------------------------
// 4. Joining / Merging Multiple Arrays
// ----------------------------------------------------------------------------
// Combine starterMenu and mainMenu into one complete menu
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('Complete Menu:', fullMenu);

// ----------------------------------------------------------------------------
// 5. Spreading Iterables (Strings, Sets, Maps)
// ----------------------------------------------------------------------------
// Strings are iterables, so each character can be unpacked
const developerName = 'Alex';
const letters = [...developerName, ' ', 'Dev'];
console.log('Letters array:', letters); // ['A', 'l', 'e', 'x', ' ', 'Dev']

// Note: Multiple values separated by commas are only valid when building
// an array or passing arguments to a function.
// Template literals DO NOT accept spread: `${...developerName}` will throw an error.

// ----------------------------------------------------------------------------
// 6. Passing Array Elements as Function Arguments
// ----------------------------------------------------------------------------
// Math.max expects individual numbers, not an array:
const examScores = [88, 92, 79, 99, 65];
console.log('Math.max without spread:', Math.max(examScores)); // NaN
console.log('Math.max with spread:', Math.max(...examScores)); // 99

// Using spread with custom object methods:
const pastaIngredients = ['Pesto', 'Spinach', 'Mushrooms'];
restaurant.orderPasta(...pastaIngredients);

// ----------------------------------------------------------------------------
// 7. Spreading Objects (ES2018 / ES9)
// ----------------------------------------------------------------------------
// Create a new restaurant object copying all properties and adding new ones
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Giuseppe Rossi',
};
console.log('New Restaurant:', newRestaurant);

// Shallow copy of an object:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

// Modifying the copy does not alter the original object's top-level primitive values
console.log('Original Name:', restaurant.name); // Classico Italiano
console.log('Copy Name:', restaurantCopy.name); // Ristorante Roma
