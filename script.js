let container = document.querySelector(".container");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let dimensions = prompt("how many squares per side would you like?");
  dimensions = parseInt(dimensions);
  if(isNaN(dimensions) || dimensions <= 0 || dimensions > 100){
    alert("enter a valid number between 0 and 100");
    return;
  }
  createGrid(dimensions);
});


function createGrid(dimensions) {
    container.innerHTML = '';
    let squareSize = container.clientWidth / dimensions;
  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      let div = document.createElement("div");

      div.className = "box";
      div.style.width = `${squareSize}px`
      div.style.height = `${squareSize}px`;
      
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
      });
      container.appendChild(div);
    }
  }
}
