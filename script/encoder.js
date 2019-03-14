/*****************************************************************************
* Author: 
*     Jonathan Carlson
*
* Program Description:
*     This is a simple text encryption program that uses a basis subsitute
*     cipher. This was made for academic purposes only and should not be
*     used for actual security. 
******************************************************************************/

"use strict"

/******************************************************************************
* Variables used to scramble letters and symbols. Here is where you can find                   
* the key to deciphering a scrambled text.           
******************************************************************************/
    
var alphaScrambler = {a:1,b:"q",c:"a",d:"z",e:2,f:"w",g:"s",h:"x",i:"3",
                      j:"e",k:"d",l:"c",m:4,n:"r",o:"f",p:"v",q:5,r:"t",
                      s:"g",t:"b",u:6,v:"y",w:"h",x:"n",y:7,z:"u"}

var alphaBuffer = "0123456789";
var alphaDeScrambler = {x1:"a",q:"b",a:"c",z:"d",x2:"e",w:"f",s:"g",x:"h",
                        x3:"i",e:"j",d:"k",c:"l",x4:"m",r:"n",f:"o",v:"p",
                        x5:"q",t:"r",g:"s",b:"t",x6:"u",y:"v",h:"w",n:"x",
                        x7:"y",u:"z"}

var grammer = ['1','2','3','4','5','6','7','8','9','0'," ","?","!",".",",",
               ";",":","/","[","]","(",")","-","'","\"","{","}","_"];

var grammerScrambler = ["j","m","8","i","k",",","9","o","l",".","p","0",
                        ";","!","@","#","$","%","}","&","*","(","`","+",
                        "=","_","\\","-"];

var passwordSelector = ["~","|","{","^"];

var allAlpha = "abcdefghijklmnopqrstuvwxyz";
allAlpha = allAlpha.split("");

var randomList = grammer.concat(allAlpha);
var passPoint1;
var passPoint2;

/******************************************************************************    
* Encrypting Functions
* I know that there are much simpler ways to encrypt text but I wanted to get a 
* more hands-on experience by applying my own personalized cipher.
******************************************************************************/    

function passwordPointer() {
    var random = Math.floor(Math.random() * passwordSelector.length);
    var passPoint = passwordSelector[random];
    return passPoint;
}

function displayText() {
    
    var password = document.getElementById("passwordleft").value;
    var passLen = password.length;
    var text = passLen + document.getElementById("inputText").value + password;
    text = text.toLowerCase();
    text = text.split("");
    var symbols;
    
    for (var i in text) {
        symbols = grammer.indexOf(text[i]);
        if (symbols > -1) {  
            text[i] = grammerScrambler[symbols]; 
        } else {
            text[i] = alphaScrambler[text[i]];   
        }
    }
    if (password) {
        passPoint1 = passwordPointer();
        text.splice(text.length / 6 ,0,passPoint1)
        passPoint2 = passwordPointer();
        text.splice(passLen,0,passPoint2)
    }
    var random;
    for (i = 0; i < text.length; i += 2) {
        random = Math.floor(Math.random() * randomList.length); 
        text.splice(i,0,randomList[random]);
    }
    text = text.reverse();
    text = text.join("");            
    document.getElementById("encryption").innerHTML = text;
    document.getElementById("encryption").focus();
}

/******************************************************************************    
* Deciphering Functions 
******************************************************************************/    

function sliceEven(input) {
    var text = [];
    for (var i = 0; i < input.length; i += 2) {
        text += input.slice(i,(i + 1));
    }		
    return text;
}

function alphaConverter(text) {
    var alphas;
    var symbols;
    for (var i in text) {
        alphas = alphaBuffer.indexOf(text[i]);
        symbols = grammerScrambler.indexOf(text[i]);
        if (symbols > -1) {
            text[i] = grammer[symbols];
        } else if (alphas > -1) {
            text[i] = alphaDeScrambler["x" + text[i]];
        } else {
            text[i] = alphaDeScrambler[text[i]];   
        }
    }
    var passLen = Number(text[0]);
    text.shift();
    text = text.join("");
    return [text,passLen]
}

function decryptText() {
    var text = document.getElementById("decipher").value;
    var passWord = document.getElementById("passwordright").value;
    var passPoint = passwordPointer();
    var decode = document.getElementById("decoded");
    if (text.indexOf(passPoint1) > -1 & text.indexOf(passPoint2) > -1 &
        !passWord) {
        text = "Invalid Password";
        decode.innerHTML = "Password Incorrect!";
        decode.style.color = "red";       
        decode.style.textAlign = "center";
        decode.style.fontSize = "3em";
        return 0;
    }
    text = sliceEven(text);
    text = text.split("");
    text = text.reverse();
    text = alphaConverter(text);
    var passLen = text[1], text = text[0];
    var passSlice = text.slice(text.length - passLen,text.length);
    if (passWord.toLowerCase() == passSlice) {
        text = text.slice(0,text.length - passLen);
        decode.style.color = "white";
        decode.style.textAlign = "left";
        decode.style.fontSize = "1.25em";
        decode.focus();
    } else {
        decode.innerHTML = "Password Incorrect!";
        decode.style.color = "red";
        decode.style.textAlign = "center";
        decode.style.fontSize = "3em";
        return 0;
    }
    decode.innerHTML = text;
}

/******************************************************************************    
* showPass()
* This function works with a checkbox beside the password input field to 
* allow the user to view the password instead of masking it.
******************************************************************************/ 
function showPass(element) {
    var x = document.getElementById(element);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}