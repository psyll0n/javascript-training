'use strict';


/*
=============================================================================
Data Structures - Maps

A Map is a collection similar to an array, however with the difference
that a Map can store any type of values (unlike objects, which can only store
string or symbol keys). It is also ordered (the order of elements
is preserved).

Note: A map does not have any methods to get the second, third, or fourth, i.e.
any indexed position of an element. It is not possible to do this with a map.

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


// A map is a data structure which we can use to map any kind of data.

const rest = new Map();
// `set()` method is used to add a new element to the map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// Maps have the following Methods:
// `set()` method is used to add a new element to the map
// `get()` method is used to retrieve the value of a specific key
// `has()` method is used to check if the key exists in the map
// `delete()` method is used to delete the value of a specific key
// `size()` method is used to get the size of the map
// `clear()` method is used to remove all the elements from the map

    console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    // The `set` method is chainable
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open! :D')
    .set(false, 'We are closed :(');


// Contrary to objects, the `get()` method is used to retrieve the value of a specific key.

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get(2));
console.log(rest.get(false));

const currentTime = 13;
// The below line uses a ternary operator to get the value of the key `true` if the current time is between the opening
// time and the closing time, and `false` otherwise.
console.log(rest.get(currentTime > rest.get('open') && currentTime < rest.get('close') ? true : false));

// `has()` method is used to check if the key exists in the map.
console.log(rest.has('categories'));
console.log(rest.has(3));

// `delete()` method is used to delete the value of a specific key.
console.log(rest.delete(2));
console.log(rest.has(2));

// `size()` method is used to get the size of the map.
console.log(rest.size);

// `clear()` method is used to remove all the elements from the map.
rest.clear();
console.log(rest.size);

// To access an element inside an array, we need to pass the array itself to the `get()` method.
// So it is not possible to access an element inside an array by passing the index of the element.
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


/*
// Another way to create a Map is to use an array of arrays.
*/

const question = new Map([
    ["question", "What is the capital of France?"],
    [1, 'Paris'],
    [2, 'London'],
    [3, 'Berlin'],
    [4, 'Madrid'],
    ['correct', 1],
    [true, 'Correct! :D'],
    [false, 'Incorrect! :('],
]);

console.log(question);

// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(openingHours));

// So it is possible to create a map from an object by passing an array of arrays to the Map constructor.
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// When iterating over a Map, the elements are returned in the order they were inserted.
for (const [key, value] of hoursMap) {
    console.log(key, value);
}

// We can iterate over a Map and extract the values based on the type of the key like so:
// The below code will print the values of the keys that are of type number.
// The below code will not print the values of the keys that are not of type number.
// This is because the `typeof` operator returns the type of the key, and we are checking if the type of the key is number.
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// We can use logical AND operator to check if the key is of type number and also if the value is equal to the correct answer.
// This is because the logical AND operator short-circuits, meaning that if the first condition is false, the second condition will not be evaluated.
// const answer = Number(prompt("What is your answer? "));
const answer = 3;
console.log(answer);

// We can use logical AND operator to check if the key is of type number and also if the value is equal to the correct answer.
// This is because the logical AND operator short-circuits, meaning that if the first condition is false, the second condition 
// will not be evaluated.

console.log(question.get(question.get('correct') === answer));


// It is possible to convert a map to an array.
console.log([...question]);

// To check the keys of the map, we can use the `keys()` method.
console.log([...question.keys()]);

// To check the values of the map, we can use the `values()` method.
console.log([...question.values()]);

// To check the entries of the map, we can use the `entries()` method.
console.log([...question.entries()]);

