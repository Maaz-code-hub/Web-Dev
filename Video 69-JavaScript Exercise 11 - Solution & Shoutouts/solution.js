// n=Number(prompt("Enter your number:"))


//CWH method
let a=6
function factorials(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c =arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}

factorials(a)

// M1 using loops
// let prod=1;
// for (let i = 1; i <n+1; i++) {
//     prod=prod*i
    
// }
// console.log(prod)

// M2 using reduce function
// let arr=[]
// for (let i = 1; i < n+1; i++) {
//     arr.push(i)
// }

// const fac=(a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(fac))