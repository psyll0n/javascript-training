'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: AUT-O-MATIC CAR FACTORY (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Factory Function Pattern: Dynamically assembling random objects from arrays.
 * 2. Object State & Encapsulation: Managing internal state (`started`, `fuel`, `mileage`)
 *    through dedicated methods (`start`, `stop`, `drive`, `addFuel`).
 */

// Universal messaging helper (works in both Node.js and browser environments)
const notify = (msg) => {
  if (typeof alert !== 'undefined') {
    alert(msg);
  } else {
    console.log(`[Car Alert]: ${msg}`);
  }
};

// ----------------------------------------------------------------------------
// 1. Factory Function: Generating Random Cars
// ----------------------------------------------------------------------------

/**
 * Generates a randomized car object using preset property arrays.
 * @returns {object} A brand-new car specification object
 */
function makeCar() {
  const makes = ['Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker'];
  const models = ['Cadillac', '500', 'Bel-Air', 'Taxi', 'Torpedo'];
  const years = [1955, 1957, 1948, 1954, 1961];
  const colors = ['red', 'blue', 'tan', 'yellow', 'white'];
  const convertible = [true, false];

  const rand1 = Math.floor(Math.random() * makes.length);
  const rand2 = Math.floor(Math.random() * models.length);
  const rand3 = Math.floor(Math.random() * years.length);
  const rand4 = Math.floor(Math.random() * colors.length);
  const rand5 = Math.floor(Math.random() * 5) + 1;
  const rand6 = Math.floor(Math.random() * convertible.length);

  return {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,
  };
}

/**
 * Prints car information to the console.
 * @param {object} car - The car object to display
 */
function displayCar(car) {
  console.log(`Your new car is a ${car.year} ${car.make} ${car.model} (${car.color})!`);
}

// Generate and display a randomized car:
const carToSell = makeCar();
displayCar(carToSell);

// ----------------------------------------------------------------------------
// 2. State Machine & Object Methods: The Fiat 500
// ----------------------------------------------------------------------------
const fiat = {
  make: 'Fiat',
  model: '500',
  year: 1957,
  color: 'Medium Blue',
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0, // Initialized fuel tank

  start: function () {
    if (this.fuel === 0) {
      notify('The car is on empty! Fill up before starting.');
    } else {
      this.started = true;
      notify('Engine started: Vroom vroom!');
    }
  },

  stop: function () {
    this.started = false;
    notify('Engine turned off.');
  },

  drive: function () {
    if (!this.started) {
      notify('You need to start the engine first!');
      return;
    }

    if (this.fuel > 0) {
      notify(`${this.make} ${this.model} goes zoom zoom!`);
      this.fuel--;
      this.mileage += 10;
      console.log(`Remaining fuel: ${this.fuel} gallon(s). Odometer: ${this.mileage} miles.`);
    } else {
      notify('Uh oh, out of fuel!');
      this.stop();
    }
  },

  addFuel: function (amount) {
    this.fuel += amount;
    console.log(`Added ${amount} gallon(s) of fuel. Current tank: ${this.fuel} gallon(s).`);
  },
};

// ----------------------------------------------------------------------------
// 3. Test Drive Simulation
// ----------------------------------------------------------------------------
console.log('--- Simulating Fiat Test Drive ---');
fiat.start();      // Fails: Out of fuel
fiat.addFuel(2);   // Fuel up with 2 gallons
fiat.start();      // Succeeds: Engine running
fiat.drive();      // Drives 10 miles (fuel: 1)
fiat.drive();      // Drives 10 miles (fuel: 0)
fiat.drive();      // Fails: Out of fuel, stops engine