var maxNum:number;
maxNum = getUserNumber();





function getUserNumber(){
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Input max number: ', (answer:string) => {
        maxNum = Number(answer);
        for (let i =1;i<=maxNum;i++){
            printFizzBuzz(i);
        }
        rl.close();
      });
    return maxNum;
}



function printFizzBuzz(i:number){
    //Create an empty string that can have Fizz and/or Buzz (or any other words) appended to it (or be changed to a number).
    let toPrint: string = "";
    if (i%3 == 0) {
        toPrint += "Fizz";
    }
    if (i%13 == 0){
        toPrint += "Fezz";
    }
    if (i%5 == 0) {
        toPrint += "Buzz";
    }
    if (i%7 == 0){
        toPrint += "Bang";
    }
    if (i%11 == 0){
        if (i%13==0){
            toPrint = "FezzBong";
        }
        else 
        {toPrint = "Bong";}
    }
    if (toPrint==""){
        toPrint = i.toString();
    }
    else if  (i%17 == 0){
            toPrint = reverseWords(toPrint);
    }
    
    console.log(toPrint);
}

//Takes a string made up of words starting with F or B (capitalised) with other letters lower case and returns the text with words in the opposite order
//E.g "FizzFezzBuzz"--> "BuzzFezzFizz"
function reverseWords(toReverse: string){
    let reversed = "";
    let i = 0;
    while (i<toReverse.length) {
        let word = getWordAt(toReverse,i);
        reversed = word + reversed;
        i++;
        while (i<toReverse.length && ((toReverse.charAt(i) != "F") && (toReverse.charAt(i) != "B"))){
            i++;
        }
    }
    return reversed;
}

//Takes a string and a start index (which should be the start of a word) and returns the following characters until either the next "F" or "B" or the end of the string
function getWordAt(text: string, startIndex : number){
    let word = text.charAt(startIndex);
    let i = startIndex+1;
    while (i<text.length && ((text.charAt(i) != "F") && (text.charAt(i) != "B"))) {
        word += text.charAt(i);
        i++;
    }
    return word;
}
