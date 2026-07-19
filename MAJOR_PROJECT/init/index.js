const mongoose = require('mongoose');
const data = require('./data.js');
const Listing = require('../Models/listing.js');

const MONGO_URI = 'mongodb://127.0.0.1:27017/wanderlust';

main()
    .then(() => {
        console.log("connected to database");
        return initDB();
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URI);
}

const initDB = async () => {
    await Listing.deleteMany({});
    console.log("deleted all listings");
    await Listing.insertMany(data.data.sampleListings);
    console.log("inserted sample data");
} 