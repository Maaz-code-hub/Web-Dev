// import {a} from "./mymodule.js"    //This is a ESM //For named export {} is must //Chane type in package.jon to module for working 
// console.log(a)



// import obj from "./mymodule.js"
// console.log(obj)


// (function (exports,require,module,__filename,__dirname){
//     // Module code actually lives here
// })



const a = require("./mymodule2.js")           //This is a CommonJS(CJS)
console.log("a = ",a)

console.log(`Directory name = ${__dirname}`)
console.log(`File name = ${__filename}`)
