// Data:

const postArr = [];

// Params Reads
let dynamicTitle = "";
let dynamicContent = "";

// Requires:

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const DB = require("mongodb");
require("dotenv").config();

// Creating MongoDB

mongoose.connect(process.env.DB_URI, () => console.log("Connected to DB"));

// SCHEMA:

const schema = new mongoose.Schema({
  title: String,
  content: String,
});

// Model:

const Post = mongoose.model("Post", schema);

// Usages:
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Initial ROOT get:
app.get("/", (req, res) => {
  Post.find({}, (err, postDoc) => {
    if (postDoc.length <= 0) {
      res.render("index", {
        postArr: [
          {
            title: "Uh Oh",
            content: "No Opinions yet. Head to '/compose' to begin!",
          },
        ],
      });
    } else {
      res.render("index", { postArr: postDoc });
    }
  });
});

// About GET:

app.get("/about", (req, res) => {
  res.render("about");
});
// Contact GET
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Compose GET
app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postContent,
  });
  post.save((err) => {
    err ? console.log(err) : res.redirect("/");
  });
});

// PARAMS POST INDIVIDUAL DYNAMIC:
// Create route for dynamic page: post
// Create param /:params

app.get("/posts", (req, res) => {
  res.render("posts", {
    dynamicTitle: dynamicTitle,
    dynamicContent: dynamicContent,
  });
});

app.get("/posts/:postId", (req, res) => {
  const requestedPost = req.params.postId;
  Post.findOne({ _id: requestedPost }, (err, post) => {
    res.render("posts", {
      dynamicTitle: post.title,
      dynamicContent: post.content,
    });
  });
});

// REMOVE PAGE
app.get("/remove", (req, res) => {
  Post.find({}, (err, postDoc) => {
    if (postDoc.length <= 0) {
      res.render("remove", {
        postArr: [{ title: "Nothing to delete..." }],
      });
    } else {
      res.render("remove", { postArr: postDoc });
    }
  });
});

app.post("/remove", (req, res) => {
  let wantedPost = req.body.submitBtn;
  console.log(wantedPost);
  Post.findOneAndDelete({ title: wantedPost }, (err, res) => {
    err ? console.log(err) : null;
  });
  res.redirect("/remove");
});

// Server:

app.listen(process.env.PORT || 3000, () => console.log("Server Running"));
