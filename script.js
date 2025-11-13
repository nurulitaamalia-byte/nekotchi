const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const catSprites = {
  happy: "sprites/cat-happy.png",
  hungry: "sprites/cat-hungry.png",
  sleepy: "sprites/cat-sleepy.png",
  dirty: "sprites/cat-dirty.png",
  sick: "sprites/cat-sick.png",
  dead: "sprites/cat-dead.png",
};

let catImage = new Image();
catImage.src = catSprites.happy;

// Status awal
let hunger = 100;
let energy = 100;
let cleanliness = 100;
let happiness = 100;
let score = 0;
let alive = true;

function drawCat() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(catImage, 60, 60, 80, 80);
}

function updateStats() {
  document.getElementById("hunger").textContent = hunger;
  document.getElementById("energy").textContent = energy;
  document.getElementById("cleanliness").textContent = cleanliness;
  document.getElementById("happiness").textContent = happiness;
  document.getElementById("score").textContent = score;
}

function changeMood(mood) {
  catImage.src = catSprites[mood] || catSprites.happy;
}

function feed() {
  if (!alive) return;
  hunger = Math.min(hunger + 20, 100);
  changeMood("happy");
}

function sleep() {
  if (!alive) return;
  energy = Math.min(energy + 25, 100);
  changeMood("sleepy");
}

function clean() {
  if (!alive) return;
  cleanliness = Math.min(cleanliness + 25, 100);
  changeMood("happy");
}

function play() {
  if (!alive) return;
  happiness = Math.min(happiness + 20, 100);
  score += 10;
  changeMood("happy");
}

// Status menurun seiring waktu
setInterval(() => {
  if (!alive) return;

  hunger -= 2;
  energy -= 1;
  cleanliness -= 1;
  happiness -= 1;

  if (hunger < 40) changeMood("hungry");
  if (energy < 30) changeMood("sleepy");
  if (cleanliness < 30) changeMood("dirty");
  if (happiness < 30) changeMood("sick");

  if (hunger <= 0 || energy <= 0 || cleanliness <= 0 || happiness <= 0) {
    alive = false;
    changeMood("dead");
    alert("💀 Neko kamu sudah mati... Main lagi ya!");
  }

  if (alive) {
    score += 1; // bertambah terus kalau masih hidup
  }

  updateStats();
}, 2000);

setInterval(drawCat, 100);
