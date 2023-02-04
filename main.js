// initializes color variable to black
let color = 'black';

// function for when button is clicked
function buttonClicked() {
    // select the element
    if (color == 'black') {
        document.body.style.color = "rgb(200,40,140)";
    }
    else {
        document.body.style.color = 'black';
    }
    color = document.body.style.color;
}