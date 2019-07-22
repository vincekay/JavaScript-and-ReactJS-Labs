// console.log("Assessment loaded!");
// Write the code to solve the following problems.
// For each of the following, use window.prompt() to get user input.
// After getting each one right, "comment it out" so that when you
// refresh you don't have to keep typing things in!

// 1. Even or Odd


// Prompt the user for a number //store a value first, then let user 
// If the number is even print "even"
// If the number is odd print "odd"
// let user = prompt('please enter a number');   // you can use var num = prompt('Number?'); only in console
// let user2 = parseInt(user);   //if (num % 2 == 0) {alert('even')} else { alert('odd');}
// if (user2%2 == 0)
// {console.log('even')} 
// else {console.log('odd')};

let userInput = prompt('enter a number')
if (isNaN(userInput)){
  return;
}
if(userInput%2===0){
  if(userInput+': is even');
}else {
   {
    alert(userInput+':is odd')
  }
}
// 2. Sum numbers from the user
let num = window.prompt('enter a number'); 
let num2 = window.prompt('enter a second number');
let numTotal = (Number(num)) + (Number(num2));
console.log(numTotal);
// Prompt the user to enter two numbers, then show their sum.

// 3. Repeat until the input is a number
do {
    var selection = parseInt(window.prompt('enter a number'))
} while(isNaN(selection));

console.log(selection);
//var selection- creating a varbiable to store something inside of it so I can use it.
//why loop, isNaN(), recurrsion

// Create a function readNumber that prompts for a number until the user
// enters a valid numeric value.

// The resulting value must be returned as a number.

// The user can also stop the process by entering an empty line or pressing the // Cancel button. In that case, the function should return null.

// 4. A random number from min to max


const getRandomNumber = (min, max) => {   //this is the function
    console.log(`your minimum number is ${min}`);  //this is too show the output
    console.log(`your maximum number is ${max}`);  //this is too show the output
    return Math.random() * (max - min) + min;  //returns a random number and mutiplies the max and min then adds the min will result in a random decimal 

}

let random2 = (min,max) => Math.random() * (max-min) + min; // thats how to randomize numbers


//console.log(getRandomNumber(1,5));
// The built-in function Math.random() creates a random value from 0 to 1 (not /// including 1).

// Write a function random(min, max) to generate a random floating-point number // from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// 5. A random integer from min to max
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRndInteger(1, 100));
// Create a function randomInteger(min, max) that generates a random integer 
// from min to max, including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// You can use the solution of the previous task as the base.

// 6. Uppercase the first character

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1); //
// }


// Write a function ucFirst(str) that returns the string str with the 
// uppercased first character, for instance:

// ucFirst("john") == "John";

//7. Check for spam
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
//         console.log("spam");
//     } else { 
//         console.log('notspam');
//     }

// }

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ 
// or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// 8. Truncate the text
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength) + '…' : str;
//   }
// Create a function truncate(str, maxlength) that checks the length of the str 
// and, if it exceeds maxlength, truncates the string to make its length equal 
// to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

//truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to tel"
//truncate("Hi everyone!", 20) = "Hi everyone!"

// 9. Extract the money
// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }

//   console.log('extractCurrencyValue');



//extractCurrencyValue + str => Number(str.slice(1));
//extractCurrencyValue ('$120');

// We have a cost in the form "$120". That is: the dollar sign goes first, and 
// then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric 
// value from such string and return it

// 10. The List

// let age = parseInt(window.prompt("Please enter your age:"));
// console.log(age);
// let income = parseInt(window.prompt("Please enter your income:"));
// console.log(income);
// let celebrity = (window.confirm("Are you a celebrity?"));
// console.log(celebrity);
// let sneakers = (window.confirm("Are you wearing sneakers?"));
// console.log(sneakers);

// grantAccess = () => { 
//     if(age>=16 && celebrity===true || age >=16 && income >=5000000 || age<=25 && age> 18 && income >=250000){
//         console.log("*nod*")
//     } else if(age<=18 || age>= 35 || income<=100000 || sneakers===true) {
//         console.log("You're not on the list.")
//     } 
// }
// grantAccess();

// Big Gary's job is to make sure that the club only lets in the "best" class of clientele.
// Prompt the user for:
// - their age
// - their income
// - if they are a celebrity ("yes" or "no")
// - if they are wearing sneakers ("yes" or "no")

// If Big Gary let's you in, he prints: "*nod*"
// If he doesn't let you in, he prints: "You're not on the list."

// You are not allowed in if:
//   - you are under 18 or over 35.
//   - you have an income under 100,000.
//   - you are wearing sneakers.

// Otherwise you are let in. However, there are some exceptions, you will also be let in if:
//   - you are over 16 and a celebrity.
//   - you are over 16 and your income is over 5,000,000.
//   - you are under 25 (and over 18), you have an income over 250K, but are wearing sneakers.

// The test cases are as follows:
// age, money, celeb, shoes - Outcome

// Rare
// 15, 100K, y, n - N
// 16, 100K, y, n - Y
// 16, 4.9M, n, n - N
// 16, 5M, n, n - Y
// 17, 250K, n, y - N
// 25, 250K, n, y - N
// 20, 250K, n, y - Y
// 20, 249K, n, y - N

// Age
// 17, 100K, n, n - N
// 18, 100K, n, n - Y
// 36, 100K, n, n - N
// 35, 100K, n, n - Y

// Income
// 20, 99K, n, n - N
// 20, 100K, n, n - Y

// Shoes
// 20, 100K, n, y - N



// 11. Perfect Change
// Prompt the user for a dollar amount they would like perfect change for. (eg. 100 = $1)
// Write code that intakes the users money and prints to the console perfect change.
// Once the change has been printed in the console the code should stop running.



// Examples:
//    User inputs: 82
//    Console outputs:
//       quarter
//       quarter
//       quarter
//       nickel
//        penny
//       penny


// let money = +window.prompt('How much?')   // you can use + instead of a parseint



// userName = "Vince"


// function showMessage() {
// let username = 'Vince';
// let message = 'Hello, ' + username;

// alert(message);
// } 

// alert(userName)

