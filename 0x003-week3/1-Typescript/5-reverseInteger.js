/**Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit
ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19
*/
var input = 91;
if (input > 0) {
    var inputToString = input.toString();
    var splitInput = inputToString.split('');
    var reversedInput = [];
    // console.log(inputToString);
    // console.log(splitInput);
    for (var i = 1; i <= splitInput.length; i++) {
        reversedInput.push(splitInput[splitInput.length - i]);
    }
    // console.log(reversedInput);
    var joinedInput = Number(reversedInput.join(''));
    console.log("The Input you gave me was ".concat(input));
    console.log("Its Reversed form is ".concat(joinedInput));
}
else {
    var inputToString = input.toString().slice(1);
    console.log(inputToString);
    var splitInput = inputToString.split('');
    var reversedInput = ['-'];
    // console.log(inputToString);
    // console.log(splitInput);
    for (var i = 1; i <= splitInput.length; i++) {
        reversedInput.push(splitInput[splitInput.length - i]);
    }
    // console.log(reversedInput);
    var joinedInput = Number(reversedInput.join(''));
    console.log("The Input you gave me was ".concat(input));
    console.log("Its Reversed form is ".concat(joinedInput));
}
