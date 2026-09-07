// Compoubd conditional statements in JS.

// Conditional evaluation using OR operator.
if (true || false) {
    console.log("Only one value needs to be true in an OR statement for the whole evaluation to be true ");
}


// Conditional evaluation using AND operator.
if (true && false) {
    //
} else {
    console.log("Both values need to be true in an AND statement for the whole evaluation to be true ");
}


var myMaxLimit = 20;
var myMinLimit = 5;

var myValue = 10;

if (myValue < myMaxLimit && myValue > myMinLimit) {
    console.log("The value " + myValue + " is between " + myMinLimit + " and " + myMaxLimit);
} else {
    console.log("The value " + myValue + " is not between " + myMinLimit + " and " + myMaxLimit);
}


// Evaluate multiple conditions using AND operator.
var myMaxXLimit = 5;
var myMinXLimit = 1;
var myMaxYLimit = 3;
var myMinYLimit = 1;

var myXValue = 6;
var myYValue = 2;

if ((myXValue < myMaxLimit && myXValue > myMinXLimit) && (myYValue < myMaxYLimit && myYValue > myMinYLimit)) {
    console.log("Both the X and Y values are within the limits")
} else {
    console.log("One or both of the X and Y values are outside of the limits")
}


// Conditional evaluation using NOT operator.
var myBoolean = false;
if (!myBoolean) {
    console.log("NOT false is true");
}