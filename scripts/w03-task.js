/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2)
{
    return number1 + number2;

}


// geting a nuber from html and assigning it to a variable
function addNumbers()
{    

    // Assigning the values recieved from HTML id's to the fuctions for addition
    // then assign them to an id of sum in the html
    
    let addnumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addnumber1,addNumber2);

}
//Selecting a button inthe html with id name addNumbers using querySelectot
//and add click and call the addNumbers function. 
document.querySelector('#addNumbers').addEventListener('click',addNumbers);



/* Function Expression - Subtract Numbers */
function subtract(number1, number2)
{
    return number1 - number2;

}


// geting a nuber from html and assigning it to a variable
function subtractNumbers()
{    

    // Assigning the values recieved from HTML id's to the fuctions for addition
    // then assign them to an id of sum in the html
    
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1,subtract2);

}
//Selecting a button inthe html with id name addNumbers using querySelectot
//and add click and call the addNumbers function. 
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);



/* Arrow Function - Multiply Numbers */


const multiplyNumbers = () => document.querySelector("#product").value = 
Number(document.querySelector("#factor1").value) * Number(document.querySelector("#factor2").value);


document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);




/* Open Function Use - Divide Numbers */



const divideNumbers = () => document.querySelector("#quotient").value = 
Number(document.querySelector("#dividend").value) / Number(document.querySelector("#divisor").value);


document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */
// const currentDate = new Date();
// const currentyear = currentDate;

// const YearElement = document.querySelector('#year').value;
// yearElement.textContent = currentYear;


const currentDate = new Date();
let date = currentDate.getDate();
let year = currentDate.getFullYear();

const getfullyears = year;

document.querySelector('#year').innerHTML = getfullyears;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */


let myNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerHTML = myNumbersArr;



/* Output Odds Only Array */

const oddNumbers  = myNumbersArr.filter(arr => arr % 2 === 1);
document.querySelector("#odds").innerHTML = oddNumbers;


/* Output Evens Only Array */

const evenNumbers  = myNumbersArr.filter(arr => arr % 2 === 0);
document.querySelector("#evens").innerHTML = evenNumbers;


/* Output Sum of Org. Array */
const summery = 0;
const sumOfArray =  myNumbersArr.reduce((sum, number) => sum + number, summery);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;



/* Output Multiplied by 2 Array */

const multiplyOfArray =  myNumbersArr.map( number => number * 2);
document.querySelector('#multiplied').innerHTML = multiplyOfArray;


/* Output Sum of Multiplied by 2 Array */

const sumOfmultiply =  multiplyOfArray.reduce((sum, number) => sum + number, summery);

document.querySelector('#sumOfMultiplied').innerHTML = sumOfmultiply;

