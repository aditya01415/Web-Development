let str = ["Hello", "World", "JavaScript", "Functions"];

function concatString(arr){
    let ans = "";
    for(let i =0;i<arr.length;i++){
        ans += arr[i];
    }
    return ans;
}

console.log(concatString(str));