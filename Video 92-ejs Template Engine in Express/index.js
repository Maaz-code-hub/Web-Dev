const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName="Adidas"
    let serchtext="Search Now"
    let arr=[1,54,65]
  res.render("index",{siteName:siteName,serchtext:serchtext,arr})
})

app.get('/blog/:slug', (req, res) => {
    let BlogTitle="Adidas when and why?"
    let BlogContent="Its a very good brand"
   res.render("views/index.ejs",{BlogTitle:BlogTitle,BlogContent:BlogContent})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
