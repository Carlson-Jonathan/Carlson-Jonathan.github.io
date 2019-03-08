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
* show that I can also do this using JavaScript.
******************************************************************************/
document.getElementById("inputText").onfocus = function(){ focColor("inputText") };
document.getElementById("inputText").onblur = function(){ blurColor("inputText") };
document.getElementById("decipher").onfocus = function(){ focColor("decipher") };
document.getElementById("decipher").onblur = function(){ blurColor("decipher") };

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

function focColor(a) { document.getElementById(a).style.backgroundColor = "#ffffcc"; }

function blurColor(a) { document.getElementById(a).style.backgroundColor = 
    "white"; }


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
* displayAPI()
* This function uses jQuery to retrive API information from 'Tech Crunch',
* interprets it, and places it in the correct spots on the HTML page.
******************************************************************************/
var item = ['One', 'Two', 'Three'];
var req = new Request(url);
var url = 
'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ed3de96c7f45ba924e447cde09d6a4';

function displayAPI(title, description, link, picture, element) {
    document.getElementById("storyDesc" + element).innerHTML = title;
    document.getElementById("storyDesc" + element).innerHTML = description;
    document.getElementById("storyPic" + element).src = picture;
    document.getElementById("storyLink" + element).href = link;
}

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