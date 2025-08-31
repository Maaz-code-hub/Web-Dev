// CRUD Operations
use("crudDb");

db.createCollection("Courses");


// C-Create
db.Courses.insertOne({
  Name: "Harry's Py free course",
  Price: 0,
  Assisnment: 12,
  Projects: 45,
});

db.Courses.insertMany([
  {
    Name: "Harry's Web dev free course",
    Price: 0,
    Assignment: 12,
    Projects: 45,
  },
  {
    Name: "Intro to Python Programming",
    Price: 47,
    Assignment: 8,
    Projects: 20,
  },
  {
    Name: "Mastering JavaScript in 30 Days",
    Price: 94,
    Assignment: 15,
    Projects: 35,
  },
  {
    Name: "Fullstack Development Bootcamp",
    Price: 194,
    Assignment: 20,
    Projects: 50,
  },
  {
    Name: "Data Science with R",
    Price: 129,
    Assignment: 10,
    Projects: 25,
  },
  {
    Name: "Android App Development",
    Price: 199,
    Assignment: 14,
    Projects: 30,
  },
  {
    Name: "React Native Crash Course",
    Price: 0,
    Assignment: 9,
    Projects: 18,
  },
  {
    Name: "UI/UX Design Fundamentals",
    Price: 49,
    Assignment: 6,
    Projects: 12,
  },
  {
    Name: "Machine Learning A-Z",
    Price: 599,
    Assignment: 18,
    Projects: 40,
  },
  {
    Name: "Ethical Hacking Beginner Course",
    Price: 99,
    Assignment: 11,
    Projects: 22,
  },
]);


// R-Read
// let a = db.Courses.find({Price:0})
let b = db.Courses.findOne({Price:0})
console.log(b)

// U-Update

db.Courses.updateOne({Price:0},{$set:{Price:100}})
db.Courses.updateMany({Price:0},{$set:{Price:100}})


// D-Delete
db.Courses.deleteOne({Price:100})
db.Courses.deleteMany({Price:100})