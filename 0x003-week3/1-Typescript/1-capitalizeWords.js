/*Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.
Examples:
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming" */
var input = 'allo kuna skxs ubwx wnx';
var splitInput = input.split(' ');
var finalResult = [];
for (var i = 0; i < splitInput.length; i++) {
    var restOfWord = splitInput[i].slice(1);
    var firstLetter = splitInput[i][0].toUpperCase();
    finalResult.push(firstLetter + restOfWord);
}
console.log(finalResult.join(' '));
