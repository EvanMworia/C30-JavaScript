function passwordGenerator(firstName, lastName) {
    let firstThreeChar = firstName.slice(0, 3);
    let lastThreeChar = lastName.slice(-3);

    let result = firstThreeChar + lastThreeChar;
    let finalPassword = result + '@2024';
    return finalPassword;
}
let firstName = 'Evans';
let lastName = 'Githinji';
let generatedPassword = passwordGenerator(firstName, lastName);
console.log('Your password is ' + generatedPassword);
