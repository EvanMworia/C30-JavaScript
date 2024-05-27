/*Question 1: FizzBuzz
Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
"FizzBuzz". */
let input: number = 0;
const fizzBuzzFeeder: number[] = [];

for (let i = 0; i < 100; i++) {
    input += 1;
    fizzBuzzFeeder.push(input);
    if (input % 3 == 0 && input % 5 == 0) {
        console.log('FizzBuzz');
    } else if (input % 3 == 0) {
        console.log('Fizz');
    } else if (input % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(input);
    }
}
