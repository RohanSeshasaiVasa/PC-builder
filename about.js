// Form validation
const form = document.getElementById("dream-pc-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const response = document.getElementById("form-response");
  if (username.trim() === "") {
    response.textContent = "Please enter your name!";
    response.style.color = "red";
  } else {
    response.textContent = `Thanks, ${username}! Your PC build is awesome!`;
    response.style.color = "green";
  }
});

// Random joke using alert box
const jokeBtn = document.getElementById("joke-btn");
const jokes = [
  "Why did the computer freeze? It left its Windows open!",
  "I would tell you a UDP joke, but you might not get it.",
  "Why did the GPU apply for a job? It wanted to process more opportunities!",
  "I changed my password to 'incorrect' so I always get it right.",
  "Why did the RAM break up with the CPU? It couldn’t handle the memory!",
  "Why was the computer cold? It left its Windows open... again!"
];

jokeBtn.addEventListener("click", function () {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  alert(randomJoke);
});

// Change background color
const bgBtn = document.getElementById("change-bg-btn");
const colors = ["#fce4ec", "#e8f5e9", "#e3f2fd", "#fff3e0", "#ede7f6"];

bgBtn.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
