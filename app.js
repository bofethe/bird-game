let currentBird = {};
let score = 0;
let totalQuestions = 0;
let playerName = "";

// Get a random bird from birds array
function getRandomBird() {
  const randomIndex = Math.floor(Math.random() * birds.length);
  return birds[randomIndex];
}

function shuffleChoices(correctBird) {
  const correctName = correctBird.name;

  // Filter candidates by family (excluding the correct bird)
  let candidates = birds.filter(b => b.family === correctBird.family && b.name !== correctName);

  // If not enough, fall back to same order
  if (candidates.length < 2) {
    const orderCandidates = birds.filter(b => b.order === correctBird.order && b.name !== correctName);
    // Avoid duplicates
    candidates = [...new Set([...candidates, ...orderCandidates])];
  }

  // If still not enough, fall back to totally random
  while (candidates.length < 2) {
    const randomBird = getRandomBird();
    if (randomBird.name !== correctName && !candidates.some(b => b.name === randomBird.name)) {
      candidates.push(randomBird);
    }
  }

  // Shuffle and pick 2 incorrect answers
  const distractors = candidates.sort(() => Math.random() - 0.5).slice(0, 2);
  const choices = [correctName, ...distractors.map(b => b.name)];

  return choices.sort(() => Math.random() - 0.5);
}

// Display the current bird image/audio and choices
function showBird() {
  if (!playerName) return;

  currentBird = getRandomBird();
  totalQuestions++;
  const mediaDiv = document.getElementById("media");

  let imageSrc = "";
  if (currentBird.images) {
    const genderKeys = Object.keys(currentBird.images);
    const selectedGender = genderKeys[Math.floor(Math.random() * genderKeys.length)];
    imageSrc = currentBird.images[selectedGender];
  } else {
    imageSrc = currentBird.image;
  }

  mediaDiv.innerHTML = `
    <img src="${imageSrc}" alt="Bird Image" width="300" />
    <br />
    <audio controls src="${currentBird.audio}"></audio>
  `;

  const choices = shuffleChoices(currentBird);
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice-btn";
    btn.onclick = () => checkAnswer(choice, btn);
    choicesDiv.appendChild(btn);
  });

  // Enable Next button only after an answer is chosen
  document.getElementById("next-btn").disabled = true;
}

// Check if selected answer is correct
function checkAnswer(selected, button) {
  const result = selected === currentBird.name;
  if (result) {
    score++;
    button.style.backgroundColor = "#8fbc8f"; // green
  } else {
    button.style.backgroundColor = "#f08080"; // red
    // Highlight correct answer
    document.querySelectorAll("#choices button").forEach(btn => {
      if (btn.textContent === currentBird.name) {
        btn.style.backgroundColor = "#8fbc8f";
      }
    });
  }
  disableButtons();
  // Enable Next button after answering
  document.getElementById("next-btn").disabled = false;
}

// Disable all choice buttons after answer
function disableButtons() {
  document.querySelectorAll("#choices button").forEach(btn => {
    btn.disabled = true;
  });
}

// Show results on screen with Submit and Play Again buttons
function showResults() {
  if (totalQuestions === 0) {
    alert("You haven't answered any questions yet!");
    return;
  }

  const pct = ((score / totalQuestions) * 100).toFixed(1);
  const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `
    <h3>Results for ${playerName}</h3>
    <p>You got <strong>${score}</strong> out of ${totalQuestions} attempts correct</p>
    <p>Grade: <b>${pct}%</b></p>
    `;
    scoreboard.style.display = "block";


  const submitBtn = document.getElementById("submit-btn");
  const playAgainBtn = document.getElementById("play-again-btn");
  submitBtn.style.display = "inline-block";
  playAgainBtn.style.display = "inline-block";

  document.getElementById("game").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("see-results-btn").style.display = "none";

  submitBtn.disabled = false;
  submitBtn.textContent = "Submit to Leaderboard";

  submitBtn.onclick = () => {
    // TODO: Replace this with backend submission code
    alert("Submitted to leaderboard (placeholder).");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitted";
  };

  playAgainBtn.onclick = () => {
    score = 0;
    totalQuestions = 0;
    scoreboard.style.display = "none";
    submitBtn.style.display = "none";
    playAgainBtn.style.display = "none";

    document.getElementById("game").style.display = "block";
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("see-results-btn").style.display = "inline-block";

    showBird();
  };
}

// Start the game after entering player name
function startGame() {
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value.trim();
  if (!name) return alert("Please enter your name to begin.");
  playerName = name;

  document.getElementById("welcome").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("about").style.display = "none";

  // Show the Next and See Results buttons only after name is entered
  document.getElementById("next-btn").style.display = "inline-block";
  document.getElementById("see-results-btn").style.display = "inline-block";

  showBird();
}


// Event listeners
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("next-btn").addEventListener("click", showBird);
document.getElementById("see-results-btn").addEventListener("click", showResults);

// Initial UI setup
document.getElementById("score").style.display = "none";
document.getElementById("scoreboard").style.display = "none";
document.getElementById("game").style.display = "none";
document.getElementById("next-btn").style.display = "none";
document.getElementById("see-results-btn").style.display = "none";

document.getElementById("next-btn").disabled = true;
