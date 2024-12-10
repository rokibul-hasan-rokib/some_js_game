const elements = [
    { symbol: "H", name: "Hydrogen", clue: "This element is the lightest and most abundant in the universe." },
    { symbol: "He", name: "Helium", clue: "This element is used in balloons to make them float." },
    { symbol: "W", name: "Tungsten", clue: "This element is used in light bulbs." },
    { symbol: "O", name: "Oxygen", clue: "Essential for breathing, this element makes up 21% of Earth's atmosphere." },
    // Add more elements here...
  ];
  
  let score = 0;
  let lives = 3;
  let timer = 30;
  let currentClueIndex = 0;
  let gameInterval;
  
  const clueBox = document.getElementById("clue");
  const periodicTable = document.getElementById("periodic-table");
  const scoreDisplay = document.getElementById("score");
  const livesDisplay = document.getElementById("lives");
  const timerDisplay = document.getElementById("timer");
  const startGameBtn = document.getElementById("start-game");
  
  function createTable() {
    periodicTable.innerHTML = "";
    elements.forEach((element, index) => {
      const div = document.createElement("div");
      div.className = "element";
      div.textContent = element.symbol;
      div.dataset.index = index;
      div.addEventListener("click", checkAnswer);
      periodicTable.appendChild(div);
    });
  }
  
  function startGame() {
    score = 0;
    lives = 3;
    timer = 30;
    currentClueIndex = 0;
  
    updateUI();
    nextClue();
  
    gameInterval = setInterval(() => {
      timer--;
      if (timer <= 0) {
        endGame();
      }
      timerDisplay.textContent = timer;
    }, 1000);
  }
  
  function nextClue() {
    if (currentClueIndex >= elements.length) {
      endGame();
      return;
    }
    clueBox.textContent = elements[currentClueIndex].clue;
  }
  
  function checkAnswer(e) {
    const selectedIndex = parseInt(e.target.dataset.index);
    if (selectedIndex === currentClueIndex) {
      score++;
      e.target.classList.add("correct");
    } else {
      lives--;
      e.target.classList.add("wrong");
    }
    setTimeout(() => e.target.classList.remove("correct", "wrong"), 500);
  
    updateUI();
    if (lives > 0) {
      currentClueIndex++;
      nextClue();
    } else {
      endGame();
    }
  }
  
  function updateUI() {
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
  }
  
  function endGame() {
    clearInterval(gameInterval);
    alert(`Game Over! Your score: ${score}`);
  }
  
  startGameBtn.addEventListener("click", () => {
    createTable();
    startGame();
  });
  