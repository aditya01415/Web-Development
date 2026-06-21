const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from: "user1",
    to: "user2",
    msg: "Hello, how are you?",
    created_at: new Date()
});

chat1.save().then(()=>{
    console.log("chat saved");
}); 

app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats})
});

app.get("/",(req,res)=>{
    res.send("root is working");
});
//New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//Create Route
app.post("/chats",express.urlencoded({extended:true}),async (req,res)=>{
    let {from,to,msg} = req.body;
    let chat = new Chat({
        from,
        to,
        msg,
        created_at: new Date()
    });
    await chat.save();
    res.redirect("/chats");
});    

// edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

// update route
app.put("/chats/:id",express.urlencoded({extended:true}),async (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    await Chat.findByIdAndUpdate(id,{msg});
    res.redirect("/chats");
});

//delete route
app.delete("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});


app.listen(8080,()=>{
    console.log("server is running on port 8080");
});