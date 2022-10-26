const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Courses Data stor var
const courses = require("./jsonData/CoursesCategoryData/coursesCategory.json");

app.get("/", (req, res) => {
  res.send("My server is Running ");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`My server is Running ${port}`);
});
