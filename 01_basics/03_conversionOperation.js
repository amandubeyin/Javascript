let score = "33";
console.log(typeof(score)); //String
console.log(score); //"33"
const valueInNumber = Number(score); //Convert into number
// Number
// String
// Boolean ...etc
console.log(typeof(valueInNumber));  //number
console.log(valueInNumber); // 33

//  NEXT EXAMPLE 

let nxtScore = "33abd"; //"33abd" is not converted into number
console.log(typeof(nxtScore)); //String
console.log(nxtScore); //"33abd"
const nxtValueInNumber = Number(nxtScore); //Convert into number
console.log(typeof(nxtValueInNumber));  //number
console.log(nxtValueInNumber); // NaN -> Not A Number


//  Numbers and the '+' operator
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"

// Numbers with other Operator
"37" - 7; // 30
"37" * 7; // 259
