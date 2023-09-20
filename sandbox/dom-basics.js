const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//adding image
const newImage = document.createElement("img");
newImage.setAttribute ("src", "https://picsum.photos/200"); 
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

//manipulating some more files
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//addinging section and its children
const newSec = document.createElement("section");
newSec.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSec);

