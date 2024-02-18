require("dotenv").config()

const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${port}`);
});
