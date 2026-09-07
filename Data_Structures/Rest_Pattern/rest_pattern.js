'use strict';

/**
 * ============================================================================
 * REST PATTERN AND REST PARAMETERS (...)
 * ============================================================================
 * The Rest Pattern uses the exact same syntax as the Spread Operator (`...`),
 * but performs the EXACT OPPOSITE operation:
 * - SPREAD expands an iterable into individual elements (unpacks).
 * - REST condenses multiple individual elements into a single array (packs).
 *
 * KEY RULES:
 * 1. REST is always placed on the LEFT-HAND SIDE of the assignment operator (`=`),
 *    or inside function parameter lists.
 * 2. In destructuring, the rest element MUST be the LAST element in the pattern,
 *    and there can only be ONE rest element.
 * 3. It does NOT include any skipped elements.
 */

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

  /**
   * Function using Rest Parameters to collect optional/arbitrary arguments
   * @param {string} mainIngredient - The mandatory main ingredient
   * @param {...string} otherIngredients - Rest parameters collecting any extra toppings
   */
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main ingredient: "${mainIngredient}"`);
    if (otherIngredients.length > 0) {
      console.log(`Other toppings:`, otherIngredients);
    } else {
      console.log('No additional toppings requested.');
    }
  },
};

// ----------------------------------------------------------------------------
// 1. Rest Pattern in Array Destructuring
// ----------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6];

// Unpack first 2 items into a and b; collect all remaining items into an array
const [a, b, ...remainingNumbers] = numbers;
console.log('a:', a); // 1
console.log('b:', b); // 2
console.log('Remaining numbers array:', remainingNumbers); // [3, 4, 5, 6]

// Combining Spread and Rest with arrays:
// SPREAD expands menus into one array, REST collects remaining items after pizza & risotto
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log('Pizza:', pizza);
console.log('Risotto:', risotto);
console.log('Other Food collected by REST:', otherFood);

// ----------------------------------------------------------------------------
// 2. Rest Pattern in Object Destructuring
// ----------------------------------------------------------------------------
// Collect remaining properties into a `weekdays` object, excluding `sat`
const { sat, ...weekdays } = restaurant.openingHours;
console.log('Saturday Hours (isolated):', sat);
console.log('Weekdays Object (collected by REST):', weekdays);

// ----------------------------------------------------------------------------
// 3. Rest Parameters in Functions (Variadic Functions)
// ----------------------------------------------------------------------------
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// This replaces the older, non-array `arguments` object in modern JavaScript.
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Sum of [${numbers}]:`, sum);
  return sum;
};

// Calling with different numbers of arguments:
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// ----------------------------------------------------------------------------
// 4. Synergizing SPREAD and REST
// ----------------------------------------------------------------------------
const numberList = [23, 5, 7];

// SPREAD expands the `numberList` array into individual arguments:
// REST collects those individual arguments back into an array inside `add`!
add(...numberList); // Equivalent to add(23, 5, 7)

// Testing the restaurant.orderPizza method:
console.log('--- Ordering Pizzas with Rest Parameters ---');
restaurant.orderPizza('Mushrooms', 'Onions', 'Olives', 'Spinach');
restaurant.orderPizza('Cheese'); // Only mandatory mainIngredient provided