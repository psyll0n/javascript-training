'use strict';


/*
=============================================================================
Data Structures and Modern Operators

1. Object.keys()
2. Object.values()
3. Object.entries()
=============================================================================

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


// Get all the keys from the openingHours object
const properties = Object.keys(openingHours);
console.log(properties);


// 1.  Using Object.keys() Method
for (const day of Object.keys(openingHours)) {
    const open = openingHours[day]?.open ?? 'closed';
    const close = openingHours[day]?.close ?? 'closed';
    console.log(`On ${day}, the restaurant opens at ${open} and closes at ${close}`);
}


// 2. Using Object.values() Method
const values = Object.values(openingHours);
console.log(values);

for (const openHour of Object.values(openingHours)) {
    console.log(openHour);
}


// 3. Using Object.entries() Method
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, openHour] of Object.entries(openingHours)) {
    console.log(`On ${day}, the restaurant opens at ${openHour.open} and closes at ${openHour.close}`);
}


//  For loop with destructuring demonstrating the power of destructuring with Data Structures and Modern Operators.
for (const [key, { open, close }] of entries) {
    console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

