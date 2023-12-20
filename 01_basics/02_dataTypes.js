/*
JavaScript is a dynamically typed (also called loosely typed) scripting language. In JavaScript, variables can receive different data types over time.

The latest ECMAScript standard defines eight data types Out of which seven data types are Primitive(predefined) and one complex or Non-Primitive.

Primitive(predefined) DataType ---7

1. String =>""
2. Number => 2 to the power 53
3. Bigint
4. Boolean => true/false
5. Undefined
6. Null
7. Symbol

Non-Primitive DataType ---1

1.Object

*/


// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Numbers:
let length = 16;
let weight = 7.5;
console.log(typeof(weight));

// BigInt
let BigInt = 3768764754564356476743545456436543546556345642354654487136;
console.log(typeof(BigInt));

// Booleans
let x = true;
let y = false;

// Undefined
let age = undefined;
let state;
console.log(typeof(age));
console.log(typeof(state)); //undefined 

// Null
let dob = null;
console.log(typeof(dob)); // Object--null is a object.

// Symbol ==> unique 

// Object:
const person = {firstName:"John", lastName:"Doe"};


