/*
This function accepts a user input and then attempts to match it by using a divide and
conquer technique as it if were attempting to guess the number
*/

"use strict"
function guessNumber() {

    //var minRange = 0;
    //var maxRange = 1000;
    //var guess = maxRange / 2;
   
/*    while (guess != num) {
        if(guess < num) {
            minRange = maxRange / 2,
            guess = ((minRange + maxRange) / 2); 
        } 
        else {
            maxRange = maxRange / 2,
            guess = maxRange / 2;    
        }
    }
  */  
    var num = 100;
    document.getElementById('guess');
    return num / 2;
}

guessNumber(400);

