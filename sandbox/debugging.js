// const PI = 3.14;
// // let radius = 3;
// let area = 0;

// function circleArea(radius) {
//   const area = radius * radius * PI;
//   return area;
// }

// area = circleArea(3);
// console.log("Area1:", area);
// // radius = 4;
// area = circleArea(4);
// console.log("Area2:", area);



const PI = 3.14;
let radius = 3;
let area = 0;
function circleArea(radius) {
    // I solved this by removing 'const' from the const area in the function.
    area = radius * PI;
    return area;
}

// I solved this by removing 'const' from the const area in the function.
area = circleArea(3)
console.log("Area1:", area);

radius = 4;
area = circleArea(4)
console.log("Area2:", area);
