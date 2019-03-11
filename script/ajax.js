/******************************************************************************
* Author:
*   Jonathan Carlson
* Description:
*   This demonstrates how AJAX can be used to request a string of information
*   from a web page and how JSON is used to parse and make the information
*   displayable. Rather than request a simple JSON array and display it back, 
*   I chose to upload a more complicated custom 'array of objects' to my 
*   website to use as my target to decipher and display back. 
******************************************************************************/

"use strict"

/******************************************************************************
* myAJAX()  
* This function requests information from a website, and parses it using JSON. 
******************************************************************************/
function myAJAX() {
    
    // Set Variables
    var xhttp = new XMLHttpRequest(),
        site = document.getElementById("userinput").value,
        dad, mom, daughter1, daughter2, son1, son2, rawData;
    
    // Request Data
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            // Parse Data and display
            rawData = this.responseText;
            var jsonString = JSON.parse(rawData);
            document.write(jsonString.articles[0].title);
            
            //display(jsonString);
        }
    };

    // Website where the data is extracted from. 
    xhttp.open('GET', site, true);
    xhttp.send();
}

/******************************************************************************
* appendItem()  
* This function creates 'div' elements and fills them with string data. 
* Called by other functions.
******************************************************************************/
function appendItem(string) {
    
    // Set bullets and values
    var
        list = document.getElementById("outputone"), 
        bullet, topic;
    var heading = string.includes("name");
    
    bullet = document.createElement("div"),
    topic = document.createTextNode(string);

    bullet.appendChild(topic);
    list.appendChild(bullet);
}

/******************************************************************************
* display()  
* This function accepts parsed information and displays it to an HTML element
* using a special function tool I found online that iterates through objects.
* Called by another function.
******************************************************************************/
function display(jsonString) {
    
    // Set Display location
    var list = document.getElementById("outputone");
    for(var i = 0; i < jsonString.length; i++) {
        
        // Create a "li" list of each objects properties
        Object.keys(jsonString[i]).forEach(
            e => appendItem(`${e} : ${jsonString[i][e]}`));
    }
}