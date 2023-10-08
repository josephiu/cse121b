/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Joseph Israel",
    photo: "images/joseph.jpg",
    favoriteFoods: 
    ["Fufu", 
    "Rice and Stew", 
    "Jellof Rice", 
    "Fish fries", 
    "Boiled Plantain", 
    "Tapioka Meals", 
    "Beef Fries", "African Salad", "Nkwobi Special"],
    hobbies: ["Reading", "Park Going", "Comedy", "Happy Hours", "Church Calling"],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Abu Dhabi, UAE", 
        length: "5 years",
    },
    {
        place: "Dubai, UAE",
        length: "2 years",
    
    }
);
   

/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name; // or .textContent

/* Photo with attributes */
const myPhoto = document.querySelector("#photo");
myPhoto.src = myProfile.photo;
myProfile.alt = myProfile.name;



/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(foods => {
    let li = document.createElement("li");
    li.innerHTML = foods;
    document.querySelector("#favorite-foods").appendChild(li);
    
});


/* Hobbies List */

myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.innerHTML = hobbies;
    document.querySelector("#hobbies").append(li);

    

});



/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    
    dt.innerHTML = places.place;
    dd.innerHTML = places.length;

    document.querySelector("#places-lived").append(dt);
    document.querySelector("#places-lived").append(dd);
});

