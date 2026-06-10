const express = require("express");
const app = express();
const port = 808;

app.use(express.urlencoded({extended : true}));

app.get("/register", (req, res) => {
    let {username, password} = req.query;
    res.send("Standard GET Response");
});
app.post("/register", (req, res) => {
    // console.log(req.body);
        let {username, password} = req.body;
    res.send("Standard POST Response");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});