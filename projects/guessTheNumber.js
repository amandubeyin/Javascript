let gameNum = Math.round(Math.random()*100); //Create a random number
function guessTheNumber(){ // Create a function 
    let userNum = prompt("Guess The Number(1-100): "); // input from user
    if(userNum>=1 && userNum<=100){                    // Check The Number
        if(userNum == gameNum){
            console.log("Yes, The Number is",userNum);
            alert("Yes, The Number is",userNum);
        }
        else if(userNum>gameNum){
            console.log("Wrong !! Number is Smaller then",userNum);
            alert("Wrong !! Number is Smaller then",userNum);
            guessTheNumber()
        }
        else{
            console.log("wrong !! Number is Grater then",userNum);
            alert("Wrong !! Number is Grater then",userNum);
            guessTheNumber()
        }
    }
    else{
        console.log("The entered number should be between 1 and 100.");
        alert("The entered number should be between 1 and 100.");
        guessTheNumber()
    }
}
guessTheNumber(); // calling the function 