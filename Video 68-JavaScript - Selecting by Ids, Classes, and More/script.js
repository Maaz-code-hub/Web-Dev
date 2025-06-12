console.log("Harry")

// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="red"

// document.getElementById("red").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"   //(Error)-->it return node list we cannot apply .style prop for node list instead use the following code
console.log(document.querySelectorAll(".box"))                     //prof for the above statement
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="green"
})

console.log(document.getElementsByTagName("div"))                 //All div

e=document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"))                             //e[4] id ==>redbox==>true
console.log(e[3].matches("#redbox"))                             //e[3] id !=>redbox==>false
console.log(e[3].closest("#redbox"))                             //e[3] id !=>redbox==>null
console.log(e[3].closest(".container"))          
console.log(document.querySelector(".container").contains(e[0])) //true  
console.log(document.querySelector(".container").contains(document.querySelector("body"))) //false conatainer dont contain body 
console.log(document.querySelector("body").contains(document.querySelector(".container"))) //true  body contain container 
