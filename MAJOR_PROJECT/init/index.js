const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const normalizedListings = initData.data.map((listing) => ({
    ...listing,
    image: listing.image?.url ?? listing.image,
  }));
  await Listing.insertMany(normalizedListings);
  console.log("data was initialized");
};

initDB();