const fs = require("fs")

// console.log(fs)

// console.log("Starting")
// fs.writeFileSync("harry.txt","Harry is a good boy")
fs.writeFile("harry2.txt","Harry is a good boy",()=>{
    console.log("Done")
    fs.readFile("harry2.txt",(err,data)=>{
        console.log(err,data.toString())
    })
})

fs.appendFile("harry.txt","harry robo",(e,d)=>{
    console.log(d)
})
console.log("Ending")


