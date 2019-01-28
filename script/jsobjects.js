/*****************************************************************************
This code demonstrates fluency in the catagory of JavaScript Object 
creation, Functions, Inheritance, Properties, Methods and Instantiation
*****************************************************************************/

/*****************************************************************************
myObject(string, float, string, string)
The function that creates a student object
*****************************************************************************/
function myObject(name,gpa,major,loc) {
    this.name = name;
    this.gpa = gpa;
    this.major = major;
    this.loc = loc;
}

/*****************************************************************************
createStudent(string, float, string, string)
The function that creates and object using the above function, then displays 
it to the HTML tags.
*****************************************************************************/
function createStudent(colnum) {
    
    // Set Variable to input values
    var name = document.getElementById("Name").value;
    var gpa = document.getElementById("GPA").value;
    var major = document.getElementById("Major").value;
    var loc = document.getElementById("Loc").value;
    
    // Create object
    student1 = new myObject(name,gpa,major,loc);
    
    switch(colnum) {
        case 1:
        var a = "nameone", b = "gpaone", c = "majorone", d = "locone";
            break;
        case 2:
            var a = "nametwo", b = "gpatwo", c = "majortwo", d = "loctwo";
            break;
        case 3:
            var a = "namethree", b = "gpathree", c = "majorthree", d = "locthree";
            break;
    }
    
    // Display object contents
    document.getElementById(a).innerHTML = student1.name;
    document.getElementById(b).innerHTML = student1.major;
    document.getElementById(c).innerHTML = student1.gpa;
    document.getElementById(d).innerHTML = student1.loc;
}

