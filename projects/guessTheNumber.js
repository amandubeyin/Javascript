let gameNum = Math.round(Math.random()*100); //Create a random number
function guessTheNumber(){ // Create a function 
    let userNum = prompt("Guess The Number(1-100): "); // input from user
    if(userNum == gameNum){
        console.log("Yes, The Number is",userNum);
    }
    else if(userNum>gameNum){
        console.log("Wrong !! Number is Smaller then",userNum);
        guessTheNumber()
    }
    else{
        console.log("wrong !! Number is Grater then",userNum);
        guessTheNumber()
    }
}
guessTheNumber(); // calling the function 