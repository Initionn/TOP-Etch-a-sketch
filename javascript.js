// main container variable created
const mainContainer = document.querySelector("#mainContainer");

// square variable created, possibly removed when used in for loop
const square = document.createElement("div");
square.classList.add("square");
square.textContent = "Test to see the div";

// append to make sure it works
console.log(square);
mainContainer.appendChild(square);

