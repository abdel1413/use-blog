const expres = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Blog = require("./models/Blogs");

const app = expres();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://abdel1413:Mahira2022@cluster0.zweoumq.mongodb.net/blog-user?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to db");
    app.listen(PORT, () => {
      console.log("You are listening to " + PORT);
    });
  })
  .catch((err) => console.error(err));

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new bloger",
    snippet: "that is my blog",
    body: "many more blogs to come",
  });

  blog
    .save()
    .then((data) => console.log(data))
    .catch((er) => console.error(er));
});
