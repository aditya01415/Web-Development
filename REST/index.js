const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
{
    username: "Adarsh",
    title: "My first post",
    content: "This is my first post on my blog"
},

{
    username: "Adarsh",
    title: "My second post",
    content: "This is my second post on my blog"
},
{
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