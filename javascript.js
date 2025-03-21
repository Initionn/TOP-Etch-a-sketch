const mainContainer = document.querySelector("#mainContainer");

const square = document.createElement("div");
square.classList.add("square");
square.textContent = "Test to see the div";

console.log(square);
mainContainer.appendChild(square);