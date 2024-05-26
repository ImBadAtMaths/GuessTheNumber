var error = document.getElementById("error");
var message2 = document.getElementById("message2");
var attempts = document.getElementById("attempts");
var guessInput = document.getElementById("guessInput");
var Number = Math.round(Math.random() * 1000 + 1);
var count = 0
var array = []
guessButton.addEventListener("click", function () {
    var userGuess = parseInt(guessInput.value);
    count++
    if (array.includes(userGuess) && userGuess > Number) {
        error.innerText = `You have already entered this number!`
        message2.innerText = `${userGuess} is greater than the number generated`;
        count--
    } 
    else if (array.includes(userGuess) && userGuess < Number) {
        error.innerText = `You have already entered this number!`
        message2.innerText = `${userGuess} is smaller than the number generated`;
        count--
    } 
     else if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
        error.innerText = `Your input is invalid`
        count--

    } 
     else if (userGuess > Number) {
        message2.innerText = `${userGuess} is greater than the number generated`;
        array.unshift(userGuess)
        error.innerText = ""

    } else if (userGuess < Number) {
        message2.innerText = `${userGuess} is smaller than the number generated`;
        array.unshift(userGuess)
        error.innerText = ""

    } else if (userGuess == Number) {
        error.innerText = ""
        message2.innerText = `congratulation!You got it right`;
        let points = 20 - count;
        let numberOfGuesses = count;
        attempts.innerText = `You have scored ${points} out of 20! and Your no of guesses are ${numberOfGuesses}`;
        return;
    }
    if (count >= 20) {
        attempts.innerText = `You have used all 20 of your attempts`;
        guessButton.disabled = true;
        error.innerText = ""
    }

})
