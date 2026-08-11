const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    let listings = await Listing.find();
    res.render("listing/index", { listings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new");
};

module.exports.showListing =async (req, res) => {
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
};

module.exports.createListing = async (req, res) => {
    const listingData = req.body.listing || req.body;
    const newListing = new Listing(listingData);
    newListing.owner = req.user._id;

    await newListing.save();
    req.flash("success", "New listing created successfully");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listing/edit", { listing });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let { title, price, description, location, image, country } = req.body;
    await Listing.findByIdAndUpdate(id, { title, price, description, location, image, country });
    req.flash("success", "Listing updated successfully");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully");
    res.redirect("/listings");
};
