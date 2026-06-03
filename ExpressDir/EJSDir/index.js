const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home.ejs");
});
app.get("/ig/:username", (req, res) => {
    let {username } = req.params;
    res.render("instagram.ejs", { username });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});