// main container variable created
const mainContainer = document.querySelector("#mainContainer");
const title = document.querySelector("h1");

// square variable created, possibly removed when used in for loop
const square = document.createElement("div");
square.classList.add("square");
square.textContent = "Hello there :)";

// append to make sure it works
mainContainer.appendChild(square);

const newGrid = document.createElement("button");

newGrid.textContent = "New Grid?";

newGrid.addEventListener("click", () => {
    let userSelection = prompt("How many squares would you like your grid sides to be? The maximum allowed is 100");
    mainContainer.replaceChildren();
    if (userSelection > 100 || userSelection < 0) {
        alert("Oops, can't do that many!")
    } else {
        for (i = 0; i < userSelection; i++) {
            const newSquare = document.createElement("div");
            newSquare.className = "square";
            newSquare.textContent = "hello";
            mainContainer.appendChild(newSquare);
        }
        }

})
title.appendChild(newGrid);