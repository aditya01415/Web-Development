const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Listing = require('./Models/listing.js');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');

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


app.get("/",(req,res)=>{
    res.send("root is working");
});

app.get("/listings",async (req,res)=>{
    let listings = await Listing.find();
    res.render("listing/index", { listings });
});

// app.get("/testListings",(req,res)=>{
//     let sampleListings = new Listing({
//         title: "Beautiful Beach House",
//         price: 250,
//         description: "A stunning beach house with breathtaking ocean views. Perfect for a relaxing getaway.",
//         location: "Malibu, California",
//         image: "",
//         country: "USA"
//     });
//     sampleListings.save().then(()=>{
//         console.log("listing saved");
//     });
//     res.send("test listing created");
// }); 

app.get("/listings/new",(req,res)=>{
    res.render("listing/new");
});

app.get("/listing/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        return res.status(404).send("Listing not found");
    }
    res.render("listing/show", { listing });
});

// Support plural route as well (some templates/links use /listings/:id)
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        return res.status(404).send("Listing not found");
    }
    res.render("listing/show", { listing });
});

//Create Route
app.post("/listings",wrapAsync(async (req,res,next)=>{
    if(!req.body.listing){
        throw new ExpressError("Listing not created",400);
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");

})
);

//Edit Route
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listing/edit",{listing});
})); 

//Update Route
app.put("/listings/:id",express.urlencoded({extended:true}),wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let {title,price,description,location,image,country} = req.body;
    await Listing.findByIdAndUpdate(id,{title,price,description,location,image,country});
    res.redirect(`/listings/${id}`);
}));

// Accept PATCH as well (some templates submit with ?_method=PATCH)
app.patch("/listings/:id",express.urlencoded({extended:true}),wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let {title,price,description,location,image,country} = req.body;
    await Listing.findByIdAndUpdate(id,{title,price,description,location,image,country});
    res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id",wrapAsync(   async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

app.get("/testListings",(req,res)=>{
    let sampleListings = new Listing({
        title: "Beautiful Beach House",
        price: 250,
        description: "A stunning beach house with breathtaking ocean views. Perfect for a relaxing getaway.",
        location: "Malibu, California",
        image: "",
        country: "USA"
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
    res.render("error.ejs");
    // res.send("Something went wrong"); 
});

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});