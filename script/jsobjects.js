/*****************************************************************************
This code demonstrates fluency in the catagory of JavaScript Object 
creation, Functions, Inheritance, Properties, Methods and Instantiation.
Author:
    Jonathan Carlson
Course: 
    CIT 261 section ? Online
Instructor:
    Brother Eddington
*****************************************************************************/

var name, gpa, major, loc, age, gen;

/*****************************************************************************
* function (object constructor) - myObject(string, float, string, string)
* The function constructor that creates an incomplete student object.
*****************************************************************************/
function myObject(name,gpa,major,loc) {
    this.name = name;
    this.gpa = gpa;
    this.major = major;
    this.loc = loc;
}

/*****************************************************************************
* function - createStudent(string, float, string, string)
* The function that creates and object using the above function, then displays 
* it to the HTML tags. This is the "incomplete" student data object function.
*****************************************************************************/
function createStudent(colnum) {
    
    // Link Variable to input values
    name = document.getElementById("Name").value;
    gpa = document.getElementById("GPA").value;
    major = document.getElementById("Major").value;
    loc = document.getElementById("Loc").value;
    
    // Create incomplete student data object. 
    // Displays data and names object according to which button you clicked.
    switch(colnum) {
        case 1:
        var a = "nameone", b = "gpaone", c = "majorone", d = "locone";
            student1 = new myObject(name,gpa,major,loc);
            document.getElementById(a).innerHTML = student1.name;
            document.getElementById(b).innerHTML = student1.major;
            document.getElementById(c).innerHTML = student1.gpa;
            document.getElementById(d).innerHTML = student1.loc;
            break;
        case 2:
            var a = "nametwo", b = "gpatwo", c = "majortwo", d = "loctwo";
            student2 = new myObject(name,gpa,major,loc);
            document.getElementById(a).innerHTML = student2.name;
            document.getElementById(b).innerHTML = student2.major;
            document.getElementById(c).innerHTML = student2.gpa;
            document.getElementById(d).innerHTML = student2.loc;
            break;
        case 3:
            var a = "namethree", b = "gpathree", c = "majorthree", d = "locthree";
            student3 = new myObject(name,gpa,major,loc);
            document.getElementById(a).innerHTML = student3.name;
            document.getElementById(b).innerHTML = student3.major;
            document.getElementById(c).innerHTML = student3.gpa;
            document.getElementById(d).innerHTML = student3.loc;
            break;
    }
}

/*****************************************************************************
* function (object constructor) - myObject2(string, num)
* The function constructor that creates a complete student object.
*****************************************************************************/
function myObject2(gen, age) {
    this.gen = gen;
    this.age = age;
}

/*****************************************************************************
* completeStudent(string, num)
* This function inherits the properties of the previously created objects and
* adds two more properties, updating the data to completeness.
*****************************************************************************/
function completeStudent(colnum) {
    
    // Link Variable to input values
    var gen = document.getElementById("Gen").value;
    var age = document.getElementById("Age").value;
    
    // Create incomplete student data object. 
    // Displays data and names object according to which button you clicked.
    switch(colnum) {
        case 1:
            myObject2.prototype = student1;
            cStudent1 = new myObject2(gen,age);
            document.getElementById("genone").innerHTML = cStudent1.gen;
            document.getElementById("ageone").innerHTML = cStudent1.age;
            break;
            // If cStudent1.name is called (or any of the other previous
            // properties), it will show what is saved in the student1.name 
            // object's property. Test using the below line:
            // document.write(cStudent1.name);
        case 2:
            myObject2.prototype = student2;
            cStudent2 = new myObject2(gen,age);            
            document.getElementById("gentwo").innerHTML = cStudent2.gen;
            document.getElementById("agetwo").innerHTML = cStudent2.age;
            break;
        case 3:
            myObject2.prototype = student3;
            cStudent3 = new myObject2(gen,age);            
            document.getElementById("genthree").innerHTML = cStudent3.gen;
            document.getElementById("agethree").innerHTML = cStudent3.age;
            break;
    }
}