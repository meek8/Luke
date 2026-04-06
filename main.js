// TODO: Write JavaScript code here! e.g. to test:
// console.log('Individual Project 1, ready to start!');
console.log("--- trivia game script loaded successfully ---");

let corrects = 0;
let incorrects = 0;
let lives = 10;

function correct() {
    corrects++;
    document.getElementById("correct_count").innerText = corrects;
    
    document.getElementById("message").innerText = "That is correct!";
    document.getElementById("message").style.color = "green";
    
    console.log("✅ Correct Answer! Current Score: " + corrects);
    checkEndGame();
}

function incorrect() {
    incorrects++;
    lives--;
    
    document.getElementById("incorrect_count").innerText = incorrects;
    document.getElementById("lives_count").innerText = lives;
    
    console.log("❌ Incorrect Answer. Lives left: " + lives);
    
    document.getElementById("message").innerText = "Oops! Wrong answer.";
    document.getElementById("message").style.color = "red";

    checkEndGame();
}

function checkEndGame() {
    if (corrects === 6) {
        showBanner("YOU WIN!");
    } 
    else if (lives <= 0) {
        showBanner("GAME OVER!");
    }
}

function showBanner(text) {
    const banner = document.createElement("div");
    banner.className = "gameover";
    banner.innerText = text;
    document.body.appendChild(banner);
}
