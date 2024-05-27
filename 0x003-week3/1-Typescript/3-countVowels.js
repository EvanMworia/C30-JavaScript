/* Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2
*/
var count = 0;
var vowelsList = ['a', 'e', 'i', 'o', 'u'];
var input = 'GGMU';
var formattedInput = input.trim().toLowerCase().split(' ');
for (var i = 0; i < formattedInput.length; i++) {
    for (var j = 0; j < formattedInput[i].length; j++) {
        if (vowelsList.includes(formattedInput[i][j])) {
            count += 1;
        }
    }
}
console.log("The Vowel count in the given input is: ".concat(count));
