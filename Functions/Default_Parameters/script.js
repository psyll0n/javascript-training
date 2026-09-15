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

