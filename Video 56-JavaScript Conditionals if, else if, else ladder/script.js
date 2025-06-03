console.log("Hello i am conditional tutorial")

let age=18;
let grace=2
// = += -= *= /= etc are also avl
// == >= <= != are also avl
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age**grace)
console.log(age%grace)

if (age==0){
    console.log("Are you kidding?")
}
else if (age>18){
    console.log("You can drive");
}

else{
    console.log("You cannot drive")
}

//NOTE:
// "3"==3 -->True....This only check value
// "3"===3 -->False..This checks for type and value both 
//  3!=="54" -->True...This checks not equal to value or not equal to type

// More operators in JS
// ? ternary operator
//  && logical and
// || logical or
// logical not


/*
this are 
multi 
line cmt
*/


a=6
b=8
c = a>b?(a-b):(b-a)
console.log(c)