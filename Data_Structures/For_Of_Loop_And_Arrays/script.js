'use strict';


/*
=============================================================================
FOR-OF LOOPS
=============================================================================

The for-of loop (pronounced "for off") is an iteration statement that executes
a specified block of code once for each enumerable property of an object or 
iterable, such as arrays, strings, maps, and sets.

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


const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Iterating over the menu array using for-of loop
for (const item of menu) {
    console.log(item);
};

// Destructuring the entries of the menu array by using for-of loop
for (const [index, element] of menu.entries()) {
    console.log(`${index + 1}: ${element}`);
}

// You can use it also directly on strings
for (const char of "Alexander") {
    console.log(char);
}
