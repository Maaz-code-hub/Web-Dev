// Strings are immutable
console.log("This is string Tutorial")
let a = "Harry"
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name="Harry"
let friend="Rohan"
console.log("His name is "+real_name+" and his friends name is "+friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)     //Template literals

let b="Shivam"
let x ="     Hii have a good day       "
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,5))                           //1 is included and 5 is not (Index)
console.log(b.slice(1))                             //Start from 1 till the end (Index)
console.log(b.replace("Sh","77"))                   //If Sh appears 2 time then.. only 1st occuranvce will replaced
console.log(b.concat(a))
console.log(b.concat(a,"Aishwariya","Rahul","Priya"))
console.log(x.trim())                               //Trims or removes Whitespaces from the string

