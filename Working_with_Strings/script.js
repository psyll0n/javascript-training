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

// The .split() method is used to split a string into an array of strings.
const stringToSplit = 'this+is+a+test+string';
console.log(stringToSplit.split('+')); // Output: [ 'this', 'is', 'a', 'test', 'string' ]

// The .join() method is used to join an array of strings into a single string.
const stringToJoin = ['this', 'is', 'a', 'test', 'string'];
console.log(stringToJoin.join(' ')); // Output: this is a test string

// Example of using split() and join() to reverse a string.
const reverseString = function (str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello world')); // Output: dlrow olleh

// Split the string into an array of strings and join it back together with different capitalization
console.log('Alex Yakimov'.split(' ')); // Split the string into an array of strings
const [firstName, lastName] = 'Alex Yakimov'.split(' ');

// The .join() method is used to join an array of strings into a single string.
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Output: Mr. Alex YAKIMOV


// The below function capitalizes the first letter of each word in a string
const capitalizeName = function (name) {
  const names = name.split(' '); // Split the string into an array of strings
  console.log(names); // [ 'jessica', 'ann', 'smith', 'davis' ]
  const capitalizedNames = [];
    // Loop through the names array
    for (const name of names) {
    // Capitalize the first letter of each word and add it to the capitalizedNames array
    capitalizedNames.push(name[0].toUpperCase() + name.slice(1));
  }
  // Join the capitalizedNames array into a single string
  console.log(capitalizedNames.join(' '));
}

// Call the function with different arguments
capitalizeName('jessica ann smith davis'); // Jessica Ann Smith Davis
capitalizeName('jonas schmidt'); // Jonas Schmidt

// Similarly, the below function capitalizes the first letter of each word in a string
const nameCapitalization = function (name) {
  const names = name.split(' '); // Split the string into an array of strings
  const capitalizedNames = [];

  // Loop through the names array
  for (const n of names) {
    // Replace the first letter of each word with its uppercase version and add it to the capitalizedNames array
    capitalizedNames.push(n.replace(n[0], n[0].toUpperCase()));
  }

  // Join the capitalizedNames array into a single string
  console.log(capitalizedNames.join(' '));
}

// Call the function with different arguments
nameCapitalization('jessica ann smith davis'); // Jessica Ann Smith Davis
nameCapitalization('jonas schmidt'); // Jonas Schmidt

// Padding a string to a certain length using padStart() and padEnd()
// The padStart() method pads the current string with another string (multiple times, if needed)
// until the resulting string reaches the given length. The padding is applied from the start of the string.
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // Output: +++++++Go to gate 23!

const message1 = 'Go to gate 23!';
console.log(message1.padEnd(25, '+')); // Output: Go to gate 23!+++++++  


// The below function masks the credit card number by replacing the first
// 12 characters with asterisks. It uses the slice() method to get the last
// 4 characters of the string and the padStart() method to pad the resulting
// string with asterisks to the original length of the string.
const maskCreditCard = function(number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(3526499473927262)); // Output: ************7262
console.log(maskCreditCard('01048587302930590')); // Output: ************30590
console.log(maskCreditCard('257494729572747')); // Output: ************72747
console.log(maskCreditCard(9484848747482947)); // Output: ************2947

// The repeat() method is used to repeat a string a certain number of times.
// The below function logs the message announcement 5 times.
const messageAnnouncement = "Bad weather... All departures delayed to 6 PM";
console.log(messageAnnouncement.repeat(5)); // Output: Bad weather... All departures delayed to 6 PMBad weather... All departures delayed to 6 PMBad weather... All departures delayed to 6 PMBad weather... All departures delayed to 6 PMBad weather... All departures delayed to 6 PM


// Practice exercises 


// The following function checks if a passenger is allowed on board based
// on the items they have in their baggage.
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // Convert to lowercase
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
    }
  }


// Call the function with different arguments
checkBaggage('I have a laptop, some Food and a pocket Knife'); // Output: You are not allowed on board
checkBaggage('Socks and camera'); // Output: Welcome aboard!
checkBaggage('Got some snacks and a pocket knife'); // Output: You are not allowed on board


// The string below contains flight information in a format that needs to be parsed and displayed in a more readable format. 
// The '+' sign is used to separate the flight information and the '_' sign is used to separate the flight information from the time. 
const flights = 
  'Delayed_Departure;fao93766109;lhr99374992;11:25+_Arrival;bru2510424442090;jfk2131213131312;11:45+_Arrival;hel7430343321324;jfk2131213131312;12:05+_Departure;lhr2131213123121;jfk2131213131312;12:30';


// Write your code here
// The `slice()` method is used to get the first 3 characters of the string and the `toUpperCase()` method is used to convert them to uppercase.
const getCode = str => str.slice(0,3).toUpperCase();

// The `for of` loop is then used to iterate over each flight string in the array. Then, we split each flight string into an array of flight information using the split() method with ';' as the delimiter. Finally, we log each flight information to the console.
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('Delayed') ? '⚠' : ''} ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} ${time}`.padStart(36, ' ');
  console.log(output);  
}

// Output: 
//  ⚠  Delayed Departure FAO  LHR    11:25
//               Arrival   BRU  JFK   11:45
//               Arrival   HEL  JFK   12:05
//               Departure LHR  JFK   12:30
