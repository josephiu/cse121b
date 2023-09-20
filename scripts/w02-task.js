/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = "Joseph Israel";


let currentYear = new Date().getFullYear();

let profilePicture = "images/joseph.jpg";


/* Step 3 - Element Variables */
/* getting the element by id holding the name in the html and holding puting
into a variable here in js*/ 

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');

/*Note the # in the selector string indicating that is an ID */
const YearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img').src= profilePicture;

imageElement.alt = "Profile Picture";

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;

YearElement.textContent = currentYear;



/* Step 5 - Array */

/*Array for the favoritefood*/

myFavoriteFoodArray = ["Fufu", "Rice and Stew", "Jellof Rice", "Fish fries", "Boiled Plantain", 
"Tapioka Meals", "Beef Fries", "African Salad", "Nkwobi Spedial"];

/*Adding item to the aray*/
let singlelineFavouriteFood = "Beans Salad";
const foodAdd = myFavoriteFoodArray.push(singlelineFavouriteFood);

/*Removes the first Item from the Array*/
const foodRemoved = myFavoriteFoodArray.shift();

/*Removes the last Item from the Array*/
const foodRemoved2 = myFavoriteFoodArray.pop();



const myFavorit = myFavoriteFoodArray;
foodElement.innerHTML +=`<br>${myFavorit}`;
