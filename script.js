const dvd = document.getElementById('DVD');
const maxTop = 600 - 60;
const minTop = 0;
const maxLeft = 1000 - 90;
const minLeft = 0;

const interval = 5;

let currentTop = parseInt(window.getComputedStyle(dvd).top);
let currentLeft = parseInt(window.getComputedStyle(dvd).left);

let goingTop = false;
let goingLeft = false;

let stepTop = 1;
let stepLeft = 1; 

function move(){
    let newTop = currentTop + stepTop;
    currentTop = newTop;
    dvd.style.top = currentTop + 'px';

    if (currentTop == maxTop){
        stepTop = -1;
    } else if (currentTop == minTop){
        stepTop = 1
    }

    let newLeft = currentLeft + stepLeft;
    currentLeft = newLeft;
    dvd.style.left = currentLeft + 'px';
    
    if (currentLeft == maxLeft){
        stepLeft = -1;
    } else if (currentLeft == minLeft){
        stepLeft = 1
    }
}

setInterval(move, interval);

let red = 255;
let blue = 0;
let green = 0;

function color(){
    if (red == 255 && blue != 255 && green == 0){ // add blue
        blue += 3;
    } else if (blue == 255 && red != 0 && green == 0){ // minus red
        red -= 3;
    } else if (blue == 255 && green != 255 && red == 0){ //add green
        green += 3;
    } else if (green == 255 && blue != 0 && red == 0){ // minus blue
        blue -= 3;
    } else if (green == 255 && red != 255 && blue == 0){ // add red
        red += 3;
    } else if (red == 255 && green != 0 && blue == 0){ // minus green
        green -= 3;
    } 

    dvd.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";
}

setInterval(color, 5);