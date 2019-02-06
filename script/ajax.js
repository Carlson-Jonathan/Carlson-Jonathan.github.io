/******************************************************************************
* Author:
*   Jonathan Carlson
* Description:
*   This page of scripts demonstrates some various techniquest using the 
*   Document Object Model or "DOM". Additionally, this does all kinds of other
*   neat sophisticated things like:
*      1.) Sorts the fluency topic by column catagories (user defined)
*      2.) Limits each column to 1 of each fluency catagory (no duplicates)
*      3.) Alphabetizes the fluency catagories (using a W3Schools function)
*      4.) Removes only the user defined fluency catagories.
*      5.) Optionally saves/loads to local storage. Loads storage on page load.
******************************************************************************/

"use strict"

/******************************************************************************
* appendItem()  
* This function adds a selected topic from the drop-down to the column selected
* by the radio button. Executed by button click.
******************************************************************************/
function loadJoke() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("joke").innerHTML = this.responseText;
        }
    };

    xhttp.open('GET', '../other/ajax.json', true);
    xhttp.setRequestHeader('Accept', 'text/plain');
    xhttp.setRequestHeader('User-Agent', 'my email');

    xhttp.send();
}
