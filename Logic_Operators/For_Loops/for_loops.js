// FOR loops in JavaScript.
for (var i = 0; i < 25; i++) {
    console.log("The square of " + i + " is " + Math.pow(i, 2));
}


// Nested FOR loops. Multiplication table.
/* 
1  2  3  4  5  6  7  8  9  10  11  12 
2  4  6  7  10 12 14 16 17 18  20  24
*/
for (var a = 1; a <= 12; a++) {
    var tableRow = ""; // Empty string.

    for (var b = 1; b <= 12; b++) {

        var product = a + b;
        var productString = product.toString() + "\t";
        tableRow += productString;

    }

    console.log(tableRow);
}