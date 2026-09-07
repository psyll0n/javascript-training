'use strict';

/**
 * ============================================================================
 * OBJECT DESTRUCTURING (ES6)
 * ============================================================================
 * Object destructuring allows unpacking properties from objects into distinct
 * variables.
 *
 * KEY RULES:
 * 1. Matching is based on PROPERTY NAME (key), not position.
 * 2. Variables can be assigned new names using `key: newName`.
 * 3. Default values can be set for undefined properties: `key: newName = default`.
 * 4. To mutate existing variables, wrap the destructuring assignment in parentheses: `({ a, b } = obj);`.
 * 5. Destructuring can be performed directly within function parameter signatures.
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
    sat: { open: 0, close: 24 }, // Open 24 hours
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * Immediately destructures the options object passed as an argument.
   * Default values prevent undefined errors if optional parameters are omitted.
   */
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'Main St',
  }) {
    console.log(
      `Order received: "${this.starterMenu[starterIndex]}" and "${this.mainMenu[mainIndex]}" will be delivered to ${address} at ${time}.`
    );
  },
};

// ----------------------------------------------------------------------------
// 1. Basic Destructuring (Variable names match property keys)
// ----------------------------------------------------------------------------
const { name, openingHours, categories } = restaurant;
console.log('Basic Destructuring:');
console.log('Name:', name);
console.log('Opening Hours:', openingHours);
console.log('Categories:', categories);

// ----------------------------------------------------------------------------
// 2. Renaming Variables (propertyKey: customVariableName)
// ----------------------------------------------------------------------------
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log('Renamed Variables:');
console.log(restaurantName, hours, tags);

// ----------------------------------------------------------------------------
// 3. Default Values & Combined Renaming + Defaults
// ----------------------------------------------------------------------------
// Useful for API responses where certain properties might be absent
const {
  menu = [],                       // Does not exist -> defaults to []
  starterMenu: starters = [],       // Exists -> renamed to starters
} = restaurant;

console.log('Default values demonstration:');
console.log('Menu:', menu);
console.log('Starters:', starters);

// ----------------------------------------------------------------------------
// 4. Mutating Existing Variables
// ----------------------------------------------------------------------------
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// NOTE: JavaScript treats `{` at the beginning of a line as a code block.
// To destructure into existing variables, wrap the entire statement in parentheses `()`:
({ a, b } = obj);
console.log('Mutated variables a & b:', a, b); // 23, 7

// ----------------------------------------------------------------------------
// 5. Nested Object Destructuring
// ----------------------------------------------------------------------------
// Extract nested properties inside openingHours -> fri
const {
  openingHours: {
    fri: { open: fridayOpen, close: fridayClose },
  },
} = restaurant;
console.log(`Friday Hours: ${fridayOpen}:00 - ${fridayClose}:00`);

// ----------------------------------------------------------------------------
// 6. Destructuring in Function Parameters
// ----------------------------------------------------------------------------
// Pass an object with many arguments without having to remember parameter order
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  starterIndex: 1,
  mainIndex: 2,
});

// Relying on defaults:
restaurant.orderDelivery({
  address: 'Piazza del Duomo 1',
  starterIndex: 0,
});
