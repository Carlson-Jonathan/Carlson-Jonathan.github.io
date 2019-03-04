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
* Changes background color of text area and input boxes. Normally I would do 
* this in the HTML element tags, but this assignment criteria states I need to
* show that I can also do this using JavaScript.
******************************************************************************/
document.getElementById("input").onfocus = function(){ focColor("input") };
document.getElementById("input").onblur = function(){ blurColor("input") };
document.getElementById("encryption").onfocus = function(){ 
    focColor("encryption") };
document.getElementById("encryption").onblur = function(){ 
    blurColor("encryption") };
document.getElementById("decipher").onfocus = function(){ focColor("decipher") };
document.getElementById("decipher").onblur = function(){ blurColor("decipher") };
document.getElementById("decoded").onfocus = function(){ focColor("decoded") };
document.getElementById("decoded").onblur = function(){ blurColor("decoded") };

document.getElementById("passwordleft").onfocus = function(){
    focColor("passwordleft") };
document.getElementById("passwordleft").onblur = function(){
    blurColor("passwordleft") };
document.getElementById("passwordright").onfocus = function(){
    focColor("passwordright") };
document.getElementById("passwordright").onblur = function(){
    blurColor("passwordright") };

/******************************************************************************
* On-Click/Onliad executions that I would normally code in the HTML elements.
******************************************************************************/
document.getElementById("encrypt").onclick = function(){ displayText() };
document.getElementById("decrypt").onclick = function(){ decryptText() };

function focColor(a) { document.getElementById(a).style.backgroundColor = "#ffffcc"; }

function blurColor(a) { document.getElementById(a).style.backgroundColor = 
    "white"; }



document.getElementById("offset").style.top = "150px";
