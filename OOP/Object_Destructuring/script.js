/* 
Examples of how to use object destructuring in JavaScript. 
Object Destructuring allows you to unpack values from objects into distinct variables. 
*/ 

`use strict`;

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
  }
};

  // Example of a function that uses object destructuring to order delivery
  restaurant.orderDelivery({
    time: "22:30",
    address: "Via Angelo Tavanti 23, Firenze, Italy",
    starterIndex: 1,
    mainIndex: 2
});


// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);


// Renaming variables`
const { 
  name: restaurantName, 
  openingHours: hours, 
  categories: tags }
  = restaurant;

console.log(restaurantName, hours, tags);


// Example of destructuring with default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);


// Mutate variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// For reassignment of variables use the parentheses around the destructuring
({a, b} = obj);
console.log(a, b);


// Example of destructuring nested objects
const { openingHours: { fri: { open: o, close: c } } } = restaurant;
console.log(o, c);
