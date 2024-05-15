function toTittleCase(input) {
    let splitInput = input.trim().split(' ');
    let finalResult = new Array();
    for (let i = 0; i < splitInput.length; i++) {
        let restOfWord = splitInput[i].slice(1);

        capitalisedFirstLetter = splitInput[i][0].toUpperCase() + restOfWord;
        finalResult.push(capitalisedFirstLetter);
    }

    console.log(finalResult.join(' '));
}

let input =
    'ndio kufinish kumalo, ndio kudunda kudonjo, na mastyle ni deadly deadly.';
toTittleCase(input);
