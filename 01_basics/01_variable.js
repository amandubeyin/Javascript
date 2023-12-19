/*(Q) Here are the rules for declaring variables in JavaScript:

-> A variable name must start with a letter, an underscore (_), or a dollar sign ($).
-> A variable name cannot start with a number.
-> JavaScript is case-sensitive. So y and Y are different variables.
-> Keywords cannot be used as variable names.
-> Variables can be declared using the var, let, or const keywords.

*/

w=5;  //Automatic
var x=6; // using Var
let y=7; // using let
const z=8; // using const

console.table([w,x,y,z]);

/* JavaScript variables can be declared into 4 ways. */


//The var keyword was used in all JavaScript code from 1995 to 2015.
//The let and const keywords were added to JavaScript in 2015.


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let x=50;
let x=100; //now x store "100"

console.log(x); // 100

const x1=96;
//const x1=100; Error
console.log(x1);

/*
Always use const if the value should not be changed

Always use const if the type should not be changed (Arrays and Objects)

Only use let if you can't use const
*/