'use strict';

/*
The `call` and `apply` Methods

Both `call` and `apply` are used to invoke a function with a specific `this` value and arguments.
*/

// Examples:

// `call` method: invokes the function immediately with the provided arguments
// `apply` method: invokes the function immediately with the provided arguments
// book method is a regular method on the lufthansa object
// so it has access to its own properties
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    flightNumber: undefined,
    bookings: [],
    // book: function() {}
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${flightNumber}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
    }
}

// Calling the book method on the lufthansa object
lufthansa.book('LH991', 'John Smith');
lufthansa.book('LH992', 'Jane Doe');

// Eurowings airlines object
const eurowings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    flightNumber: undefined,
    bookings: [],
}

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    flightNumber: undefined,
    bookings: [],
}

// 
const book = lufthansa.book;
// The book function is now a regular function, not a method on the lufthansa object
// So 'this' keyword in the book function will point to the global window object
// which doesn't have airline, iataCode, or bookings properties
// book('LH321', 'Steven Wilson'); // Error: 'this' is undefined in strict mode

// Using call method to invoke the book function with eurowings as 'this'
book.call(eurowings, '456', 'Steven Wilson');
console.log(eurowings.bookings);

// Using call method to invoke the book function with lufthansa as 'this'
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa.bookings);

// Using call method to invoke the book function with swiss as 'this'
book.call(swiss, 789, 'Steve Jobs');
console.log(swiss.bookings);


/* 
Using `Apply` method to invoke the book function with eurowings as 'this'

The only difference between `call` and `apply` is the way we pass arguments
 - `call`: arguments are passed individually
 - `apply`: arguments are passed as an array
*/

const flightData = [583, 'George Lucas'];
// Using apply method to invoke the book function with swiss as 'this'
book.apply(swiss, flightData);
console.log(swiss.bookings);

// In modern JS, the 'Apply' method is rarely used
// because we can achieve the same result using `call` method with spread operator
book.call(swiss, ...flightData);
console.log(swiss.bookings);

/* 
`bind` Method

The bind method doesn't execute the function immediately
It returns a new function that can be called later
*/

// Using bind method to invoke the book function with eurowings as 'this'
const bookEurowings = book.bind(eurowings);
bookEurowings('EW456', 'Steven Wilson');
console.log(eurowings.bookings);

// Using bind method to invoke the book function with lufthansa as 'this' 
// and passing flight number as an argument
const bookLufthansa = book.bind(lufthansa);
bookLufthansa('LH321', 'John Doe');
console.log(lufthansa.bookings);

// Using bind method to invoke the book function with swiss as 'this'
// and passing flight number as an argument
const bookSwiss = book.bind(swiss);
bookSwiss('SW321', 'Jane Smith');
console.log(swiss.bookings);

//  bind method with Event Listeners
//  If we use the book function directly in the event listener
//  'this' keyword in the book function will point to the event target
//  which is the button element
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

// Calling the buyPlane method on the lufthansa object
// lufthansa.buyPlane();

// The 'this' keyword in the buyPlane function will point to the button element
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// Vs.

// Using bind method to invoke the buyPlane function with lufthansa as 'this'
// and passing flight number as an argument
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application (pre-setting values). Instead of passing all the arguments at once,
// we can pre-set some of the arguments using bind method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

// Creating a new function with pre-set VAT rate (23%)
// 'this' keyword is not needed, so we pass null
const addVAT = addTax.bind(null, 0.23);
// The function above is equivalent to:
// addVAT = value => value + value * 0.23 

// Now we can use the new function with only one argument
console.log(addVAT(100));
console.log(addVAT(59));

// Partial Application using higher-order function
// We can achieve the same result using higher-order function
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}

// Using higher-order function to create a new function with pre-set VAT rate (23%)
// The function above is equivalent to:
// addVAT = value => value + value * 0.23
const calculateVAT = addTaxRate(0.23);
console.log(calculateVAT(100));
console.log(calculateVAT(59));

