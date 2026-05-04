console.log("Hi There!");

let id = setInterval(() => {
    console.log("Apna College");
}, 2000);

console.log("Welcome to");
clearInterval(id); // to stop the setInterval, we can use clearInterval and pass the id returned by setInterval