// TODO: Write JavaScript code here! e.g. to test:
// console.log('Individual Project 1, ready to start!');
console.log("--- Trivia Game Script Loaded Successfully ---");

let corrects = 0;
let incorrects = 0;
let lives = 10;

function correct() {
    corrects++;
    // Update the text inside the span with id="correct_count"
    document.getElementById("correct_count").innerText = corrects;
    
    // Provide feedback in your "message" div
    document.getElementById("message").innerText = "That is correct!";
    document.getElementById("message").style.color = "green";
    
    console.log("✅ Correct Answer! Current Score: " + corrects);
}

// This function runs when an "incorrect" button is clicked
function incorrect() {
    incorrects++;
    lives--;
    
    // Update the scoreboard spans
    document.getElementById("incorrect_count").innerText = incorrects;
    document.getElementById("lives_count").innerText = lives;
    
    console.log("❌ Incorrect Answer. Lives left: " + lives);
    
    // Provide feedback
    document.getElementById("message").innerText = "Oops! Wrong answer.";
    document.getElementById("message").style.color = "red";

    // Check if the user lost all lives
    if (lives <= 0) {
        alert("Game Over! You've run out of lives.");
        location.reload(); // Restarts the game
    }
}
