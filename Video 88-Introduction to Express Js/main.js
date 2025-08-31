const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// app.get or app.post or app.dlete(path,handler)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About us!')
})

app.get('/blog', (req, res) => {
  res.send('Hello contact!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} to JS from BD
    console.log(req.params)  //will output { slug: 'javascript-tips' } for URL = http://127.0.0.1:3000/blog/javascript-tips?mode=dark&region=in
    console.log(req.query)  //will output { mode: 'dark', region: 'in' } for URL = http://127.0.0.1:3000/blog/javascript-tips?mode=dark&region=in
  res.send(`Hello ${req.params.slug} `)
})

// app.get('/blog/Intro-to-JS', (req, res) => {
//     // logic to fetch to intro to JS from DB
//   res.send('Hello Intro to JS!')
// })
// app.get('/blog/Intro-to-Py', (req, res) => {
//     // logic to fetch to intro to Py from DB
//   res.send('Hello Intro to Py!')
// })



app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
