  /////////////////////////////////////////////////////////////////
 //                             DOM                             //
/////////////////////////////////////////////////////////////////
//console.log(document.all[10]);
  /////////////////////////////////////////////////////////////////
 //               Examine the Document Object                   //
/////////////////////////////////////////////////////////////////
// let mainHeader = document.getElementById('header-title');
// console.log(mainHeader.innerHTML);
// console.log(mainHeader.innerText);
//let items = document.getElementById('items');
//console.log(items)


// Get elements by class



//   let header = document.getElementsByClassName('add-item');
// console.log(header[0])


// get elements by tag name

// let inputs = document.getElementsByTagName('input');
// console.log(inputs[0])

// var item = document.querySelectorAll('.list-group-item');
// console.log(item)


/////////////////////////////////////////////////////////////////    
 //                 Targeting Items in the DOM                  //
/////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////
 //              Manipulating Items in the DOM                  //
///////////////////////////////////////////////////////////////// 
  //  let mainHeader = document.getElementById('header-title');
  //  mainHeader.innerHTML = 'Some Other App'

// let item = document.getElementsByTagName('input');
// console.log(item[0])
// item[0].value = 'Pasta perimavera'


  /////////////////////////////////////////////////////////////////
 //                     Traversing the DOM                      //
/////////////////////////////////////////////////////////////////
// let items = document.querySelector('#items')
// console.log(items.previousElementSibling)





  /////////////////////////////////////////////////////////////////  
 //                   Adding Items to the DOM                   // 
/////////////////////////////////////////////////////////////////  
let newDiv = document.createElement('div');
newDiv.className = 'myClass';
newDiv.id = 'myId';
console.log(newDiv)

let newtext = document.createTextNode('Hello World!');
console.log(newtext)

newDiv.appendChild(newtext);

let container = document.querySelector('.container');
container.appendChild(newDiv);

let h1 = document.querySelector('#header-title');
container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '24px'

   /////////////////////////////////////////////////////////////////  
  //               Removing Items from the DOM                   //
 /////////////////////////////////////////////////////////////////  

 //newDiv.remove()
 container.firstElementChild.remove()
