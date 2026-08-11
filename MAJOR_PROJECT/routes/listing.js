const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require('../schema.js');
const { isLoggedIn, isOwner } = require("../middleware.js");

const validateListing = (req,res,next)=>{
    const {error} = listingSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el=>el.message).join(",");
        throw new ExpressError(msg,400);
    }else{
        next();
    }
};

//Index Route
router.get("/",async (req,res)=>{
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
// New Route
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listing/new");
});

//Show Route
router.get("/:id",wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listing/show", { listing });
}));

//Create Route
router.post("/", isLoggedIn, wrapAsync(async (req, res) => {
    const listingData = req.body.listing || req.body;
    const newListing = new Listing(listingData);
    newListing.owner = req.user._id;

    await newListing.save();
    req.flash("success", "New listing created successfully");
    res.redirect("/listings");
}));

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(async (req,res)=>{

    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listing/edit",{listing});
})); 

//Update Route
router.put("/:id",isLoggedIn,isOwner,express.urlencoded({extended:true}),wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let {title,price,description,location,image,country} = req.body;
    await Listing.findByIdAndUpdate(id,{title,price,description,location,image,country});
    req.flash("success", "Listing updated successfully");
    res.redirect(`/listings/${id}`);
}));

// Accept PATCH as well (some templates submit with ?_method=PATCH)
router.patch("/:id",isLoggedIn,isOwner,express.urlencoded({extended:true}),wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let {title,price,description,location,image,country} = req.body;
    await Listing.findByIdAndUpdate(id,{title,price,description,location,image,country});
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(   async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully");
    res.redirect("/listings");
}));

module.exports = router;