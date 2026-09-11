'use strict';

/**
 * ============================================================================
 * Working with Strings
 * ============================================================================
 * In JavaScript, strings are a primitive data type that represents a sequence of characters.
 * When working with strings, behind the scenes, JavaScript converts them to objects. 
 * This is called string boxing, which means we can use various methods and properties to 
 * manipulate and analyze them.
 * ============================================================================
 * 
**/

const airline = 'TAP Air Portugal';
const plane = 'A320';


console.log(plane[0]); // Output: A
console.log(plane[1]); // Output: 3
console.log(plane[2]); // Output: 2

// We can also crate strings inline using string literals
console.log('B737'[0]); // Output: B

// String length
console.log(airline.length); // Output: 16
console.log('B737'.length); // Output: 4

// String methods
console.log(airline.indexOf('r')); // Output: 6
console.log(airline.lastIndexOf('r')); // Output: 10
console.log(airline.indexOf('Portugal')); // Output: 8
// Slice method
// If we don't specify the second parameter, it will slice until the end of the string.
//  The last index is not included in the slice. So, it will slice from index 4 to the end of the string.
console.log(airline.slice(4, 7)); // Output: Air
console.log(airline.slice(4)); // Output: Air Portugal
console.log(airline.slice(0, airline.indexOf(' '))); // Output: TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Output: Portugal

// Negative index
console.log(airline.slice(-2)); // Output: al
console.log(airline.slice(1, -1)); // Output: AP Air Portuga


//
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
}

checkMiddleSeat('11B'); // Output: You got the middle seat
checkMiddleSeat('23C'); // Output: You got lucky
checkMiddleSeat('3E'); // Output: You got the middle seat


// Example of "String Boxing"
console.log(new String('Alexander')); // Output: [String: 'Alexander']
console.log(typeof new String('Alexander')); // Output: object

// To convert a string to lowercase or uppercase, we can use the toLowerCase() and toUpperCase() methods respectively.
const testString = 'ALEXANDER';
console.log(testString.toLowerCase()); // Output: alexander

const lowerCaseString = 'alexander';
console.log(lowerCaseString.toUpperCase());

// The example below shows how to capitalize the first letter of a string and make the rest of the letters lowercase.
const passenger = 'joHn dOE'; 
const passengerLower = passenger.toLowerCase(); // Convert to lowercase
const passengerCorrect = function() {
  return passengerLower[0].toUpperCase() + passengerLower.slice(1, 5).toLowerCase() + passengerLower[5].toUpperCase() + passengerLower.slice(6).toLowerCase();
}(); // Capitalize first letter
console.log(passengerCorrect); // Output: John doe

// Check user input for email validation. The .toLowerCase() method is used to 
// convert the email to lowercase, and the .trim() method is used to remove any 
// whitespace from the beginning and end of the string.
const email = "hello@alex.net"
const loginEmail = " Hello@Alex.Net \n";
const normalizedEmail = loginEmail.toLowerCase().trim(); // Normalize the email
console.log(normalizedEmail); // Output: hello@alex.net


// To replace a part of a string with another string, we can use the .replace() method.
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // Replace £ with $ and , with .
console.log(priceUS); // Output: 288.97$

// The .replaceAll() method can be used to replace all occurrences of a substring in a string.
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// The .replace() method only replaces the first occurrence of the substring, 
// while the .replaceAll() method replaces all occurrences of the substring.
console.log(announcement.replace('door', 'gate')); // Output: All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll('door', 'gate')); // Output: All passengers come to boarding gate 23. Boarding gate 23!

// To use regular expressions, we can use the .replace() method with a regular expression as the first argument.
console.log(announcement.replace(/door/g, 'gate')); // Output: All passengers come to boarding gate 23. Boarding gate 23!

// The .includes() method can be used to check if a string contains a certain substring. 
// These methods return a boolean value (true or false).
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320')); // Output: true
console.log(plane2.includes('Boeing')); // Output: false
console.log(plane2.startsWith('Air')); // Output: true
console.log(plane2.startsWith('Boeing')); // Output: false

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus family'); // Output: Part of the new Airbus family
}

// Practice exercise - The following function checks if a passenger is allowed on board based
// on the items they have in their baggage.
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // Convert to lowercase
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife'); // Output: You are not allowed on board
checkBaggage('Socks and camera'); // Output: Welcome aboard!
checkBaggage('Got some snacks and a pocket knife'); // Output: You are not allowed on board