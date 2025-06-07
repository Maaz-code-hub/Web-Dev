n=Number(prompt("Enter your number:"))

// M1 using loops
// let prod=1;
// for (let i = 1; i <n+1; i++) {
//     prod=prod*i
    
// }
// console.log(prod)

// M2 using reduce function
let arr=[]
for (let i = 1; i < n+1; i++) {
    arr.push(i)
}

const fac=(a,b)=>{
    return a*b
}
console.log(arr.reduce(fac))