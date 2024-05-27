/*Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.
Examples:
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming" */
const input: string = 'allo kuna skxs ubwx wnx';

const splitInput = input.split(' ');
const finalResult: string[] = [];
for (let i = 0; i < splitInput.length; i++) {
    const restOfWord = splitInput[i].slice(1);

    const firstLetter = splitInput[i][0].toUpperCase();
    finalResult.push(firstLetter + restOfWord);
}
console.log(finalResult.join(' '));
