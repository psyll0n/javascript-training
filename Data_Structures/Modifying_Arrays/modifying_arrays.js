// Modifying arrays in JavaScript

var myArray = ["Doug", "Sally", "Sam", "Matt"];
console.log(myArray);

// Push a new item in the array
myArray.push("Pat");
console.log(myArray);


// Access an item in the array
myArray[0] = "Tim";
console.log(myArray);


// Remove an item from the array
myArray.splice(1, 2);
console.log(myArray);