/* 
   --------------------------------------------------
   Coding Challenge - Building a Poll Application
   --------------------------------------------------

   A pool has a question, an array of options from which people can choose,
   and an array with the number of replies for each option. Thos data is stored in the 
   poll object below.

   List of Tasks:

   1. Create a method called 'registerNewAnswer' on the poll object. The method does 2 things:
   1.1. Display a prompt window for the user to input the number of the selected opton. The prompt
   should look like this:

        What is your favorite programming language?
        0: JavaScript
        1: Python
        3: Rust 
        4: C++
        5: GO
        (Write Option Number)

   1.2. Based on the input number, update the answers array. For example, if the option selected
   is 3, then change the 3rd element in the answers array to add one more vote. Make sure to check
   if the input is a number and if the number is within the range of the answers array. If not,
   display an error message and don't update the answers array.
   2. Call this method whenever the user clicks on the "Answer Poll" button.
   3. Create a method 'displayResults' which, when called, should display the results of the poll
   in the console. The results should be displayed in the format: "Poll Results: 3, 2, 4, 1" where
   each number represents the number of votes for each option.
   4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
   
   BONUS: Use the 'displayResults' method to display the two arrays in the test data. Use both the 
   'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should this 
   array look like in this situation?

   BONUS TEST DATA 1: [5, 2, 3]
   BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

*/

// Poll object containing the question, options, and answers
const poll = {
    question: 'What is your favorite programming language?', // Question of the poll
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++', '4: Go'], // Options for the poll

    /* 
       This generates [0, 0, 0, 0, 0] using the fill() method.
       This is a 5-element array with all values initialized to 0
       It is used to store the number of votes for each option
    */
    answers: new Array(5).fill(0),

    /* 
       Method to register a new answer. This method will be called
       whenever the user clicks on the "Answer Poll" button. Also, the
       method is bound to the poll object using bind method in the event listener.
    */
    registerNewAnswer: function() {
        /* Display a prompt window for the user to input the number of the selected opton
           the '.join' method will join the elements of the array with a newline character
           '\n' is used to add a newline character after the question and before the options
        */
        const answer = Number(
            prompt(this.question + '\n\n' + this.options.join('\n')
            + '\n\n(Write option number)')
        );
        
        /* Input validation. Check if the input is:
            1. Not a string
            2. A number 
            3. Within the range of the answers array
            If not, display an error message and don't update the answers array
        */
        if (answer >= 0 && answer < this.answers.length || typeof (answer) == NaN) {
            /* If the input validation passes, increment the answer count
                at the given index in the answers array.

                Example: If the input is 3, then increment the 3rd element in the answers array
                So the answers array will be updated to: [0, 0, 0, 1, 0]
            */
             this.answers[answer]++;
            // Update the answers array based on the input number
            if (answer === 1) {
                this.answers[0]++;
            } else if (answer === 2) {
                this.answers[1]++;
            } else if (answer === 3) {
                this.answers[2]++;
            } else if (answer === 4) {
                this.answers[3]++;
            } else if (answer === 5) {
                this.answers[4]++;
            } else {
                console.log('Invalid input');
            }
        } else {
            console.log('Invalid input');
        }
        return this.displayResults();
    },
    /* 
       Method to display the results of the poll. 
       This method will be called at the end of each 'registerNewAnswer' method call
    */
    displayResults: function() {
        console.log('Poll Results: ' + this.answers.join(', '));
    }
};

// Event listener for the poll. It will call the registerNewAnswer method if a clcik is detected.
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS: Use the 'displayResults' method to display the two arrays in the test data.
// Use both the 'array' and the 'string' option.

// Test data
const testData = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Bonus 1: Use the 'displayResults' method to display the two arrays in the test data using the 'array' option
poll.displayResults.call({answers: testData});

// Bonus 2: Use the 'displayResults' method to display the two arrays in the test data using the 'string' option
poll.displayResults.call({answers: testData2});
