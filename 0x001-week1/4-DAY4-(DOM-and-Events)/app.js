let myToDoList = [];
const itemInput = document.getElementById('input-item');
const dateInput = document.getElementById('date');

let undoneItems = document.getElementById('undone-items');
let doneItems = document.getElementById('done-items');

function addItem() {
    let newItem = {
        taskId: Math.floor(Math.random() * 1000),
        taskName: itemInput.value,
        taskDeadline: dateInput.value,
    };
    if (!(itemInput.value && dateInput.value)) {
        alert('To add an item, you are required to fill both fields');
    } else {
        let checkDays = calculateDays(dateInput.value);
        if (checkDays < 0) {
            console.log(myToDoList);
            alert(
                'deadlines cant be set in the past in respect to todays date'
            );
        } else {
            myToDoList.push(newItem);
            console.log(myToDoList);
            displayItems();
        }
    }
}

function displayItems() {
    let renderedHtml = '';
    if (myToDoList.length == 0) {
        renderedHtml =
            '<p><i>Note that no items have been added to the list</i></p>';
    } else {
        let checkDays = calculateDays(dateInput.value);
        if (checkDays < 0) {
            console.log(myToDoList);
            renderedHtml = '';
        } else {
            myToDoList.forEach((item) => {
                renderedHtml += `<span>ItemID: ${item.taskId} | ${
                    item.taskName
                } | ${calculateDays(item.taskDeadline)} day(s) </span><br><br>`;
            });
        }
    }
    undoneItems.innerHTML = renderedHtml;
}

function calculateDays(recordedDate) {
    let saidDate = new Date(recordedDate);
    let currentDate = new Date();
    const timeDifference = saidDate - currentDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

displayItems();
