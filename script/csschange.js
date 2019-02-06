/****************************************************************************
* Author:
*   Jonathan Carlson
* Description:
*   This is additional .js script for the DOM page. The purpose of this code
*   is to demonstrate how CSS classes can be manipulated using Javascript. 
*   The first 3 functions show basic manipulation of individual classes, 
*   changing a single or multiple elements on the page. The 4th button is a 
*   bit more of a dramatic change, swapping out the entire CSS sheet.
*****************************************************************************/

"use strict"

/****************************************************************************
* changeHeading() 
* This function demonstrates a single change, which is to the background of
* the h1 element. Executed on button click
****************************************************************************/
function changeHeading() {
    var x = document.getElementsByClassName("heading");
    x[0].style = "background-color: blue";
}

/****************************************************************************
* changeh2() 
* This function demonstrates multiple changes. All h2 elements defined with 
* the "fontstyle" class will have their fonts changed. I imported Google
* fonts to select something that seemed a bit scripty so the difference would
* be apparent. Executed on button click.
****************************************************************************/
function changeh2() {
    var x = document.getElementsByClassName("fontstyle");
    for(var i = 0; i < x.length; i++) {
        x[i].style = "font-family: 'Tangerine', serif";
    }
}

/****************************************************************************
* align() 
* This function changes the float CSS properties of all buttons to "right". 
****************************************************************************/
function align() {
    var x = document.getElementsByClassName("lineup");
    for(var i = 0; i < x.length; i++) {
        x[i].style = "float: right";
    }    
    
}