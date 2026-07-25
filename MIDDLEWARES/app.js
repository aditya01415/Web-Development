const express = require('express');
const app = express();
const ExpressError = require('./ExpressError'); 

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "12345") {
        next();
    }
    throw new ExpressError("ACCESS DENIED", 401);
};

app.get('/api', checkToken, (req, res) => {
    res.send('You have access to the API!');
});

app.use((req, res, next) => {
    console.log('Hi I am 1st middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Hi I am 2nd middleware');
    next();
});

app.use((req, res, next) => {
    console.log(req.method, req.hostname,req.path);
    next();
});

//logger middleware
app.use((req, res, next) => {
    req.time = Date.now();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

// app.use("/api", (req, res, next) => {
//    let {token} = req.query;
//    if(token === "12345"){
//        next();
//    }else{
//        res.send("You are not authorized");
//    }
// });

app.get('/', (req, res) => {
    res.send('Hello from the main route!');
});

app.get('/about', (req, res) => {
    res.send('Hello from the about route!');
});

app.get('/admin', (req, res) => {
    throw new ExpressError("You are not an admin", 403);
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});