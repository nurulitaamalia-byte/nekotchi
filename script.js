const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const catSprites = {
  happy: "sprites/cat-happy.png",
  hungry: "sprites/cat-hungry.png",
  sleepy: "sprites/cat-sleepy.png",
  dirty: "sprites/cat-dirty.png",
  sick: "sprites/cat-sick.png",
  dead: "sprites/cat-dead.png"
};

let currentMood = "happy";
const catImage = new Image();
catImage.src = catSprites[currentMood];

function drawCat() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(catImage, 60, 60, 80, 80);
}

function changeMood(mood) {
  if (catSprites[mood]) {
    currentMood = mood;
    catImage.src = catSprites[mood];
  }
}

setInterval(drawCat, 100);
