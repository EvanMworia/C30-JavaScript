/* Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2
*/
let count: number = 0;
const vowelsList: string[] = ['a', 'e', 'i', 'o', 'u'];
let input: string = 'GGMU';
const formattedInput = input.trim().toLowerCase().split(' ');
for (let i = 0; i < formattedInput.length; i++) {
    for (let j = 0; j < formattedInput[i].length; j++) {
        if (vowelsList.includes(formattedInput[i][j])) {
            count += 1;
        }
    }
}
console.log(`The Vowel count in the given input is: ${count}`);
