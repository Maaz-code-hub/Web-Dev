/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// SOLUTION M1
r=Math.random()*100
a=Number(prompt("Enter the First number:"))
op=prompt("Enter the operator")
b=Number(prompt("Enter the Second number:"))
// console.log(r)

// if(r<10){
//     if(op="+"){
//         console.log(a-b)
//     }
//     else if(op="*"){
//         console.log(a+b)
//     }
//     else if(op="-"){
//         console.log(a/b)
//     }
//     else if(op="/"){
//         console.log(a**b)
//     }
// }

// else{
//     if(op="+"){
//         console.log(a+b)
//     }
//     else if(op="*"){
//         console.log(a*b)
//     }
//     else if(op="-"){
//         console.log(a-b)
//     }
//     else if(op="/"){
//         console.log(a/b)
//     }
// }



// SOLUTION 2
r=Math.random()*100
a=Number(prompt("Enter the First number:"))
op=prompt("Enter the operator")
b=Number(prompt("Enter the Second number:"))

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",

}

if(r>10){
    //perform correct calculations
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
}

else{
    //Perform wrong operations
    c=obj[c]
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)

}