const mongoose = require('mongoose');

main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount:{
        type : Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    }
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
});

book1
    .save()
    .then((res) => {
        console.log('Book saved:', res);
    })
    .catch((err) => {
        console.error('Error saving book:', err);
    });
