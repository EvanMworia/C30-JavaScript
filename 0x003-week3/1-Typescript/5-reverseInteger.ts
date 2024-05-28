/**Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit
ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19 
*/
const input: number = 91;
if (input > 0) {
    const inputToString: string = input.toString();
    const splitInput: string[] = inputToString.split('');
    const reversedInput: string[] = [];
    // console.log(inputToString);
    // console.log(splitInput);
    for (let i = 1; i <= splitInput.length; i++) {
        reversedInput.push(splitInput[splitInput.length - i]);
    }
    // console.log(reversedInput);
    const joinedInput: number = Number(reversedInput.join(''));
    console.log(`The Input you gave me was ${input}`);
    console.log(`Its Reversed form is ${joinedInput}`);
} else {
    const inputToString: string = input.toString().slice(1);
    console.log(inputToString);
    const splitInput: string[] = inputToString.split('');
    const reversedInput: string[] = ['-'];
    // console.log(inputToString);
    // console.log(splitInput);
    for (let i = 1; i <= splitInput.length; i++) {
        reversedInput.push(splitInput[splitInput.length - i]);
    }
    // console.log(reversedInput);
    const joinedInput: number = Number(reversedInput.join(''));
    console.log(`The Input you gave me was ${input}`);
    console.log(`Its Reversed form is ${joinedInput}`);
}
