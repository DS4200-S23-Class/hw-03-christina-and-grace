// function for when button is clicked
function buttonClicked() {
    // select the element
    let color = document.body.style.color;
    if (color == 'black') {
        document.body.style.color = "rgb(200,40,140)";
    }
    else {
        document.body.style.color = 'black';
    }
}