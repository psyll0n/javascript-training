'use strict';


/*
=============================================================================
ENHANCED OBJECT LITERALS
=============================================================================

Enhanced object literals are a set of features in JavaScript that allow for
more concise and readable object creation. They were introduced in ES6 and
have been further improved in later versions of the language.

*/


const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


// ES6 - Enhanced Object Literals:
const openingHours = {
    [weekDays[0]]: { open: 12, close: 22 },
    [weekDays[1]]: { open: 11, close: 23 },
    [weekDays[2]]: { open: 0, close: 24 },
    [weekDays[3]]: { open: 12, close: 22 },
    [weekDays[4]]: { open: 11, close: 23 },
    [weekDays[5]]: { open: 0, close: 24 },
    [weekDays[6]]: { open: 0, close: 24 },
};


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