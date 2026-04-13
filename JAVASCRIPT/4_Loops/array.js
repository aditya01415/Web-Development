let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

// nessted loop
let heores = [
    ["superman", "batman", "wonder woman"],
    ["spiderman", "ironman", "hulk"],
    ["thor", "captain america", "black widow"]
];

for(let i=0; i<heores.length; i++){
    console.log(`List #${i}:`);
    for(let j=0; j<heores[i].length; j++){
        console.log(i, j, heores[i][j]);
    }
}

// for of loop

for(let fruit of fruits){
    console.log(fruit);
}

for(let heroList of heores){
    console.log("Hero List:");
    for(let hero of heroList){
        console.log(hero);
    }
}