let todo = [];
let req = prompt("Please enter your request:");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("**********");
        for(let i = 0; i < todo.length; i++){
            console.log(i + ": " + todo[i]);
        }
        console.log("**********");
    }
    else if(req == "add"){
        let newTodo = prompt("Enter new task:");
        todo.push(newTodo);
        console.log("Task added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter index of task to delete:");
        todo.splice(idx, 1);
        console.log("Task deleted");
    }
    req = prompt("Please enter your request:");
}

console.log(req);