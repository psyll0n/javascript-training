'use strict';

// Data structure where we will store our booking
const bookings = [];

// Function to create a booking
const createBooking = function (
    flightNumber,
    numOfPassengers = 10,
    price = 199 * numOfPassengers
) {

    // Storing the booking in the data structure
    const booking = {
        flightNumber,
        numOfPassengers,
        price
    }
    console.log(booking);
    // Pushing the booking into the data structure
    bookings.push(booking);
}

// Calling the function. The number of passengers and price will be set to the default values.
createBooking('LH212');
createBooking('LH212', 23);
createBooking('LH212', 3, 500);
createBooking('LH212', 345, 657);
// We pass undefined to numOfPassengers to not override the default value of price, 
// because default values are evaluated in order.
createBooking('LH212', undefined, 657);



const flight = 'LH234';
const passenger = {
    name: "John Smith",
    passportNumber: 1234567890
};


const checkIn = function (flightNumber, passenger) {
    flightNumber = 'LH234J';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passportNumber === 1234567890) {
        alert('Checked in')
    } else {
        alert('Wrong Passport!')
    };
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

/*
Pass by Reference vs Pass by Value. These are references to the same location in the memory heap, 
not the values themselves. This means that if we change the value of the variable, it will not 
affect the original value.

The example below demonstrates pass by value by creating new variables that reference the original values.
In JavaScript primitive types are passed by value meaning that only the values are copied. 
In the example below we copy the values of the flight and passenger name variables
*/
const flightNumber = flight;
const passengerName = passenger.name;

// This is a function that will generate a new passport number for the passenger.
const newPassport = function (person) {
    person.passportNumber = Math.floor(Math.random() * 10000000000);
    console.log(person.passportNumber);
}

newPassport(passenger);

checkIn(flight, passenger);


// Functions are objects, so they can be passed as values to other functions.
const add = function (a, b) {
    return a + b;
}