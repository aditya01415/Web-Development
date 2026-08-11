const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
// const Listing = require("./models/listing.js");
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
// const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
// const { listingSchema, reviewSchema } = require('./schema.js');
const Review = require("./models/review.js");  
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js');
const user = require('./routes/user.js');

main().then(()=>console.log("connected to database")).catch(err=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust'); 
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    },
};

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});

app.get("/demouser", async (req, res) => {
    try {
        let fakeuser = new User({ email: "demo@example.com", username: "delta-student" });
        await User.register(fakeuser, "deltastudent");
        res.send("Demo user created");
    } catch (err) {
        console.log(err);
        res.status(500).send("Could not create demo user");
    }
});

app.use('/listings',listings);
app.use('/listings/:id/reviews',reviews);
app.use('/',user);
app.use('/users',user);


app.get("/testListings",(req,res)=>{
    let sampleListings = new Listing({
        title: "My New Villa",
        price: 1250,
        description: "By the Beach",
        location: "Calangute, Goa",
        image: "",
        country: "India"
    });
    sampleListings.save().then(()=>{
        console.log("listing saved");
    });
    res.send("test listing created");
}); 

app.all(/.*/,(req,res,next)=>{
    next(new ExpressError("Page Not Found",404));
});

app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong"} = err;
    res.status(statusCode).render("error", { err });
    // res.send("Something went wrong"); 
});

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});