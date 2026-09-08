'use strict';


/*
=============================================================================
OPTIONAL CHAINING
=============================================================================

Optional chaining is a set of features introduced in the ES2020 enhancement of 
JavaScript that allows for more concise and readable object property access, 
especially when dealing with nested objects.

*/

const openingHours = {
    mon: { open: 12, close: 22 },
    tue: { open: 11, close: 23 },
    wed: { open: 0, close: 24 },
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
    sun: { open: 0, close: 24 },
}


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // Before ES6 we had to do this:
    // openingHours: openingHours,

    // ES6 - Enhanced Object Literals:
    openingHours,

    /**
     * Function using Rest Parameters to collect optional/arbitrary arguments
     * @param {string} mainIngredient - The mandatory main ingredient
     * @param {...string} otherIngredients - Rest parameters collecting any extra toppings
     */

    // Before ES6 we had to do this:
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(`Main ingredient: "${mainIngredient}"`);
        if (otherIngredients.length > 0) {
            console.log(`Other toppings:`, otherIngredients);
        } else {
            console.log('No additional toppings requested.');
        }
    },

    // ES6 - Enhanced Object Literals:
    orderPasta(mainIngredient, ...otherIngredients) {
        console.log(`Main ingredient: "${mainIngredient}"`);
        if (otherIngredients.length > 0) {
            console.log(`Other toppings:`, otherIngredients);
        } else {
            console.log('No additional toppings requested.');
        }
    }
};


// Calling the orderPasta method with rest parameters
restaurant.orderPasta('Mushrooms', 'Onions', 'Olives');

// Without Optional Chaining, we have to use the following syntax to check 
// if the property exists:
console.log(restaurant.openingHours.mon && restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon && restaurant.openingHours.mon.close);

// ES2020 - Using Optional Chaining
// It checks if the property exists before accessing it.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.mon?.close);

// We can also use it to access nested objects:
console.log(restaurant.openingHours?.fri?.open);
console.log(restaurant.openingHours?.fri?.close);


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


// Real World Example of Optional Chaining:
for (const day of days) {
    // Optional Chaining can be used in combination with the '??' Nullish Coalescing Operator
    // It returns the right-hand side operand when the left-hand side operand is null or undefined
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    const close = restaurant.openingHours[day]?.close ?? 'closed';
    console.log(`On ${day}, the restaurant opens at ${open} and closes at ${close}`);
}


// Optional Chaining and Methods
// We can use optional chaining to check if a method exists before calling it.
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');


// Optional Chaining with Arrays
// We can use optional chaining to check if an element exists in an array before accessing it.
const users = [{
    name: 'Alex',
    email: 'hello@alex.io'
}];

// If the user exists, it will print the name, otherwise it will print 'User not found'
console.log(users[0]?.name ?? 'User not found');

// If the user at index 1 does not exist, it will print 'User not found'
console.log(users[1]?.name ?? 'User not found');
    