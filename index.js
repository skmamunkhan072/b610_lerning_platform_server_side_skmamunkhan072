const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Courses Data stor var
const courses = require("./jsonData/CoursesCategoryData/coursesCategory.json");
const coursesdetails = require("./jsonData/CoursesCategoryData/CategoryDitails.json");

app.get("/", (req, res) => {
  res.send("My server is Running ");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/pricing/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const price = courses.find((prices) => prices.coursesId === id);
  res.send(price);
});
app.get("/coursesdetails/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const coursesdetail = coursesdetails.filter(
    (detail) => detail.categoryId === id
  );
  console.log(id);
  res.send(coursesdetail);
});

app.listen(port, () => {
  console.log(`My server is Running ${port}`);
});
