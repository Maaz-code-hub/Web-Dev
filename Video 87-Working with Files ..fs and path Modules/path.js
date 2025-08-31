//Read Path docs from https://www.geeksforgeeks.org/node-js/nodejs-path-module/ 

import path from "path";

// console.log(path)
 
let mypath="E:\\Sigma web development course\\Video 87\\harry.txt"
console.log(path.extname(mypath))

console.log(path.dirname(mypath))
console.log(path.basename(mypath))

console.log(path.join("c:/","programs\\harry.txt"))