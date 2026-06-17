const mongoose = require('mongoose');

main().then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

const User = mongoose.model('User', userSchema);

// const user1 = new User({ name: 'Alice', age: 30, email: 'alice@example.com' });

// User.find({})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error('Error fetching users:', err);
//     });
User.findOneAndDelete({ name: 'Alice' }).then((res) => {
    console.log('User deleted:', res);
}).catch((err) => {
    console.error('Error deleting user:', err);
}); 

User.findByIdAndDelete('64b8c9e5f1d2c8a1b2c3d4e').then((res) => {
    console.log('User deleted:', res);
}).catch((err) => {
    console.error('Error deleting user:', err);
});

User.deleteMany({ age: { $gt: 30 } }).then((res) => {
    console.log('Users deleted:', res);
}).catch((err) => {
    console.error('Error deleting users:', err);
});

User.deleteOne({ name:'Alice'}).then((res) => {
    console.log('User deleted:', res);
}).catch((err) => {
    console.error('Error deleting user:', err);
});

// User.findOneAndUpdate({ name: 'Alice' }, { age: 32 }, { new: true })
//     .then((res) => {
//         console.log('User updated:', res);
//     })
//     .catch((err) => {
//         console.error('Error updating user:', err);
//     });

// User.updateMany({ age: { $gt: 30 } }, { $set: { status: 'Senior' } })
//     .then((res) => {
//         console.log('Users updated:', res);
//     })
//     .catch((err) => {
//         console.error('Error updating users:', err);
//     });

// User.updateOne({ name: 'Alice' }, { age: 31 })
//     .then((res) => {
//         console.log('User updated:', res);
//     })
//     .catch((err) => {
//         console.error('Error updating user:', err);
//     });

    // User.findmany({ age: { $gt: 30 } })
    // .then((res) => {
    //     console.log('Users older than 30:', res);
    // })
    // .catch((err) => {
    //     console.error('Error fetching users:', err);
    // }); 

    // User.findOne({ name: 'Alice' })
    // .then((res) => {
    //     console.log('User found:', res);
    // })
    // .catch((err) => {
    //     console.error('Error fetching user:', err);
    // });

    // User.findById('64b8c9e5f1d2c8a1b2c3d4e')
    // .then((res) => {
    //     console.log('User found:', res);
    // })
    // .catch((err) => {
    //     console.error('Error fetching user by ID:', err);
    // });

    // User.insertMany([
    // { name: 'Bob', age: 25, email: 'bob@gmail.com' },
    // { name: 'Charlie', age: 35, email: 'charlie@gmail.com'},
    // { name:'David', age: 28, email: 'david@gmail.com'},
    // ]).then((res)=> {
    //     console.log('Users inserted:', res);
    // });


