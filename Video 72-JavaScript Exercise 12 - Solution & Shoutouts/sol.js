// M1
function rand() {
  return Math.floor(Math.random() * 256);
}


document.body.style.backgroundColor=`rgb(${rand()}, ${rand()}, ${rand()})`;


let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
}

// M2(See the vidio no 72)