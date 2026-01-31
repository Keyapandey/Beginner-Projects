// ================= GAME STATE =================
let level = 1;
let colorsPerLevel = 5;
let bestScore = localStorage.getItem("bestScore") || 1;

let gameSequence = [];
let shuffledSequence = [];
let userSequence = [];

let acceptingInput = false;
let isPaused = false;


// ================= RANDOM COLOR =================
function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}


// ================= GENERATE SEQUENCE =================
function generateSequence() {
  gameSequence = [];
  for (let i = 0; i < colorsPerLevel; i++) {
    gameSequence.push(randomColor());
  }
}


// ================= SHOW SEQUENCE =================
function showSequence() {
  let index = 0;
  acceptingInput = false;
  isPaused = false;

  const interval = setInterval(() => {

    if (isPaused) return;

    document.body.style.backgroundColor = gameSequence[index];
    document.body.classList.add("glow");

    setTimeout(() => {
      document.body.classList.remove("glow");
    }, 300);

    index++;

    if (index === gameSequence.length) {
      clearInterval(interval);

      setTimeout(() => {
        document.body.style.backgroundColor = "#0f172a";
        showBoxes();
      }, 600);
    }
  }, 800);
}


// ================= SHOW BOXES =================
function showBoxes() {
  const container = document.getElementById("boxContainer");
  container.innerHTML = "";

  shuffledSequence = [...gameSequence].sort(() => Math.random() - 0.5);
  userSequence = [];

  shuffledSequence.forEach(color => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.dataset.color = color;

    box.addEventListener("click", () => handleBoxClick(box));
    container.appendChild(box);
  });

  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "none";
  document.getElementById("doneBtn").style.display = "block";

  document.getElementById("gameMessage").innerText = "Repeat the sequence";
  acceptingInput = true;
}


// ================= HANDLE BOX CLICK =================
function handleBoxClick(box) {
  if (!acceptingInput) return;

  const color = box.dataset.color;

  if (box.classList.contains("selected")) {
    const index = userSequence.indexOf(color);
    if (index !== -1) userSequence.splice(index, 1);

    box.classList.remove("selected");
    box.innerText = "";

    document.querySelectorAll(".color-box.selected")
      .forEach((b, i) => b.innerText = i + 1);

    return;
  }

  box.classList.add("selected");
  userSequence.push(color);
  box.innerText = userSequence.length;
}


// ================= RESET =================
function resetGame() {
  gameSequence = [];
  shuffledSequence = [];
  userSequence = [];
  acceptingInput = false;

  document.getElementById("boxContainer").innerHTML = "";
  document.getElementById("doneBtn").style.display = "none";

  document.getElementById("start").style.display = "inline-block";
  document.getElementById("stop").style.display = "inline-block";

  document.getElementById("gameMessage").innerText =
    "Click start to begin";
}


// ================= PLAY TICK =================
function playTick() {
  const tickSound = document.getElementById("tickSound");

  tickSound.pause();
  tickSound.currentTime = 0;
  tickSound.play();

  // cut sound early
  setTimeout(() => {
    tickSound.pause();
    tickSound.currentTime = 0;
  }, 250);
}


// ================= START GAME =================
function startChangingColor() {
  resetGame();

  const overlay = document.getElementById("countdownOverlay");
  const text = document.getElementById("countText");

  let count = 3;
  overlay.classList.remove("hidden");

  const timer = setInterval(() => {

    playTick();

    text.textContent = count === 0 ? "GO!" : count;

    text.style.animation = "none";
    void text.offsetWidth;
    text.style.animation = "popFade 0.8s ease";

    count--;

    if (count < 0) {
      clearInterval(timer);
      overlay.classList.add("hidden");

      generateSequence();
      showSequence();
    }

  }, 900);
}


// ================= LOAD =================
window.onload = () => {

  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");
  const doneBtn = document.getElementById("doneBtn");

  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");

  const sadSound = document.getElementById("sadSound");
  const winSound = document.getElementById("winSound");

  document.getElementById("bestScore").innerText =
    "Best: " + bestScore;

  // START
  startBtn.addEventListener("click", () => {
    if (isPaused) {
      isPaused = false;
      document.getElementById("gameMessage").innerText = "Resumed ▶️";
      return;
    }
    startChangingColor();
  });

  // PAUSE
  stopBtn.addEventListener("click", () => {
    isPaused = true;
    acceptingInput = false;
    document.getElementById("gameMessage").innerText = "Paused ⏸️";
  });

  // RESET
  resetBtn.addEventListener("click", () => {
    level = 1;
    colorsPerLevel = 5;
    isPaused = false;

    document.getElementById("levelText").innerText = "Level 1";
    document.body.style.backgroundColor = "#0f172a";
    resetGame();
  });

  // DONE
  doneBtn.addEventListener("click", () => {
    acceptingInput = false;

    sadSound.currentTime = 0;
    winSound.currentTime = 0;

    if (JSON.stringify(userSequence) === JSON.stringify(gameSequence)) {

      winSound.play();

      popupText.innerText = "Level Clear 🎉";
      popup.classList.remove("hidden");

      setTimeout(() => {
        popup.classList.add("hidden");

        level++;
        colorsPerLevel++;

        if (level > bestScore) {
          bestScore = level;
          localStorage.setItem("bestScore", bestScore);
          document.getElementById("bestScore").innerText =
            "Best: " + bestScore;
        }

        document.getElementById("levelText").innerText =
          `Level ${level}`;

        startChangingColor();
      }, 1800);

    } else {

      sadSound.play();

      const card = document.querySelector(".card");
      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 400);

      popupText.innerText = "Game Over 😢";
      popup.classList.remove("hidden");

      setTimeout(() => {
        popup.classList.add("hidden");
        level = 1;
        colorsPerLevel = 5;
        document.getElementById("levelText").innerText = "Level 1";
        resetGame();
      }, 2200);
    }
  });
};
