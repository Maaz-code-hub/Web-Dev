// map_filter_reduce
let arr=[1,13,5,7,11];
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

let newarr=arr.map((e)=>{
    return e**2
})

console.log(newarr)

const greaterthan7=(e)=>{
    if (e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterthan7))
console.log(newarr.filter(greaterthan7))


let arr2=[1,2,3,4,5,6]

const red=(a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))