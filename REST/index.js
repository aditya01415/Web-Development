const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { randomUUID } = require('crypto');
const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({
        id: randomUUID(),
        username,
        content
    });
    res.redirect("/posts");
});

let posts = [
    {
        id: randomUUID(),
        username: "Adarsh",
        title: "My first post",
        content: "This is my first post on my blog"
    },
    {
        id: randomUUID(),
        username: "Adarsh",
        title: "My second post",
        content: "This is my second post on my blog"
    },
    {
        id: randomUUID(),
        username: "Adarsh",
        title: "My third post",
        content: "This is my third post on my blog"
    }
];


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});