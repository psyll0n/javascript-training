/**
  Shallow and Deep Copy

  Shallow copy is a copy of the object's top-level properties, but it does not create copies of nested objects.
  Deep copy is a copy of the object's top-level properties and all of its nested objects.
**/


const Jessica = {
  firstName: "Jessica",
  lastName: "Smith",
  age: 28,
  family: ['Alice', 'Bob']
};

/* Shallow copy of Jessica by using spread operator to copy all the top level properties 
of the parent object
*/
const jessicaCopy = {...Jessica}; // Using spread operator
jessicaCopy.lastName = "Davis";

console.log(jessicaCopy);
console.log(Jessica);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

// The original object is also affected by the changes in the copied object
console.log("Shallow Copy:", jessicaCopy);
console.log("Original Object:", Jessica);

/*
Deep copy of Jessica by using structuredClone() method to deep copy all the properties of the
parent object including nested objects
*/

const jessicaClone = structuredClone(Jessica);

jessicaClone.family.push("Harry");
jessicaClone.family.push("Janet");

console.log("Deep Copy:", jessicaClone);
console.log("Original Object:", Jessica);