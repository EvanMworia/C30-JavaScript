let myHabits = [];

let habitInput = document.getElementById('habit');
let dateInput = document.getElementById('date');
let trackedHabitsList = document.getElementById('habits');
let button = document.getElementById('btn');
const habit = habitInput.value;
const date = dateInput.value;

function displayTrackedHabits() {
    // to show all habits
    let renderedHtml = '';
    if (myHabits.length == 0) {
        renderedHtml = '<p> <i> No Habits Added Yet!!<i></p>';
    } else {
        myHabits.forEach((item) => {
            renderedHtml += `
      <span>${item.habitName} - ${calculateDays(
                item.habitDate
            )} days</span> <br><br>
      `; //---NOTE TO SELF--- Remember to include the delete habit button, back to the html thta should be rendered
            //after creating deleteHabit
            //   <button onclick="deleteHabit(${name})">Delete</button>
        });
    }

    console.log(trackedHabitsList);
    trackedHabitsList.innerHTML = renderedHtml;
}
function addHabit() {
    let newHabit = {
        habitName: habitInput.value,
        habitDate: dateInput.value,
    };
    if (!(habitInput.value && dateInput.value)) {
        alert('Please fill both fields');
    } else {
        myHabits.push(newHabit);
        displayTrackedHabits();
    }
    // if (button.textContent === 'Add Habit') {
    //     myHabits.push(newHabit);
    //     displayTrackedHabits();
    // }
}
// button.addEventListener('click', addHabit);

function calculateDays(recordedDate) {
    let oldDate = new Date(recordedDate);
    let todaysDate = new Date();
    const timeDifference = todaysDate - oldDate;
    //------NOTE TO SELF -----------
    //Research what this converter from time to days is doing
    //What all the multiplications are for
    //best guess 1000 - for seconds
    //60 - for seconds to a minute (as there is 60 secs in a minute)
    //60 - for minutes to an hour as there is 60 minutes in an hour
    // 24 for converting hours to a day
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

function deleteHabit(x) {}

displayTrackedHabits();
