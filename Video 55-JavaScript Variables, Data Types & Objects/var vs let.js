var a=5
{
    var a=55         // var is globally scoped so this will change the value of a from 5 to 55
    console.log(a)
}
console.log(a)


let b=6              //More prefered in modern JS
{
    let b=66
    console.log(b)      // let is not globally scoped so this will not change the value of b from 6 to 66
}
console.log(b)