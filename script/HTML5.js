/*****************************************************************************
* This page demonstrates use of HTML 5 tags (audio and video) as well as 
* the canvas tool. It is becomming increasingly more difficult to come up with
* creative examples of how to use these topics.
* Author:
*     Jonathan Carlson
* Course: 
*     CIT 261 section ? Online
* Instructor:
*     Brother Eddington
*****************************************************************************/

"use strict"
var myVideo = document.getElementById("video1"); 

/*****************************************************************************
* playPause()
* Toggles the video to play or pause depending on its current state.
*****************************************************************************/
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

/*****************************************************************************
* createCanvas(string) 
* This is the master function that houses all other functions to create an 
* American flag using HTML5 Canvas. Calling this function will draw a flag in
* any HTML element with the ID as the parameter.
*****************************************************************************/
function createCanvas(elementID) {
    var canvas = document.getElementById(elementID);
    var ctx = canvas.getContext("2d");
    var c = document.getElementById(elementID);
    var ctx = c.getContext("2d");
    var x = 7, y = 7;

    /*************************************************************************
    * redline(num, num, num, num)
    * This function defines a Canvas red line with the parameters as the 
    * points.
    *************************************************************************/
    function redLine(a,b,x,y) {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.lineWidth = 15;
        ctx.lineCap = "butt";
        ctx.moveTo(a, b);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
    /*************************************************************************
    * drawSquare()
    * This function defines a square with the parameters to indicate the 
    * color and corner positions.
    *************************************************************************/
    function drawSquare(color, a, b, x, y) {
        ctx.fillStyle = color;
        ctx.fillRect(a,b,x,y);
    }

    /*************************************************************************
    * drawStar()
    * This function defines a star with the parameters to indicate the color
    * and the top left corner position.
    *************************************************************************/
    function drawStar(color, x, y) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 7, 7);
    }
    

    /*************************************************************************
    * drawStripes()
    * This function draws multiple red stripes using a for loop.
    *************************************************************************/
    function drawStripes() {
        for (var i = 0; i < 7; i++) {
            redLine(0,x,350,y);
            x += 30;
            y += 30;
        }
    }

    /*************************************************************************
    * drawStars()
    * This function draws multiple white squares the represent the stars.
    *************************************************************************/
    function drawStars() {

        // Stars Layer 1
        var x = 11, y = 11;
        for(var i = 0; i < 6; i++) {
            for(var j = 0; j < 5; j++) {
                drawStar("white",x,y);
                y += 19;
            }
        x += 25;
        y = 11;    
        }

        // Stars Layer 2
        x = 24, y = 21;
        for(var i = 0; i < 5; i++) {
            for(var j = 0; j < 4; j++) {
                drawStar("white",x,y);
                y += 19;
            }
        x += 25;
        y = 21;    
        }    
    }

    drawStripes();
    drawSquare("blue", 0, 0, 156, 105);
    drawStars();
}

// Call the master function 3 times to create 3 flags!
createCanvas("flagone");
createCanvas("flagtwo");
createCanvas("flagthree");