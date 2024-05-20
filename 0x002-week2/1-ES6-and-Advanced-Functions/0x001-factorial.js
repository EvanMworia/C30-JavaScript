function factorial(input) {
    if (input == 1) {
        return 1;
    }
    let result = input * factorial(input - 1);
    return result;
}

console.log(factorial(4));
