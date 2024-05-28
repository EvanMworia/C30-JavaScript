/**Question 3: Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.
Examples:
8=> returns true
6=> returns false
 */
var input = 34;
if (input > 0 && (input & (input - 1)) === 0) {
    console.log("".concat(input, " : is a power of two"));
}
else {
    console.log("".concat(input, " : is NOT a power of two"));
}
