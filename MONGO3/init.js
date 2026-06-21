const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "user1",
        to: "user2",
        msg: "Hello, how are you?",
        created_at: new Date()
    },
    {
        from: "user2",
        to: "user1",
        msg: "I am fine, thank you! How about you?",
        created_at: new Date()
    },
    {
        from: "user1",
        to: "user2",
        msg: "I'm doing well too. Thanks for asking!",
        created_at: new Date()
    }
];

Chat.insertMany([
    ...allchats
])
