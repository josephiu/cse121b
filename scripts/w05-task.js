/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement  = document.querySelector("#temples");
let templeList  = [];

/* async displayTemples Function */
const displayTemples = (templeList=> {
    templeList.forEach(temples => {

           

        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.innerHTML = temples.templeName;

        const imgElement = document.createElement("img");
        

        imgElement.src = temples.imageUrl;
        imgElement.alt = temples.location;
        
        

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        
        templesElement.appendChild(articleElement);
        
        
    })


})

/* async getTemples Function using fetch()*/

const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok){
        const getData = await response.json();
        templeList  = getData;
        displayTemples(templeList);

        //console.log(templeList)
    }
}

getTemples();




// * reset Function */

function reset() {

    templesElement.textContent = "";
    
}


// /* sortBy Function */

function sortBy(temples){
    reset();

    var filter = document.querySelector("#sortBy").value;

    switch (filter){

        case "utah":
            
            displayTemples(temples.filter(temple =>temple.location.includes("Utah")));
            break;

        case "notutah":
            displayTemples(temples.filter(temples =>!temples.location.includes("Utah")));
               
            break;

        case "older":
            displayTemples(temples.filter(temples => new Date(temples.dedicated) < new Date(1950, 0, 1)));

                
            break;

        case "all":
                displayTemples(temples);
                break;



     }

     
    

    
}


/* Event Listener */


document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });


