// Conditional tests in JavaScript

var knowJavascript = true;
console.log("The variable knowJavaScript is equal to " + knowJavascript + " and is a " + typeof knowJavascript);

// IF statement examples
if (knowJavascript) {
  console.log("You know Javascript!");
}

// The code below is equivalent to the code above.
if (knowJavascript) console.log("You know Javascript!");

var myValue = 5;
console.log("myValue is equal to 5");

if (myValue == 5) {
  console.log("myValue is equal to 5");
}


// IF - ELSE statement example.
var myValue = 5;
console.log("myValue is equal to 5");

if (myValue < 5) {
  console.log("This condition (myValue < 5) is true.");
} else {
  console.log("This condition (myValue < 5) is false.");
}


// IF - ELSE IF - ELSE statement example.
var myValue = 5;
console.log("myValue is equal to 5");

if (myValue != 5) {
  console.log("This condition (myValue != 5) is true.");
} else if (myValue > 5) {
  console.log("This condition (myValue > 5) is true.");
} else {
  console.log("All conditions are false.");
}


// Nested IF statement example.
var myValue = 5;
console.log("myValue is equal to 5");

if (myValue >= 1) {
  console.log("This condition (myValue >= 1) is true.");

  if (myValue <= 5) {
    console.log("This condition (myValue <= 5) is true.");
  }
}
