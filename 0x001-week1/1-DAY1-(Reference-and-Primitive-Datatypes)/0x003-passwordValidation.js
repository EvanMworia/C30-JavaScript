let unAllowedPasswordList = new Array('password', '12345678', 'mitochondria');
let myPassword = 'GOTHA-TENA';

//Check iif users password is among the forbiden list
//
if (unAllowedPasswordList.includes(myPassword.toLowerCase())) {
    console.log(
        'The password you have chosen is not accepted, as per the un-allowed passwords: \n',
        unAllowedPasswordList
    );
}
//check if pwd is null/empty
//additionally checks edge case, if user only entered whitespace -- achieves this by trimming both sides
else if (myPassword.trim() == '') {
    console.log(
        'You need to supply a valid password (not empty) in order to continue'
    );
}

//lastly enforces legnth of password to be 8 characters or more
else if (myPassword.length >= 8) {
    //set a boolean for tracking password validity
    let passwordIsValid;
    //iterate through the length of the password, checking one character against the next
    for (let i = 0; i < myPassword.length - 1; i++) {
        //create two pointers, first: starting from the zeroth index the second: from the first index
        //checks the chars against each other while updataing the boolean
        //if character is not repeating itself set validity to true
        //when character consecutivley repeats itself, set validity to false and immidiatley break from the loop, as validity is already compromised. NO need of iterating further
        if (myPassword[i].toLowerCase() === myPassword[i + 1].toLowerCase()) {
            passwordIsValid = false;
            break;
        } else {
            passwordIsValid = true;
        }
    }
    //read the boolean value, if false password is not valid, if true password is valid
    if (!passwordIsValid) {
        console.log(
            'Your Password should NOT contain matching-consecutive-characters'
        );
    } else {
        console.log('That is a VALID password');
    }
    //serves as a catch-all
} else {
    console.log('Passwords should be a MINIMUM of 8 characters');
}

// if (myPassword.length >= 8) {
//     for (let i = 0; i < myPassword.length; i++) {
//         for (let j = myPassword.length; myPassword.length > 0; j--) {
//             myPassword.charAt(i) == myPassword.charAt(j - (j - 1));
//             console.log(
//                 'You should not use passwords with repeating contigous characters'
//             );
//         }
//     }
// }
