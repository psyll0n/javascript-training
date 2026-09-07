// While loops in JavaScript.

var myValue = 0;

while (myValue < 100) {
    if (myValue % 9 == 0) {
        console.log(myValue);
    }
    myValue++;
}

// Do While loops in JavaScript.
var myBadValue = 0;

do {
    console.log("This will run at least once.");
} while (myBadValue != 0);