const elements = [
    { symbol: "H", name: "Hydrogen", clue: "Lightest element in the universe." },
    { symbol: "He", name: "Helium", clue: "Used in balloons to make them float." },
    { symbol: "Li", name: "Lithium", clue: "Used in rechargeable batteries." },
    { symbol: "Be", name: "Beryllium", clue: "Found in gemstones like emeralds." },
    { symbol: "B", name: "Boron", clue: "Used in borosilicate glassware." },
    { symbol: "C", name: "Carbon", clue: "Essential for all known life." },
    { symbol: "N", name: "Nitrogen", clue: "Main component of Earth's atmosphere." },
    { symbol: "O", name: "Oxygen", clue: "Makes up 21% of Earth's atmosphere." },
    { symbol: "F", name: "Fluorine", clue: "Used in toothpaste to prevent cavities." },
    { symbol: "Ne", name: "Neon", clue: "Used in glowing advertising signs." },
    { symbol: "Na", name: "Sodium", clue: "Found in table salt." },
    { symbol: "Mg", name: "Magnesium", clue: "Used in fireworks for bright white flames." },
    { symbol: "Al", name: "Aluminum", clue: "Lightweight metal used in cans and foil." },
    { symbol: "Si", name: "Silicon", clue: "Used in computer chips and glass." },
    { symbol: "P", name: "Phosphorus", clue: "Found in matches and fertilizers." },
    { symbol: "S", name: "Sulfur", clue: "Used in gunpowder and matches." },
    { symbol: "Cl", name: "Chlorine", clue: "Used in water disinfection." },
    { symbol: "Ar", name: "Argon", clue: "Inert gas used in light bulbs." },
    { symbol: "K", name: "Potassium", clue: "Essential nutrient in bananas." },
    { symbol: "Ca", name: "Calcium", clue: "Strengthens bones and teeth." },
    { symbol: "Sc", name: "Scandium", clue: "Used in aerospace materials." },
    { symbol: "Ti", name: "Titanium", clue: "Known for its strength and lightness." },
    { symbol: "V", name: "Vanadium", clue: "Used to make steel alloys." },
    { symbol: "Cr", name: "Chromium", clue: "Gives rubies their red color." },
    { symbol: "Mn", name: "Manganese", clue: "Used in steel production." },
    { symbol: "Fe", name: "Iron", clue: "Major component of steel." },
    { symbol: "Co", name: "Cobalt", clue: "Used in blue pigments and batteries." },
    { symbol: "Ni", name: "Nickel", clue: "Found in coins and stainless steel." },
    { symbol: "Cu", name: "Copper", clue: "Excellent conductor of electricity." },
    { symbol: "Zn", name: "Zinc", clue: "Used to galvanize steel." },
    { symbol: "Ga", name: "Gallium", clue: "Melts in your hand at low temperatures." },
    { symbol: "Ge", name: "Germanium", clue: "Used in semiconductors." },
    { symbol: "As", name: "Arsenic", clue: "Historically used as a poison." },
    { symbol: "Se", name: "Selenium", clue: "Used in photocopiers and supplements." },
    { symbol: "Br", name: "Bromine", clue: "Liquid at room temperature." },
    { symbol: "Kr", name: "Krypton", clue: "Used in fluorescent lights." },
    { symbol: "Rb", name: "Rubidium", clue: "Used in atomic clocks." },
    { symbol: "Sr", name: "Strontium", clue: "Used in fireworks for red flames." },
    { symbol: "Y", name: "Yttrium", clue: "Used in LED displays." },
    { symbol: "Zr", name: "Zirconium", clue: "Used in nuclear reactors." },
    { symbol: "Nb", name: "Niobium", clue: "Used in superconducting magnets." },
    { symbol: "Mo", name: "Molybdenum", clue: "Used in high-strength steel alloys." },
    { symbol: "Tc", name: "Technetium", clue: "Radioactive element used in medicine." },
    { symbol: "Ru", name: "Ruthenium", clue: "Used in electrical contacts." },
    { symbol: "Rh", name: "Rhodium", clue: "One of the rarest metals." },
    { symbol: "Pd", name: "Palladium", clue: "Used in catalytic converters." },
    { symbol: "Ag", name: "Silver", clue: "Highly conductive and used in jewelry." },
    { symbol: "Cd", name: "Cadmium", clue: "Used in batteries and pigments." },
    { symbol: "In", name: "Indium", clue: "Used in touch screens and LEDs." },
    { symbol: "Sn", name: "Tin", clue: "Used to coat other metals." },
    { symbol: "Sb", name: "Antimony", clue: "Used in flame retardants." },
    { symbol: "Te", name: "Tellurium", clue: "Used in alloys and semiconductors." },
    { symbol: "I", name: "Iodine", clue: "Essential for thyroid health." },
    { symbol: "Xe", name: "Xenon", clue: "Used in car headlights and anesthesia." },
    { symbol: "Cs", name: "Cesium", clue: "Used in atomic clocks." },
    { symbol: "Ba", name: "Barium", clue: "Used in medical imaging." },
    { symbol: "La", name: "Lanthanum", clue: "Used in camera lenses." },
    { symbol: "Ce", name: "Cerium", clue: "Used in self-cleaning ovens." },
    { symbol: "Pr", name: "Praseodymium", clue: "Used in aircraft engines." },
    { symbol: "Nd", name: "Neodymium", clue: "Used in powerful magnets." },
    { symbol: "Pm", name: "Promethium", clue: "Radioactive element used in watches." },
    { symbol: "Sm", name: "Samarium", clue: "Used in magnets and cancer treatment." },
    { symbol: "Eu", name: "Europium", clue: "Used in TV screens for red and blue colors." },
    { symbol: "Gd", name: "Gadolinium", clue: "Used in MRI contrast agents." },
    { symbol: "Tb", name: "Terbium", clue: "Used in green phosphors for screens." },
    { symbol: "Dy", name: "Dysprosium", clue: "Used in hard disk drives." },
    { symbol: "Ho", name: "Holmium", clue: "Used in lasers and magnets." },
    { symbol: "Er", name: "Erbium", clue: "Used in fiber optic cables." },
    { symbol: "Tm", name: "Thulium", clue: "Used in portable X-ray machines." },
    { symbol: "Yb", name: "Ytterbium", clue: "Used in atomic clocks." },
    { symbol: "Lu", name: "Lutetium", clue: "Used in PET scan detectors." },
    { symbol: "Hf", name: "Hafnium", clue: "Used in nuclear control rods." },
    { symbol: "Ta", name: "Tantalum", clue: "Used in electronics like capacitors." },
    { symbol: "W", name: "Tungsten", clue: "Used in light bulb filaments." },
    { symbol: "Re", name: "Rhenium", clue: "Used in jet engines." },
    { symbol: "Os", name: "Osmium", clue: "Densest naturally occurring element." },
    { symbol: "Ir", name: "Iridium", clue: "Used in spark plugs." },
    { symbol: "Pt", name: "Platinum", clue: "Used in catalytic converters." },
    { symbol: "Au", name: "Gold", clue: "Precious metal, highly conductive." },
    { symbol: "Hg", name: "Mercury", clue: "Only metal liquid at room temperature." },
    { symbol: "Tl", name: "Thallium", clue: "Used in medical imaging." },
    { symbol: "Pb", name: "Lead", clue: "Used in batteries and shielding." },
    { symbol: "Bi", name: "Bismuth", clue: "Used in cosmetics and medicines." },
    { symbol: "Po", name: "Polonium", clue: "Radioactive element found in tobacco." },
    { symbol: "At", name: "Astatine", clue: "Rare radioactive halogen." },
    { symbol: "Rn", name: "Radon", clue: "Radioactive gas found in homes." },
    { symbol: "Fr", name: "Francium", clue: "Extremely rare and radioactive." },
    { symbol: "Ra", name: "Radium", clue: "Used in luminous paints." },
    { symbol: "Ac", name: "Actinium", clue: "Used in radiation therapy." },
    { symbol: "Th", name: "Thorium", clue: "Used in nuclear reactors." },
    { symbol: "Pa", name: "Protactinium", clue: "Found in uranium ores." },
    { symbol: "U", name: "Uranium", clue: "Used as fuel in nuclear reactors." },
    { symbol: "Np", name: "Neptunium", clue: "Used in neutron detectors." },
    { symbol: "Pu", name: "Plutonium", clue: "Used in nuclear weapons." },
    { symbol: "Am", name: "Americium", clue: "Used in smoke detectors." },
    { symbol: "Cm", name: "Curium", clue: "Used in space exploration." },
    { symbol: "Bk", name: "Berkelium", clue: "Radioactive element synthesized in labs." },
    { symbol: "Cf", name: "Californium", clue: "Used in neutron radiography." },
    { symbol: "Es", name: "Einsteinium", clue: "Named after Albert Einstein." },
    { symbol: "Fm", name: "Fermium", clue: "Synthesized in nuclear explosions." },
    { symbol: "Md", name: "Mendelevium", clue: "Named after Dmitri Mendeleev." },
    { symbol: "No", name: "Nobelium", clue: "Named after Alfred Nobel." },
    { symbol: "Lr", name: "Lawrencium", clue: "Named after Ernest Lawrence." },
    { symbol: "Rf", name: "Rutherfordium", clue: "Named after Ernest Rutherford." },
    { symbol: "Db", name: "Dubnium", clue: "Named after Dubna, Russia." },
    { symbol: "Sg", name: "Seaborgium", clue: "Named after Glenn T. Seaborg." },
    { symbol: "Bh", name: "Bohrium", clue: "Named after Niels Bohr." },
    { symbol: "Hs", name: "Hassium", clue: "Named after the German state of Hesse." },
    { symbol: "Mt", name: "Meitnerium", clue: "Named after Lise Meitner." },
    { symbol: "Ds", name: "Darmstadtium", clue: "Named after Darmstadt, Germany." },
    { symbol: "Rg", name: "Roentgenium", clue: "Named after Wilhelm Roentgen." },
    { symbol: "Cn", name: "Copernicium", clue: "Named after Nicolaus Copernicus." },
    { symbol: "Nh", name: "Nihonium", clue: "Named after Japan (Nihon)." },
    { symbol: "Fl", name: "Flerovium", clue: "Named after the Flerov Laboratory." },
    { symbol: "Mc", name: "Moscovium", clue: "Named after Moscow, Russia." },
    { symbol: "Lv", name: "Livermorium", clue: "Named after Livermore, California." },
    { symbol: "Ts", name: "Tennessine", clue: "Named after Tennessee, USA." },
    { symbol: "Og", name: "Oganesson", clue: "Synthetic element with the highest atomic number." }
];


