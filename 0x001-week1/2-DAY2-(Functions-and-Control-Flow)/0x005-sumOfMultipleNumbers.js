let input = '10, 10, joy, 10';

function calculateTotal(input) {
    let newInputArray = input.split(',');
    let total = 0;
    newInputArray.forEach((element) => {
        if (isNaN(element)) {
            element = 0;
            total += element;
        } else {
            total += Number(element);
        }
    });
    console.log(total);
    return total;
}

calculateTotal(input);
