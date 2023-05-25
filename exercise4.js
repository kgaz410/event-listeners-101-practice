// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 
let cellGreen = document.getElementsByClassName("grid-cell green");
let cellRed = document.getElementsByClassName("grid-cell red");
let cellBlue = document.getElementsByClassName("grid-cell blue");

for(let i = 0; i < cellRed.length; i++){
    cellRed[i].addEventListener("click", () => {
        cellRed[i].style.backgroundColor = "red";
    })

}

for(let i = 0; i < cellGreen.length; i++){
    cellGreen[i].addEventListener("click", () => {
        cellGreen[i].style.backgroundColor = "green";
    })

}

for(let i = 0; i < cellBlue.length; i++){
    cellBlue[i].addEventListener("click", () => {
        cellBlue[i].style.backgroundColor = "blue";
    })

}

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!