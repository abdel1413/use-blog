const expres = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Blog = require("./models/Blogs");
const os = require("os");

console.log("os", os.release());

const app = expres();
const PORT = process.env.PORT || 3000;
// "mongodb+srv://abdel1413:Mahira2022@cluster0.zweoumq.mongodb.net/blog-user?retryWrites=true&w=majority"
mongoose
  .connect(process.env.USER_URI)
  .then(() => {
    console.log("Successfully connected to db");
    app.listen(PORT, () => {
      console.log("You are listening to " + PORT);
    });
  })
  .catch((err) => console.error(err));

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new bloger2",
    snippet: "that is my blog",
    body: "many more blogs to come",
  });
  //save the intance using .save()
  blog
    .save()
    .then((data) => res.json(data))
    .catch((er) => console.error(er));
});

//send all objects to all-blogs endpoint using
//find() on the name of model
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.json(result))
    .catch((e) => console.log(e));
});
//findById() to retrieve a single doc
app.get("/single-blog", (req, res) => {
  Blog.findById("65610fa01cc4a08072bfbd98")
    .then((result) => {
      res.json(result);
    })
    .catch((e) => console.error(e));
});
