let resetTrigger = document.getElementById('reset');

function populateBoard(size){
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove());

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


let amount = size * size;
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', function(){
        this.style.backgroundColor = "black"; //allows the user to draw on the generated canvas.
    })
    square.style.backgroundColor = "yellow";
    board.insertAdjacentElement('beforeend', square);
}
};

populateBoard(16); //calls the function with a default size of 16 squares

//this allows the user to decide on the size of the canvas while imposing a limit to prevent browser crash. 
function changeSize(input) {
    if(input>=2 && input <=100){
    populateBoard(input); 
} else {alert("error, please insert a number between 2 and 100")};
}



resetTrigger.addEventListener('click', () => {
    window.location.reload();
});