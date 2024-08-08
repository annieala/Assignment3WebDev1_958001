/********* Create Variables *********/
// Useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.

let numberOfDays = 0;  // initializes number of days at 0
let totalCost = 0;  // initializes total cost at 0
const week = document.querySelectorAll(".day-selector .blue-hover"); // matches classes day-selector and blue hover to the constant "days of week"
const fullDayOrHalfDay = document.querySelectorAll(".small-button.blue-hover"); // select full day or half day from class
const cost_per_day = 35; // the constant daily cost is $35
const calculatedCost = document.getElementById("calculated-cost"); // creating constant for calculatedCost using id 'calculated-cost' from HTML
let fullDay = document.getElementById("full"); // get the element with the ID "full"
let rateAdjuster; // variable to adjust rate based on day

/********* Color Change Days of Week *********/
// When the day buttons are clicked, we will apply the "clicked" class to that element, update relevant variables, and recalculate the total cost.

week.forEach(function(day) { //for each week, there is a function of day
    day.addEventListener("click", function() { // adding an event listener to listen for a day being clicked, which will trigger a function.
        if (!day.classList.contains("clicked")) { // checks to see if the day is clicked
            day.classList.add("clicked"); // adds the "clicked" class to the day to change colours
            numberOfDays++; // adds the clicked day to number of days
            updateTotalCost(); // updates the total cost
        } else {
            day.classList.remove("clicked"); // removes the "clicked" class from the day
            numberOfDays--; // subtracts the clicked day from number of days
            updateTotalCost(); // updates the total cost
        }
    });
});

/********* Clear Days *********/
// When the clear-button is clicked, remove the "clicked" class from all days, reset relevant variables, and set the calculated cost to 0.

document.getElementById("clear-button").addEventListener("click", function() { // add click event listener to clear button, if clicked it triggers a function
    week.forEach(function(day) { // the function loops through each day in week ()
        day.classList.remove("clicked"); // removes the "clicked" class from the day element
    });
    numberOfDays = 0; // resets number of days to 0
    updateTotalCost(); // updates total cost to 0
});

/********* Change Rate *********/
// When the half-day or full-day button is clicked, set the daily rate accordingly, update the "clicked" class, and recalculate the total cost.

fullDayOrHalfDay.forEach(function(button) {
    button.addEventListener("click", function() { // add click event listener to full day button and half day button
        fullDayOrHalfDay.forEach(function(btn) {
            btn.classList.remove("clicked"); // remove "clicked" class from all rate buttons
        });
        button.classList.add("clicked"); // add "clicked" class to the clicked button
        updateTotalCost(); // recalculate total cost
    });
});

/********* Calculate *********/
// When a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value.

function updateTotalCost() {
    if (fullDay.classList.contains("clicked")) { // if full day is clicked
        rateAdjuster = 1; // the rate stays the same  (# of days * 35 * 1)
    } else { // if its not, its a half day
        rateAdjuster = 0.57142857; // (# of day * 20 * 1) since 20/35 is 0.57142857
    }

    totalCost = numberOfDays * cost_per_day * rateAdjuster; // calculate the total cost
    calculatedCost.innerHTML = totalCost.toFixed(2); // display the total cost, rounded to two decimal places
}
