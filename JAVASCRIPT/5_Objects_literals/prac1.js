const post = {
    username : "@ajitkumarsaini",
    content : "This is my first post",
    likes : 100,
    reposts : 29,
    tags : ["#firstpost", "#javascript", "#coding"]
}
console.log(post["username"]); // This is called dot notation, it allows us to access properties using the dot operator.
console.log(post.content);
console.log(post.likes);
console.log(post.reposts);
console.log(post.tags);

let prop = "reposts";
console.log(post[prop]); // This is called bracket notation, it allows us to access properties using variables.