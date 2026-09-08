'use strict';


/*
=============================================================================
Data Structures - Sets

A Set is a collection similar to an array, however with the difference
that a Set can only store unique values. It is also ordered (the order of elements
is preserved).

Note: A set does not have any methods to get the second, third, or fourth, i.e.
any indexed position of an element. It is not possible to do this with a set.

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


// A Set can be created from an array.
// Notice that the Set will only store unique values.
// The order of elements in the Set is preserved.
const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta', 'Risotto']);
console.log(ordersSet);

// Working with Sets

// We can check the size of a Set as follows
console.log(ordersSet.size);

// We can add elements to a Set
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// We can check if an element exists in a Set - as follows:
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('bread'));

// We can delete elements from a Set
ordersSet.delete('Garlic Bread');
console.log(ordersSet);

// We can delete all elements from a Set
ordersSet.clear();
console.log(ordersSet);

// We can iterate over a Set as follows:
for (const order of ordersSet) {
    console.log(order);
}

// We can convert a Set to an array as follows:
const ordersArray = [...ordersSet];
console.log(ordersArray);

// We can convert an array to a Set as follows:
const ordersArray2 = ['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta', 'Risotto'];
const ordersSet2 = new Set(ordersArray2);
console.log(ordersSet2);
