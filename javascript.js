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


function createColumns(toCreate) {
    const columnSquare = document.createElement("div");
            columnSquare.className = "square";
            columnSquare.textContent = "hello";
            mainContainer.appendChild(columnSquare);
    for (i = 0; i < toCreate; i++) {
    function createRows() {
        const rowSquare = document.createElement("div");
        rowSquare.textContent = "hi";
        rowSquare.classname = "square";
        columnSquare.appendChild(rowSquare);
    }
    }
} 


newGrid.addEventListener("click", () => {
    let userSelection = prompt("How many squares would you like your grid sides to be? The maximum allowed is 100");
    mainContainer.replaceChildren();
    if (userSelection > 100 || userSelection < 0) {
        alert("Oops, can't do that many!")
    } else {
        for (i = 0; i < userSelection; i++) {
            createColumns(i);
        }
        }

})
title.appendChild(newGrid);