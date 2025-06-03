let age=15;
if (age>=10 && age<=20){
    console.log("The age is between 10 to 20")
}
else{
    console.log("The age is not in between 10 and 20")
}

switch(true){
    case (age>10 && age<20):
        console.log("The age is between 10-20");
        break;
    default:
        console.log("Hey")
        break;
}


n=6;
if (n%2==0 && n%3==0){
    console.log("The nuber is divisible by both 2 and 3");
}
else if (n%2==0){
    console.log("The number is divisible by 2");
}
else if(n%3==0){
    console.log("The number is divisible by 3");
}
else{
    console.log("The number is not divisible by 2 or 3");
}

age=2
age >= 18 ? console.log("You can drive") : console.log("You cannot drive");
let msg=(age>=18)?"You can drive":"You cannot drive";
console.log(msg)
