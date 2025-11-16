const a4 = document.getElementById('a4');

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

    a4.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";
}

setInterval(color, 5);

const stampCount = document.getElementById('count');
const add = document.getElementById('increase');
const subtract = document.getElementById('decrease');
const container = document.getElementById('stamps');

let count = 0;
var storedItem = localStorage.getItem("storedItem");

function plusOne(){
    // add image
    count++;
    stampCount.textContent = count;
    const stamp = document.createElement('img');
    stamp.src = 'badge.jpg';
    stamp.id = 'badge';
    container.appendChild(stamp);
    
    //add date
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; 
    const day = now.getDate();
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const fullDate = `${formattedMonth}/${formattedDay}/${year}`; // Example: "11/12/2025"
    stamp.title = fullDate;
    
    /*
    //save progress
    storedDates[count] = fullDate;*/
    save();
}

add.addEventListener('click', plusOne);

function save(){
    var Item = count
    localStorage.setItem("storedItem",Item);
}

function get(){
    localStorage.getItem("storedItem");
    for (let i = 0; i != storedItem; i++){
        // add image
        count++;
        stampCount.textContent = count;
        const stamp = document.createElement('img');
        stamp.src = 'badge.jpg';
        stamp.id = 'badge';
        container.appendChild(stamp);
        
        //add date
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; 
        const day = now.getDate();
        const formattedMonth = String(month).padStart(2, '0');
        const formattedDay = String(day).padStart(2, '0');
        const fullDate = `${formattedMonth}/${formattedDay}/${year}`; // Example: "11/12/2025"
        stamp.title = fullDate;
    }
}

function minusOne(){
    count--;
    const children = Array.from(container.children).filter(child => child.tagName === 'IMG');
    if (children.length > 0) {
        const lastImage = children[children.length - 1];
        container.removeChild(lastImage);
    }
    if (stampCount.textContent == 0){
        count++
    }
    stampCount.textContent = count;
    save();
}

subtract.addEventListener('click', minusOne);
