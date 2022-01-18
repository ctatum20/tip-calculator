// console.log("HELLOOOOOO")

//How do we get the image?
let darkMode = false
let themeBtn = document.getElementById("mode")
let background = document.body.style

'rgb(20,29,47)'

let bill = 0;
let tipPercentage;
let amountOfPeople = 0;
let totalTip;
let totalAmountPerPerson;
let tipPerPerson;
let totalPerPerson;

// How do I make my image clickable?


function resetCalc() {
    document.getElementById('tip-amount').innerText = '$0.00'
    document.getElementById('total-amount').innerText = '$0.00'
    document.getElementsById('bill-input').value = ''
    document.getElementsById('number-of-people').value = ''
}

function darkModeProperties () {
    // console.log("GOOD NIGHT SLEEP TIGHT")
    
    themeBtn.src = "./images/icon-sun.svg"
    // How do we get the background color of the WHOLE HTML page
    background.backgroundColor = 'rgb(20,29,47)'

    darkMode = true
   }
   
function lightModeProperties() {
    // console.log("LET BE THERE LIGHT")

    themeBtn.src = "./images/icon-moon.svg"

    background.backgroundColor = "hsl(185, 41%, 84%)";

    darkMode = false
   }



themeBtn.addEventListener("click", function() {
    if(darkMode == false) {
        //Change to dark
        darkModeProperties()
    } else {
        // Change to light
        lightModeProperties()
    }
})


// How can I record what input I put in the bill
// How do I get bill input?
// How do I make something run when i put something in my input?

let billInput = document.getElementById("bill-input")

billInput.addEventListener("change", function() {
    let bill = billInput.value
    calcTipSplit(bill, percent, amountOfPeople)
})

let people = document.getElementById("number-of-people")

people.addEventListener("change", function () {
    let amountOfPeople = people.value
        calcTipSplit(bill, percent, amountOfPeople)

})


// How do we get all the buttons?
let percent = document.querySelectorAll(".button")



percent.forEach((btn)=> {
    
    btn.addEventListener("click", function() {
        tipPercentage = parseFloat(btn.innerText)

            calcTipSplit(bill, percent, amountOfPeople)

        
    })
})
// Then how do we give each of them an event listener


// HW: CREATE A FUNCTION THAT CAN CALCULATE THE TIP AMOUNT AND TOTAL AMOUNT PER PERSON
// IT SHOULD TAKE 3 PARAMETERS

// function calcTipSplit(bill,percent,amountOfPeople) {
//     // Create the logic


//     // console.log() two things:
//     // Tip amount per person
//     // Total amount per person
// }

// calcTipSplit(100,.15,2)


function calcTipSplit(bill, percentage, amountOfPeople) {
// Tip amount per person
// Total amount per person
// Saving all out inputs
bill = parseInt(billInput.value)
percentage = tipPercentage/100
amountOfPeople = parseFloat(people.value)

// Handle the input logic before calculation

// handle the input logic IF there is a CUSTOM PERCENTAGE //



console.log(bill)
console.log(percentage)
console.log(amountOfPeople)

if(bill && percentage && amountOfPeople) {
    let tipAmountPerPerson = (bill * percentage) / amountOfPeople
console.log(tipAmountPerPerson)

let totalAmountPerPerson = bill/amountOfPeople + tipAmountPerPerson
console.log(totalAmountPerPerson)

// id == tip-amount
document.getElementById("tip-amount").innerText = "$" + tipAmountPerPerson.toFixed(2)
// id == total-amount
document.getElementById("total-amount").innerText = "$" + totalAmountPerPerson.toFixed(2)
}



};