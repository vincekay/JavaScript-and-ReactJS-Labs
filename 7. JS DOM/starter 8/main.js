// ************************************************************************
// Tips for completing lab

// Console log everything !!
// event
// .target
// .value
// .innerHTML
// .parentElement
// .lastElementChild
// .previousElementSibling
// .querySelector

// Write your functions and then pass them as the 2nd argument of the event listener
// function createItem(event) {
    // do something
// }

// someButton.addEventListener('click', createItem);

// --------------------------------

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


//// ***************** EVENTS *****************


  ///////////////////////////////////////////////////
 //                  Create item                  //
///////////////////////////////////////////////////

// Add event listener to submit button which handles adding user's todo items to list
submitBtn.addEventListener('click', function(event) {
  
  
  console.log('were clicking');
  // Grab input field where user's to do item is entered
console.log(input.value)

       // Create li element 
       var item = document.createElement('li');
       item.className = "list-group-item";
       item.appendChild(document.createTextNode(input.value));
       // Create buttons for li items
       // Could be refactored to using appendDelete and appendUpdate functions created below
       var deleteButton = document.createElement('BUTTON');
       deleteButton.className = "btn btn-danger btn-xs pull-right delete-button";
       deleteButton.style.marginLeft = "5px";
       deleteButton.innerHTML = "x";
       deleteButton.addEventListener('click', removeItem)
       var updateButton = document.createElement('BUTTON');
       updateButton.className = "btn btn-info btn-xs pull-right update-button";
       updateButton.innerHTML = "&#x21bb";
       
       // Append buttons to li, append li to ul element
       item.appendChild(deleteButton);
       item.appendChild(updateButton);
       listOfItems.appendChild(item);
   });
       // Add users input to li element

      // Append delete button and update button

      // Append new item to list of items

      // Clear user's to do item from input field

 



  ///////////////////////////////////////////////////
 //                  Delete item                  //
///////////////////////////////////////////////////

// grab all elements with class .delete-button
let deleteButtons = document.getElementsByClassName('delete-button');


// Create a function that handles removing an item from list
var removeItem = function(event) {
  console.log('were clicking');
  event.target.parentElement.remove()
  }


for(let d of deleteButtons) {
  d.addEventListener('click', removeItem);
} 


//deleteButtons.addEventListener('click', function(d) {
  //node.parentNode.removeChild(node);
//});

// let deleteButtons = document.getElementsByClassName('delete-button');
// deleteItem = (e) => {
//   e.target.parentElement.remove();
// } 
// for(let i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].addEventListener('click', deleteItem)
// }

// const addItem = (e) => {
//   console.log(input.value);
//   let listItem = listOfItems.childNodes[0].cloneNode(true);
//   console.log(listItem.childNodes[0].textContent);
//   listItem.childNodes[0].textContent = input.value;
//   listItem.childNodes[1].addEventListener('click', deleteItem);
//   listOfItems.appendChild(listItem);
// }

// submitBtn.addEventListener('click', addItem);

// */
//
//

// Add the remove item event listener to existing to do items


  ///////////////////////////////////////////////////
 //                  Update item                  //
///////////////////////////////////////////////////

// grab all elements with class .update-button
//
//console.log(itemupdate);
// Declare global variable to handle updating a list item's value; this var will hold the parent element of text to be updated;
//ar todoItemToUpdate; 

// Create function to handle updating an item from list
//var updateItem = function(event) { 
//event.target
  // Grab parent element of update button - which is a li element

  // Loop through the parent element's child nodes to retrieve todo's text value

      // Select the child node if it's a text element
    
      // change submit button to save button

      var ItemToUpdate;
      submitBtn.addEventListener('click', addItem);
const updateItem = (e) => {
  let listItemText = e.target. parentElement.childNodes[0].textContent;
  console.log(text);
  input.value = listItemText;
}
let updateButtons = document.getElementsByClassName('update-button');
  

for(let u of updateButtons) {
u.addEventListener('click', updateItem);

const saveItem = (e) => {
  console.log(input.value);
  console.log(ItemToUpdate);
}

saveBtn.addEventListener('click', saveItem);



}



}



// Add updateItem event listener to update buttons already existing on page load.


  ///////////////////////////////////////////////////
 //                   Save item                   //
///////////////////////////////////////////////////

// Create 'Save' button for saving updated todos
var saveBtn = document.createElement('INPUT');
saveBtn.className = "btn btn-primary";
saveBtn.id = "save-button";
saveBtn.type = "button";
saveBtn.value = "Save"
saveBtn.style.marginLeft = "5px";
saveBtn.style.backgroundColor = "green";

// Save item event listener
var saveUpdatedTodo = function(event) {

    // Targets the input value, where todo is updated

        // Target the item to update with new value
        // Use todoItemToUpdate, the global variable we set when selecting item to update ( li element )

        // Append delete button and update button

        // grab delete button so that we can reappend remove item event listener

        // grab update button such that we can reappend update item event listener
        
        // Add the remove item event listener

        // Add the update item event listener

        // Clear user's to do item from input field

        // change save button to submit button
}

// Add event listener to save button