let score = 0;
let lives = 3;
let timer = 60; 
let level = 1;
let currentClueIndex = 0;
let gameInterval;
let correctAnswers = 0;

const clueBox = document.getElementById("clue");
const periodicTable = document.getElementById("periodic-table");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const timerDisplay = document.getElementById("timer");
const levelDisplay = document.getElementById("level");
const startGameBtn = document.getElementById("start-game");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const levelUpSound = document.getElementById("level-up-sound");
const congratulationsBtn = document.getElementById("congratulations-btn"); // The new button

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
  level = 1;
  timer = 60;
  currentClueIndex = 0;
  correctAnswers = 0;

  updateUI();
  createTable();
  nextClue();

  gameInterval = setInterval(() => {
    timer--;
    if (timer <= 0) {
      endGame();
    } else {
      timerDisplay.textContent = timer;
    }
  }, 1000);
}

function nextClue() {
  if (currentClueIndex >= elements.length) {
    currentClueIndex = 0; 
  }
  clueBox.textContent = elements[currentClueIndex].clue || "No clue available!";
}

function checkAnswer(e) {
  const selectedIndex = parseInt(e.target.dataset.index, 10);
  if (selectedIndex === currentClueIndex) {

    playSound(correctSound);
    score += 10;
    correctAnswers++; 
    e.target.classList.add("correct");
  } else {
  
    playSound(wrongSound);
    lives--;
    score = Math.max(0, score - 5); 
    e.target.classList.add("wrong");
  }
  
  setTimeout(() => e.target.classList.remove("correct", "wrong"), 500);
  
  updateUI();
  if (lives > 0 && timer > 0) {
    currentClueIndex++;
    nextClue();
  } else {
    endGame();
  }

  if (correctAnswers >= 5) { 
    levelUp();
  }
}

function levelUp() {
  level++; 
  correctAnswers = 0; 

  playSound(levelUpSound);
  alert(`Congratulations! You've reached level ${level}!`);
  congratulationsBtn.style.display = "block"; // Show the button
  congratulationsBtn.addEventListener("click", proceedToNextLevel);
}

function proceedToNextLevel() {
  congratulationsBtn.style.display = "none"; // Hide the button
  nextClue(); // Move to the next clue
}

function updateUI() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
  levelDisplay.textContent = level;
}

function endGame() {
  clearInterval(gameInterval);
  alert(`Game Over! Your final score: ${score}`);
}

function playSound(sound) {
  if (sound && typeof sound.play === "function") {
    sound.play();
  }
}

startGameBtn.addEventListener("click", startGame);