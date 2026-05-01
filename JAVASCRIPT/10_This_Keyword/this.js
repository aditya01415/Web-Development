const student = {
    name: "ajit",
    age: 20,
    eng : 80,
    phy:89,
    math:87,
    getAvg(){
        let avg = (this.eng + this.phy + this.math) / 3;
        console.log(avg);
    }
}

student.getAvg();