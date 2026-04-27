function printTable(num){
    for(let i =1;i<=10;i++){
        console.log(num * i);
    }
}


function printTable2(num){
    for(let i =num;i<=10*num;i=i+num){
        console.log(i);
    }
}
printTable(5);
printTable2(74);