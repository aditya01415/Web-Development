const express = require('express');
const app = express();

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

app.use("/api", (req, res, next) => {
   let {token} = req.query;
   if(token === "12345"){
       next();
   }else{
       res.send("You are not authorized");
   }
});

app.get('/', (req, res) => {
    res.send('Hello from the main route!');
});

app.get('/about', (req, res) => {
    res.send('Hello from the about route!');
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});