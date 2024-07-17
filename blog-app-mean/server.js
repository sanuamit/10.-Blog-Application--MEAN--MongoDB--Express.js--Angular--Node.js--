const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");

const app = express();

mongoose.connect("mongodb://localhost:27017/blog-app");

app.use(bodyParser.json());
app.use("/api/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
