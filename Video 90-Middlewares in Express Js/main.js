const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')

const fs =require("fs")

app.use(express.static("public"))
app.use('/blog',blog)


// middleware 1--logger for our application
app.use((req, res, next)=>{
    console.log(req.headers)
    req.harry="I am harry";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method} OR ${new Date()}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// middleware 2
app.use((req, res, next)=>{
  console.log('M2')
  next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!'+req.harry)
})


app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
