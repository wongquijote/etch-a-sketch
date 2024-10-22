const body = document.querySelector("body");
const btn = document.createElement("button");
body.appendChild(btn);
const container = document.createElement("div");
body.appendChild(container);
container.classList.add("container");

btn.innerText = "Press me to change number of squares";
btn.addEventListener('click', (e) => {
    let numSquares = prompt("Please enter the number of squares you want:");
    if (+numSquares != null && +numSquares > 0 && +numSquares < 100) {
        console.log(+numSquares);
        container.replaceChildren();
        createGrid(+numSquares);
    } else {
        console.log("You gave an invalid input");
    }
})
createGrid(16);
function createGrid(gridSize, color="black") {
    if (!color) {
        color = getRandomColor();
    }
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            let elem = document.createElement("div");
            row.appendChild(elem);
            elem.style.border = "solid black";
            elem.style.padding = "10px";
            elem.addEventListener("mouseover", (event) => {
                event.target.style.background = color;
            });
        }
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'; // hex
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }