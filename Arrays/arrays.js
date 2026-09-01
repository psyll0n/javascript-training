'use strict';


// Example of a restaurant object with properties and methods
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    // Example of a method in the restaurant object
    order: function (starterIndex, mainIndex, time, address) {
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]];
    },

    // Example of a method in the restaurant object that uses object destructuring
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address = "Main St" }) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]},
    will be delivered to ${address} at ${time}`);
    },

    // Example of a function that uses the spread operator to order pasta
    orderPasta: function (ingridient1, ingridient2, ingridient3) {
        console.log(`Here is your delicious pasta with ${ingridient1}, ${ingridient2}, and ${ingridient3}`);
    }
};


// Example of a function that uses object destructuring to order delivery
restaurant.orderDelivery({
    time: "22:30",
    address: "Via Angelo Tavanti 23, Firenze, Italy",
    starterIndex: 1,
    mainIndex: 2
});


// Arrays in JavaScript can be declared with the var keyword or the const keyword.
var myArray = ["Doug", "Sally", "Sam", "Sally"];
var myMixedArray = [4, "Cat", true];

console.log(myArray);
console.log(myMixedArray);

// Accessing the first element of the array.
console.log(myArray[0]);

// Bad way of creating a new array with the elements of another array.
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

// Spread Operator. It expands an iterable into its elements.
// In other words, it takes the original array and dumps all of its 
// elements into the new array.
const newArr = [1, 2, ...arr]
console.log(newArr)


// Spread Operator is used here to add "Gnocchi" to the end of the main menu.
const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu)


// Same thing but with more than one element added to the menu.
const newMenu2 = [...restaurant.mainMenu, "Gnocchi", "Risotto"];
console.log(newMenu2)


// Create a Shallow copy of an array by using the spread operator
const starterMenuCopy = [...restaurant.starterMenu,];
console.log(starterMenuCopy)

// Join two or more arrays by using the spread operator
const newMainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(newMainMenu)


// Iterables are: Arrays, Strings, Maps, Sets, but not Objects.
const str = 'Alex';
const letters = [...str, ' ', 'Y.'];
console.log(letters);
console.log(...str)


// Spread Operator can also be used in function calls.
const scores = [88, 92, 79, 99, 65];

// Without spread operator, Math.max(scores) returns NaN
// With spread operator:
const highestScore = Math.max(...scores);
console.log(highestScore); // Output: 99

// Example of a function that uses the spread operator to order pasta
const ingredients = ["Pesto", "Spinach", "Mushrooms"];
restaurant.orderPasta(...ingredients);

// The Spread Operator can also be used with objects.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" }
console.log(newRestaurant)

// Create a Shallow Copy of an object by using the spread operator
const restaurantCopy = { ...restaurant }
restaurantCopy.name = "Ristorante Rome"
console.log(restaurantCopy.name)
console.log(restaurant.name)