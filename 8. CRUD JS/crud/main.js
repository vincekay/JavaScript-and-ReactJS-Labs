//////////////////////////////////////////////////////////
//  Conditionals, Arrays, Functions, Loops, and Inputs  //
//////////////////////////////////////////////////////////

/* 
    We are going to build a basic CRUD app (Create, Read, Update, Delete). 
    It is going to be a basic model for managing StackOverflow posts. Each post should have properties for title, description and the date/time it was created.
*/

/*
    Step 1: Build something to store our data

    *Hint* What have we seen is good for storing a lot of data? 
*/
class MessageDB {
    constructor() {
        this.messages = [];
    }
}

/*
    Step 2: Build Modifiers and Accessors

    Now we want to figure out how to implement 4 features:
    -> Create: add an item to our data storage
    -> Read: be able to get one or all items from our data storage
    -> Update: be able to get an existing item and change it
    -> Delete: be able to remove an existing item

    *Guiding Thoughts* 
    What are useful tools for implementing these features so that we can
    use them over and over again?
*/


// ******* Implement Create Feature *******
addMessage(title, description); {
    this.messages.push({
        title: title,
        description: description,
        created: new Date()
    });
}
// ******* Implement Read Feature *******

// ******* Implement Update Feature *******
updateMessage(title, updates) {
    let index =
}
// ******* Implement Delete Feature *******


/*
    Step 3: Build A Way to Interact With Our Data

    Once you've figured out how to do CRUD on our data, you can now
    manipulate your data the way you want. However, it's not very 
    useful right now. One way we can make it more useful is adding a 
    user interface. 

    For our user input, we can use the prompt method. For displaying information, we can use the console (console.log). 
    
    For this step, build a way of getting user commands such as creating 
    an item, through a prompt and then change your data based on the commands. 

    *Things to think about*
    How might the prompt look differently if I am creating an item vs deleting an item?
    How about seeing all items vs updating a single item?
*/


// ******* Implement Ask For Command Feature *******



/*
    Step 4: Run this program

    Now you want to repeat the prompts until some end condition. Perhaps
    you'll want to keep asking your user until they enter "exit", in which
    case, you'll exit the progrom. 

    *Hint*
    It seems like some sort of repeating function or statement would be very 
    helpful, along with a some way of stopping our code when we want it to stop. 
*/

