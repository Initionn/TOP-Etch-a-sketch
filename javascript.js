// main container variable created
const mainContainer = document.querySelector("#mainContainer");
const title = document.querySelector("h1");

// square variable created, possibly removed when used in for loop
const square = document.createElement("div");
square.classList.add("square");

// append to make sure it works
mainContainer.appendChild(square);

const newGrid = document.createElement("button");

newGrid.textContent = "New Grid?";

//grid query for amount of squares
newGrid.addEventListener("click", () => {
    let userSelection = prompt("How many squares would you like your grid sides to be? The maximum allowed is 100");
    mainContainer.replaceChildren();
    if (userSelection > 100 || userSelection < 0) {
        alert("Oops, can't do that many!")
    } else {
        createGrid(userSelection);
        }}
    )

title.appendChild(newGrid);

//create grid, and enable mouseover listener.
function createGrid (sections) {
    for (let i = 0; i < sections; i++) {
        const columnSquare = document.createElement("div");
        columnSquare.className = "square";
        mainContainer.appendChild(columnSquare);
        
        for (let ii = 0; ii < sections; ii++) {
            const rowSquare = document.createElement("div");
            rowSquare.className = "square";
            columnSquare.appendChild(rowSquare);

            rowSquare.addEventListener("mouseover", () => {
                rowSquare.style.backgroundColor = "blue";
                setTimeout(() => {
                    rowSquare.style.backgroundColor = "";
                }, 1000); 
            });
        }
    }  
}

// so they grid starts out 16x16
mainContainer.replaceChildren();
createGrid(16);