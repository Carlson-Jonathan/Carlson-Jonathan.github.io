/*****************************************************************************
* Author: 
*     Jonathan Carlson
*
* Program Description:
*     This code demonstrates another way to execute JavaScript events using JS
*     code rather than insertions in the HTML elements. This could be very
*     useful in circumstances where you would need to swap out a page of 
*     JavaScript or even with versioning but none of that necessarily applies
*     to this assignment. 
******************************************************************************/

"use strict"

/******************************************************************************
* CSS style modifier functions
* Changes background color of text area and input boxes. Normally I would do 
* this in the HTML element tags, but this assignment criteria states I need to
* show that I can also do this using JavaScript. I will probably clean this up
* later by wrapping it all into a single function... maybe.
******************************************************************************/
document.getElementById("inputText").onfocus = function(){ focColor("inputText") };
document.getElementById("inputText").onblur = function(){ blurColor("inputText") };
document.getElementById("decipher").onfocus = function(){ focColor("decipher") };
document.getElementById("decipher").onblur = function(){ blurColor("decipher") };
document.getElementById("encryption").onfocus = function(){ focColor("encryption") };
document.getElementById("encryption").onblur = function(){ blurColor("encryption") };

document.getElementById("passwordleft").onfocus = function(){
    focColor("passwordleft") };
document.getElementById("passwordleft").onblur = function(){
    blurColor("passwordleft") };
document.getElementById("passwordright").onfocus = function(){
    focColor("passwordright") };
document.getElementById("passwordright").onblur = function(){
    blurColor("passwordright") };

/******************************************************************************
* On-Click/Onload 
* executions that I would normally code in the HTML elements.
******************************************************************************/
document.getElementById("encrypt").onclick = function(){ displayText() };
document.getElementById("decrypt").onclick = function(){ decryptText() };

var elements = ["inputText", "decipher", "passwordleft", "passwordright",
               "decoded", "encryption"];

function anticheckbox() {
    for(var i = 0; i < elements.length; i++)
        blurColor(elements[i]);
}

function focColor(a) { 
    document.getElementById(a).style.backgroundColor = "#ffffcc";
    document.getElementById(a).style.color = "black";
}

function blurColor(a) { 
    var ele = document.getElementById(a);
    ele.style.backgroundColor = "white"; 
    if(document.getElementById("antiSF").checked == true)
        document.getElementById(a).style.color = "white";
    else
        document.getElementById(a).style.color = "black";
}

/******************************************************************************
* CSS Modifying functions
* Here are some JS functions that modify CSS properties onClick or onWhatever.
* triangleRight() and triangleLeft() simple animate the triangles in the 
* page heading to move opposite directions. Activated in the body element tag.
* Yes, I know these two functions should be combined. Feeling a little tired
* though.
******************************************************************************/
function triangleRight(element) {
  
    var elem = document.getElementById(element);   
    var pos = 135;
    var id = setInterval(frame, 100);
    var opacity = .5;
  
    function frame() {
        if (pos == 175) {
            pos = 135;
            opacity = .5;
        } else {
            pos++; 
            opacity -= .01875;
            elem.style.left = pos + "px"; 
            elem.style.opacity = opacity;
        }
    }
}

function triangleLeft(element) {
  
    var elem = document.getElementById(element);   
    var pos = -172;
    var id = setInterval(frame, 100);
    var opacity = .5;
  
    function frame() {
        if (pos == -212) {
            opacity = .5;
            pos = -172;
        } else {
            pos--; 
            opacity -= .01875;
            elem.style.left = pos + "px"; 
            elem.style.opacity = opacity;
        }
    }
}

/******************************************************************************
* copyToClipboard(elementID)
* This function copies the innerHTML value of the element with the parameter
* ID to the clipboard so it can be pasted elsewhere.
******************************************************************************/
function copyToClipboard(element) {
  var aux = document.createElement('input');
  aux.setAttribute("value", document.getElementById(element).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

/******************************************************************************
* clearText(elementID)
* This function removes the text from the text area.
******************************************************************************/
function clearText(element) {
    document.getElementById(element).value = "";
}

/******************************************************************************
* myAjax() & displayAPI()
* These functions use XMLHttp requests to retrive API information from 
* 'Tech Crunch', interpret it, and places it in the correct spots on the HTML 
* page. Originally I used jQuery but had to use raw code for an assignment.
******************************************************************************/
function myAJAX() {
    
    // Set Variables
    var item = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
    var rawData;
    var xhttp = new XMLHttpRequest();
    var site = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ed3de96c7f45ba924e447cde09d6a4';
    
    // Request Data
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            // Parse Data and display
            rawData = this.responseText;
            var jsonstring = JSON.parse(rawData);
        }
        
        // Extract information from 3 different articles then display.
        for(var i = 0; i < 6; i++) {
                displayAPI(
                    jsonstring.articles[i].title,
                    jsonstring.articles[i].description,
                    jsonstring.articles[i].url,
                    jsonstring.articles[i].urlToImage,
                    item[i]
                    )
            }
    };

    // Website where the data is extracted from. 
    xhttp.open('GET', site, true);
    xhttp.send();
}
myAJAX();

function displayAPI(title, description, link, picture, element) {
    document.getElementById("storyTitle" + element).innerHTML = title;
    document.getElementById("storyDesc" + element).innerHTML = description;
    document.getElementById("storyPic" + element).src = picture;
    document.getElementById("storyLink" + element).href = link;
}

/******************************************************************************
* Here is the easier jQuery way to do it. I had to use the raw method above
* because teacher told me to. 

$(document).ready(function() {
    function news() {
        $.getJSON(url, function(data) {
            console.log(data);
            
            // Run the displayAPI function 3 times to place 3 clickbait stories.
            for(var i = 0; i < 3; i++) {
                displayAPI(
                    data.articles[i].title,
                    data.articles[i].description,
                    data.articles[i].url,
                    data.articles[i].urlToImage,
                    item[i]
                    )
            }
        })
    }
    news();
})
******************************************************************************/

/******************************************************************************
* loadPasswords()
* This function loads any previously saved passwords from the local storage 
* into the password fields. 
******************************************************************************/
function loadPasswords() {
    // Retrieve passwords from local storage
    var loadPassleft = localStorage.getItem("encryptpas");
    var loadPassRight = localStorage.getItem("decipherpas");
        
    // Set the password input fields with the retrived passwords
    document.getElementById("passwordleft").value = loadPassleft;
    document.getElementById("passwordright").value = loadPassRight;
}

/******************************************************************************
* savePasswords()
* This function saves the password strings in the password fields into local
* storage. This function is triggered on unload (when the window closes).
******************************************************************************/
function savePasswords() {
    // Pull passwords from input elements
    var encryptPass = document.getElementById("passwordleft").value;
    var decipherPass = document.getElementById("passwordright").value;    
    
    // Save the passwords to local storage
    localStorage.setItem("encryptpas", encryptPass);
    localStorage.setItem("decipherpas", decipherPass);
}

//Execute on page load
loadPasswords();