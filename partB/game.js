var guessInput = document.getElementById("guess");
var score = document.getElementById("score");
var feedback = document.getElementById("feedback");
var result = document.getElementById("result");
var attempts = 0;

var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(){
    var guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "Invalid input! Please enter a number between 1 and 100.";
        feedback.textContent = "";
        return;
    }

    attempts++;
    score.textContent = "Score: " + attempts;

    if (guess === randomNumber) {
        result.textContent = "Result: Congratulations! You guessed the number!";
        feedback.textContent = "Feedback: You got it right!";
    } else if (guess < randomNumber) {
        feedback.textContent = "Feedback: Try again, guess is too low!";
        result.textContent = "Result: Keep trying!";
    } else if (guess > randomNumber) {
        feedback.textContent = "Feedback: Try again, guess is too high!";
        result.textContent = "Result: Keep trying!";
    }
}
