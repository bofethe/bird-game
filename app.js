let currentBird = {};
let score = 0;
let totalQuestions = 0;
let playerName = "";
let gameMode = null;
let timerInterval = null;
let timeLeft = 0;
let incorrectAnswers = [];

document.addEventListener("DOMContentLoaded", () => {
  const birdCountEl = document.getElementById("bird-count");
  if (birdCountEl && Array.isArray(birds)) {
    birdCountEl.textContent = birds.length;
  }
});

document.getElementById("free-btn").onclick = () => startMode("free");
document.getElementById("time-btn").onclick = () => startMode("time");
document.getElementById("sudden-btn").onclick = () => startMode("sudden");

function startMode(mode) {
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value.trim();
  if (!name) {
    alert("Please enter your name to begin.");
    return;
  }

  playerName = name; // Set the name before starting

  gameMode = mode;
  document.getElementById("mode-select").style.display = "none";

  if (gameMode === "time") {
    document.getElementById("timer-container").style.display = "block";
    startTimer(120); // 2-minute countdown
  } else {
    document.getElementById("timer-container").style.display = "none";
  }

  startGame();
}

function startTimer(seconds) {
  const timerEl = document.getElementById("timer");
  clearInterval(timerInterval);
  timeLeft = seconds;
  timerEl.textContent = formatTime(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      showResults();
    }
  }, 1000);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function getRandomBird() {
  const randomIndex = Math.floor(Math.random() * birds.length);
  return birds[randomIndex];
}

function shuffleChoices(correctBird) {
  const correctName = correctBird.name;
  let candidates = birds.filter(
    (b) => b.family === correctBird.family && b.name !== correctName
  );

  if (candidates.length < 2) {
    const orderCandidates = birds.filter(
      (b) => b.order === correctBird.order && b.name !== correctName
    );
    candidates = [...new Set([...candidates, ...orderCandidates])];
  }

  while (candidates.length < 2) {
    const randomBird = getRandomBird();
    if (
      randomBird.name !== correctName &&
      !candidates.some((b) => b.name === randomBird.name)
    ) {
      candidates.push(randomBird);
    }
  }

  const distractors = candidates.sort(() => Math.random() - 0.5).slice(0, 2);
  const choices = [correctName, ...distractors.map((b) => b.name)];

  return choices.sort(() => Math.random() - 0.5);
}

function showBird() {
  if (!playerName) return;

  currentBird = getRandomBird();
  totalQuestions++;
  const mediaDiv = document.getElementById("media");

  let imageSrc = "";
  if (currentBird.images) {
    const genderKeys = Object.keys(currentBird.images);
    const selectedGender =
      genderKeys[Math.floor(Math.random() * genderKeys.length)];
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
  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice-btn";
    btn.onclick = () => checkAnswer(choice, btn);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(selected, button) {
  const isCorrect = selected === currentBird.name;

  // Disable all buttons and assign classes
  document.querySelectorAll("#choices button").forEach((btn) => {
    btn.classList.add("choice-disabled");
    if (btn.textContent === currentBird.name) {
      btn.classList.add("choice-correct");
    } else {
      btn.classList.add("choice-incorrect");
    }
    btn.disabled = true;
  });

  // Style the image container
  const mediaImg = document.querySelector("#media img");
  mediaImg.classList.add(isCorrect ? "img-correct" : "img-incorrect");

  if (isCorrect) {
    score++;
  } else {
    incorrectAnswers.push({
      correct: currentBird.name,
      audio: currentBird.audio,
      image:
        currentBird.image ||
        (currentBird.images && Object.values(currentBird.images)[0]),
      selected: selected,
    });
  }

  if (gameMode === "sudden" && !isCorrect) {
    setTimeout(showResults, 1000);
    return;
  }

  setTimeout(() => {
    showBird();
  }, 1000);
}

function disableButtons() {
  document.querySelectorAll("#choices button").forEach((btn) => {
    btn.disabled = true;
  });
}

function showResults() {
  if (timerInterval) clearInterval(timerInterval);
  if (totalQuestions === 0) {
    alert("You haven't answered any questions yet!");
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("play-again-btn").style.display = "none";
    document.getElementById("home-btn").style.display = "none";
    return;
  }

  // Hide game buttons
  document.getElementById("quit-btn").style.display = "none";

  const pct = ((score / totalQuestions) * 100).toFixed(1);
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = `
    <h3>Results for ${playerName}</h3>
    <p>You got <strong>${score}</strong> out of ${totalQuestions} attempts correct</p>
    <p>Grade: <b>${pct}%</b></p>
  `;

  if (incorrectAnswers.length > 0) {
    scoreboard.innerHTML += `<h4>Birds you missed:</h4>`;
    incorrectAnswers.forEach((entry) => {
      scoreboard.innerHTML += `
        <div style="margin-bottom: 1rem; text-align: left;">
          <strong>You guessed:</strong> ${entry.selected}<br>
          <strong>Correct:</strong> ${entry.correct}<br>
          <img src="${entry.image}" alt="${entry.correct}" width="200" /><br>
          <audio controls src="${entry.audio}"></audio>
        </div>
      `;
    });
  }

  scoreboard.style.display = "block";

  const submitBtn = document.getElementById("submit-btn");
  const playAgainBtn = document.getElementById("play-again-btn");
  const homeBtn = document.getElementById("home-btn");

  // Only show submit button for Time Mode or Sudden Death
  if (gameMode === "time" || gameMode === "sudden") {
    submitBtn.style.display = "inline-block";
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit to Leaderboard";

    submitBtn.onclick = () => {
      alert("This function is still in development. Check back later.");
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitted";
    };
  } else {
    submitBtn.style.display = "none";
  }

  playAgainBtn.style.display = "inline-block";
  playAgainBtn.textContent = "Restart";
  playAgainBtn.onclick = () => {
    score = 0;
    totalQuestions = 0;
    incorrectAnswers = [];

    scoreboard.style.display = "none";
    submitBtn.style.display = "none";
    playAgainBtn.style.display = "none";
    homeBtn.style.display = "none";

    document.getElementById("game").style.display = "block";
    document.getElementById("quit-btn").style.display = "inline-block";

    if (gameMode === "time") {
      document.getElementById("timer-container").style.display = "block";
      startTimer(120); // restart the timer
    }
    showBird();
  };

  homeBtn.style.display = "inline-block";
  homeBtn.textContent = "Return to Home";
  homeBtn.onclick = () => {
    // Reset game state
    score = 0;
    totalQuestions = 0;
    incorrectAnswers = [];
    playerName = "";
    gameMode = null;
    clearInterval(timerInterval);

    // Hide all dynamic/game-related UI
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("timer-container").style.display = "none";
    document.getElementById("quit-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("play-again-btn").style.display = "none";
    document.getElementById("home-btn").style.display = "none";

    // Show all initial sections
    document.getElementById("app-container").style.display = "block";
    document.getElementById("start").style.display = "block";
    document.getElementById("mode-select").style.display = "block";
    document.getElementById("details").style.display = "block";

    // Reset the name input
    document.getElementById("name-input").value = "";
  };
}

function startGame() {
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("details").style.display = "none";
  document.getElementById("quit-btn").style.display = "inline-block";

  showBird();
}

// Event Listeners
document.getElementById("quit-btn").addEventListener("click", showResults);

// Initial UI Setup
document.getElementById("scoreboard").style.display = "none";
document.getElementById("game").style.display = "none";
document.getElementById("play-again-btn").style.display = "none";
document.getElementById("home-btn").style.display = "none";
