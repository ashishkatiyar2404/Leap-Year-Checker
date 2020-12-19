var readlineSync = require('readline-sync');
const chalk = require('chalk'); 


var userName  = readlineSync.question("Please Tell Me your name?\n");

console.log(chalk.white.bgRed.bold("Welcome "+ userName+" to the leap year quiz/n"));

var userDOB = readlineSync.question("Tell me your DOB in YYYY/MM/DD format\n");

var year = userDOB.split("/");


function checkleapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) ||
            (year % 400 == 0)
}


if( 1920 <= year[0] <= 2020 && (1<= year[1] <= 12) && (1<= year[2] <= 31) ) {
        if(year[0].length == 4) {
                if(checkleapYear(year[0])? "Leap Year" : "Not A leap Year" == "Leap Year") {
                console.log(chalk.white.bgRed.bold("Congrats "+ userName+ " You Born In leap year. You Can Share this on Social Media. ;-)"));
            } else {
                console.log(chalk.green("You born in Non Leap Year"));
            }
    }
    else {
        console.log("Error !!! Write DOB in given format.");
    }
}
else {
        console.log("Error !!! Write DOB in given format.");
    }




