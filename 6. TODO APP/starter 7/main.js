
// Header Section

// Create and append a div with id of page-container to the body element
var body = document.body;
var pageContainer = document.createElement('DIV');

pageContainer.id = "page-container";
pageContainer.style.height = "100vh";

body.appendChild(pageContainer);

// Create a container div with id of main-header for the header
var mainHeader = document.createElement('DIV');
mainHeader.id = "main-header";

// Create an 'inner container' which will be the direct child of mainHeader. This div should have a class of 'container'. It will also be the direct parent for your heading h1 element. 
var innerContainer = document.createElement('DIV');
innerContainer.className = "container";

// Finally create an H1 element with the title 'Todo App'. Give it an id of 'header-title'
var headerTitle = document.createElement('H1');
headerTitle.innerHTML = "Todo App";
headerTitle.style.fontSize = "40px";

// Append headerTitle to innerContainer, innerContainer to mainHeader and mainHeader to pageContainer
innerContainer.appendChild(headerTitle);
mainHeader.appendChild(innerContainer);
pageContainer.appendChild(mainHeader);

// Add styles to header
mainHeader.style.backgroundColor = "green";
mainHeader.style.height = "100px";
mainHeader.style.color = "white";
mainHeader.style.paddingTop = "10px";


// Content Section 
// Create container for content section
var contentContainer = document.createElement('DIV');
contentContainer.id = "content-container";

contentContainer.style.width = '80%'
contentContainer.style.margin = "20px auto";
contentContainer.style.border = "1px solid #c4c4c4";
contentContainer.style.borderRadius = "5px";

pageContainer.appendChild(contentContainer);

// Create inner container for content section
var innerContainer = document.createElement('DIV');
innerContainer.className = "inner-container";
innerContainer.style.margin = "20px";

// Create add item card
var addItemCard = document.createElement('DIV');
addItemCard.className = "add-item";

// Create header for add item card
var addItemHeader = document.createElement('H2');
addItemHeader.innerHTML = "Add Todo";

// Create form for text input and submit button input
var form = document.createElement('FORM');
form.className = "form-inline";

// Create text input
var input = document.createElement('INPUT');
input.id = "item-to-add";
input.type = "text";
input.className = "form-control";
input.placeholder = "Something to do..";

// Create submit button input
var submitBtn = document.createElement('INPUT');
submitBtn.className = "btn btn-primary";
submitBtn.id = "submit-button";
submitBtn.type = "button";
submitBtn.value = "Submit"
submitBtn.style.marginLeft = "5px";

// Append inputs to form
form.appendChild(input);
form.appendChild(submitBtn);

addItemCard.appendChild(addItemHeader);
addItemCard.appendChild(form);

innerContainer.appendChild(addItemCard);
contentContainer.appendChild(innerContainer);

// Items list card

var itemsCard = document.createElement('DIV');
itemsCard.className = "items-card";
innerContainer.appendChild(itemsCard);

// Items list card header element
var itemsCardHeader = document.createElement('H2');
itemsCardHeader.innerHTML = "Todos";
itemsCard.appendChild(itemsCardHeader);

// Items list card ul element
var listOfItems = document.createElement('UL');
listOfItems.id = "items";
listOfItems.className = "list-group";
itemsCard.appendChild(listOfItems);

// Create and append 5 li elements to ul
for (var i = 1; i < 5; i++) {
    var item = document.createElement('li');
    item.className = "list-group-item";
    item.appendChild(document.createTextNode("Item  " + i));
    // item.innerHTML = " Item " + i; // also works fine

    // Create buttons for li items
    // Could be refactored to using appendDelete and appendUpdate functions created below
    var deleteButton = document.createElement('BUTTON');
    deleteButton.className = "btn btn-danger btn-xs pull-right delete-button";
    deleteButton.style.marginLeft = "5px";
    deleteButton.innerHTML = "x";

    var updateButton = document.createElement('BUTTON');
    updateButton.className = "btn btn-info btn-xs pull-right update-button";
    updateButton.innerHTML = "&#x21bb";
    
    // Append buttons to li, append li to ul element
    item.appendChild(deleteButton);
    item.appendChild(updateButton);
    listOfItems.appendChild(item);
}

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
 //                     EVENTS                      //
/////////////////////////////////////////////////////
let myButton = document.createElement('button');
innerContainer.appendChild(myButton);
myButton.innerHTML = "Click me";
myButton.className = 'btn btn-primary btn-block';
myButton.id = 'myButton';



const runEvent = e => {
  console.log(event.type);
  console.log(e.target.value);

}

myButton.addEventListener('mousedown', runEvent)
myButton.addEventListener('mouseup', runEvent) 
myButton.addEventListener('click', runEvent)

var aDiv = document.createElement('div');
aDiv.id = "demo-div";
aDiv.style.width = "400px";
aDiv.style.height = "200px";
aDiv.style.backgroundColor = "darkgray";
aDiv.style.marginTop = "20px";
innerContainer.appendChild(aDiv);

aDiv.addEventListener('mouseover', runEvent);
aDiv.addEventListener('mouseout', runEvent)


const mouseMoveEvent = e => {
    aDiv.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 255)`;
}

aDiv.addEventListener('mousemove', mouseMoveEvent);

input.addEventListener('keydown', runEvent);
input.addEventListener('keyup', runEvent);
input.addEventListener('focus', runEvent);
input.addEventListener('blur', runEvent);