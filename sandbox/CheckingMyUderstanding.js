let firstName = 'Antonia';
let lastName = 'Francesca';

function Myfunc (firstname,secondname)
{
    return firstname + secondname;
}

myfunc (firstName,lastName);

console.log(myfunc);



// anonymouse function decleration
const fullname = function (first, last) 
{
    return `${first} ${last}`; 
}

// arrow function expression
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;


// getting a html names with the id       // (parameter) => {expressinon}
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);


//Array.map() - To get individual length of an array
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]


// Array.filter()  - This expressiong bellowes returns only words from the words array that are greater than 6 characters.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// Array.map will retune the words lenth 
let wordsLengths = words.map((word) => word.length);



//Using the names.reduce() method, create an expression that returns the average string length 
//of the names in the names array. Expected output is 5.8. 

names.reduce((total, name) => total + name.length, 0) / names.length;




