        var message = document.getElementById("message");
        var attempts = document.getElementById("attempts");
        var guessInput = document.getElementById("guessInput");
        var Number = Math.round(Math.random() * 1000 + 1);
        var count = 0
        var array = []
        var element
        guessButton.addEventListener("click", function () {
            var userGuess = parseInt(guessInput.value);
            count++
            if (array.includes(userGuess)) {
                message.innerText = "You have already entered this number!"
                count--
            } 
            else if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
                message.innerText = "Your input is invalid"
                count--
            } else if (userGuess > Number) {
                message.innerText = "Your number is greater than the number generated";
                array.unshift(userGuess)
            } else if (userGuess < Number) {
                message.innerText = "Your number is smaller than the number generated";
                array.unshift(userGuess)
            } else if (userGuess == Number) {
                message.innerText = "congratulation!You got it right";
                let points = 20 - count - 1;
                let numberOfGuesses = count + 1;
                attempts.innerText = `You have scored ${points} out of 20! and Your no of guesses are ${numberOfGuesses}`;
                return;
            }
            if (count >= 20) {
                attempts.innerText = `You have used all 20 of your attempts`;
                guessButton.disabled = true;
            }

        })
