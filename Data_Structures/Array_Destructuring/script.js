/* 
Examples of how to use array destructuring in JavaScript. 
Array Destructuring allows you to unpack values from arrays into distinct variables. 
*/ 

`use strict`;

// Example of a restaurant object with properties and methods
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Calling the order method and destructuring the returned array
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
restaurant.order(2, 0);

// Nested array destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values in destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);