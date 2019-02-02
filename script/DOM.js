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


/******************************************************************************
* appendItem()  
* This function adds a selected topic from the drop-down to the column selected
* by the radio button. Executed by button click.
******************************************************************************/
function appendItem() {
    
    // Set bullets and values
    var
        selection = document.getElementById("topicid").value,
        list = determineList(), bullet, topic;
        
    if(!(detectItem(selection))) {
        
        bullet = document.createElement("LI"),
        topic = document.createTextNode(selection);

        bullet.appendChild(topic);
        list.appendChild(bullet);
    }
    alphabetize();
}

/******************************************************************************
* removeItem()  
* This function removes the selected topic from the drop-down from the list 
* selected by the radio buttons.
* Executed by button click.
******************************************************************************/
function removeItem() {
    var
        selection = document.getElementById("topicid").value,
        list = determineList();
        
    // Iterates through a ul list by id, detects a match, the removes it.
    if(detectItem(selection)) {
        for(i = 1, length = list.getElementsByTagName("li").length; i <=
            length; i++) {
            if(list.childNodes[i].innerHTML == selection) {
                list.removeChild(list.childNodes[i]);
                break;
            }
        }
    }
}

/******************************************************************************
* determineList()  
* This function defines the list to update depending on which radio button
* the user selects. 
* Returns an HTML ul list object by its value: "basic", "working", or
* "skilled".
******************************************************************************/
function determineList() {
    var profLevel = document.getElementsByClassName("radio");
    var radioIDValue;
    for(var i = 0, length = profLevel.length; i < length; i++) {
        if(profLevel[i].checked) {
            radioIDValue = profLevel[i].value,
                list = document.getElementById(radioIDValue);
            break;
        }
    }  
    return list;
}

/******************************************************************************
* detectItem()  
* This function checks for the existance of an item on any given list. I had to
* get a little help from jQuery. 
* Returns a boolean.
******************************************************************************/
function detectItem(listItem) {
    
    // Detect which radio button is checked.
    var profLevel = document.getElementsByClassName("radio"), column;
    for(var i = 0, length = profLevel.length; i < length; i++) {
        if(profLevel[i].checked) {
            column = i;
            break;
        }
    }
    
    // Set the correct column to change
    switch(column) {
        case 0:
            return $("ul#basic li").filter(function check() {
            return $(this).text() == listItem;}).length;
        case 1:
            return $("ul#working li").filter(function check() {
            return $(this).text() == listItem;}).length;
        case 2:
            return $("ul#skilled li").filter(function check() {
            return $(this).text() == listItem;}).length;
    }
}

/******************************************************************************
* alphabetize()  
* This function alphabetizes a ul list. 
* This function is not my code. It was copied from W3Schools.com.
* This function is also not essential. I would not have implemented this 
* feature if it was going to require a lot of time. I just thought it would be
* nice to have since it lines up the items of each column making it readable.
******************************************************************************/
function alphabetize() {
    var list, i, switching, b, shouldSwitch;
    list = determineList();
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

/******************************************************************************
* saveSheet()  
* This function stringifies the three fluency columns, then saves them to the
* local storage.
* Executed by button click.
******************************************************************************/
function saveSheet() {
    
    // Strap down your victims
    var basicList = document.getElementById("basic").innerHTML;
    var workingList = document.getElementById("working").innerHTML;
    var skilledList = document.getElementById("skilled").innerHTML;
    
    // Freeze them in carbonite
    var basicStr = JSON.stringify(basicList);
    var workingStr = JSON.stringify(workingList);
    var skilledStr = JSON.stringify(skilledList);
    
    // Lock them away in a secret underground facility
    localStorage.setItem("basic", basicStr);
    localStorage.setItem("working", workingStr);
    localStorage.setItem("skilled", skilledStr);
}

/******************************************************************************
* LoadSheet()  
* This function does the opposite of the previous function. It loads what is
* saved in your localStorage when the page loads. No button click necessary.
******************************************************************************/
function loadSheet() {
    
    // Retrive your victim from storage
    var basicStr = localStorage.getItem("basic");
    var workingStr = localStorage.getItem("working");
    var skilledStr = localStorage.getItem("skilled");
    
    // Have Princess Leah kiss each of them
    var basicObj = JSON.parse(basicStr);
    var workingObj = JSON.parse(workingStr);
    var skilledObj = JSON.parse(skilledStr);
    
    // Usher the newly revived, dazed and confuzed victims back home
    document.getElementById("basic").innerHTML = basicObj;
    document.getElementById("working").innerHTML = workingObj;
    document.getElementById("skilled").innerHTML = skilledObj;
}

loadSheet();