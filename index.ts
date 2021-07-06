var maxNum = 100;
for (let i=1;i<=maxNum;i++){
    printFizzBuzz(i);
}

function printFizzBuzz(i){
        //Create an empty string that can have Fizz and/or Buzz appended to it (or be changed to a number).
        let toPrint = "";
        if (i%3 == 0) {
            toPrint += "Fizz";
        }
        if (i%5 == 0) {
            toPrint += "Buzz";
        }
        if (toPrint==""){
            toPrint = i.toString();
        }
        console.log(toPrint);
}
