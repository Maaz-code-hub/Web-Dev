const express = require("express");

const blog = require("./routes/blog");
const shop = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/blog", blog);
app.use("/shop", shop);

app
  .get("/", (req, res) => {
    //We can club all requests like this or we can seperate it
    console.log("Hey this is get request");
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("Hey this is post request");
    res.send("Hello World post!");
  })
  .put("/", (req, res) => {
    console.log("Hey this is put request");
    res.send("Hello World put!");
  });

app.delete("/", (req, res) => {
  console.log("Hey this is delete request");
  res.send("Hello World delete!");
  res.download("./templates/index.html",{root:__dirname})
});


app.get("/download", (req, res) => {
  console.log("Hey this is Download request");
  res.download("./templates/index.html",{root:__dirname})
});

app.get("/index", (req, res) => {
  console.log("Hey its index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
