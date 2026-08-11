const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require('../schema.js');
const { isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");

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
router.get("/",wrapAsync(listingController.index));

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
router.get("/new",isLoggedIn,listingController.renderNewForm);

//Show Route
router.get("/:id",wrapAsync(listingController.showListing));

//Create Route
router.post("/", isLoggedIn, wrapAsync(listingController.createListing));

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

//Update Route
router.put("/:id",isLoggedIn,isOwner,express.urlencoded({extended:true}),wrapAsync(listingController.updateListing));

// Accept PATCH as well (some templates submit with ?_method=PATCH)
router.patch("/:id",isLoggedIn,isOwner,express.urlencoded({extended:true}),wrapAsync(listingController.updateListing));

//Delete Route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.deleteListing));

module.exports = router;