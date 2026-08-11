const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

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
  const ownerUser = await User.findOne({});

  if (!ownerUser) {
    console.log("No users found. Please register at least one user before seeding listings.");
    return;
  }

  initData.data = initData.data.map((obj) => ({
    ...obj,
    image: typeof obj.image === "object" && obj.image !== null ? obj.image.url : obj.image,
    owner: ownerUser._id,
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();