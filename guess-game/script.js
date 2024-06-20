
var ans;
var msg = document.getElementById("msg");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let btn = document.getElementById("guess-btn");
ans = Math.floor(Math.random() * 100);
console.log(ans);


function makeGuess() {
    msg.style.display = 'block';
    var guess = document.getElementById("num").value;
    if (guess > ans && Math.abs(guess - ans) > 10) {
        msg.textContent = "Too High";
    }
    else if (guess > ans && Math.abs(guess - ans) < 5) {
        msg.textContent = "Near";
    }
    else if (guess > ans) {
        msg.textContent = "High";
    }
    else if (guess < ans && Math.abs(guess - ans) < 10) {
        msg.textContent = "Low";
    }
    else if (guess < ans) {
        msg.textContent = "Too Low";
    }
    else {
        msg.textContent = "Nicee!!, you got it ,WELL DONE :)";
        btn.disabled = true;
        btn.style.cursor = "auto";
        btn.style.background = "Black";

    }
}