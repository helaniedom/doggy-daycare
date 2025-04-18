/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; // Default to full-day rate ($35)
let selectedDays = 0; // Counter for selected days

const dayButtons = document.querySelectorAll('.day-selector li'); // All day buttons (Mon, Tue, etc.)
const fullDayButton = document.getElementById('full'); // Full day button
const halfDayButton = document.getElementById('half'); // Half day button
const clearButton = document.getElementById('clear-button'); // Clear button
const costDisplay = document.getElementById('calculated-cost'); // Element to display the calculated cost

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        // If the day is not already selected, select it, otherwise deselect it
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            selectedDays++;  // Increment selected days
        } else {
            button.classList.remove('clicked');
            selectedDays--;  // Decrement selected days
        }
        updateCost();  // Recalculate the cost
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    // Remove the 'clicked' class from all day buttons
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });
    selectedDays = 0;  // Reset the selected days counter
    updateCost();  // Reset the cost to 0
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

fullDayButton.addEventListener('click', () => {
    dailyRate = 35;  // Set the rate to $35 (full day)
    fullDayButton.classList.add('clicked');  // Mark full-day button as selected
    halfDayButton.classList.remove('clicked');  // Remove the selection from half-day button
    updateCost();  // Recalculate the total cost
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

halfDayButton.addEventListener('click', () => {
    dailyRate = 20;  // Set the rate to $20 (half day)
    halfDayButton.classList.add('clicked');  // Mark half-day button as selected
    fullDayButton.classList.remove('clicked');  // Remove the selection from full-day button
    updateCost();  // Recalculate the total cost
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    const totalCost = selectedDays * dailyRate;  // Calculate the total cost
    costDisplay.innerHTML = totalCost;  // Display the total cost
}
