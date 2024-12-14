

// Player variables
let player;
let playerSpeed = 5;
let playerRadius = 20;

// Obstacle variables
let obstacles = [];
let obstacleSpeed = 3;
let spawnInterval = 60; // Frames between obstacle spawns
let frameCount = 0;

// Game variables
let gameOver = false;
let score = 0;

function setup() 
{
  createCanvas(500, 600);
  // get a random speed when it first starts
  createCanvas(600, 500); 
  player = new Player();
}

function draw() {
  background(0);

  // Display the score
  fill(255);
  textSize(24);
  text("Score: " + score, 20, 30);

  // If the game is over, display a game over message
  if (gameOver) {
    fill(255, 0, 0);
    textSize(48);
    text("GAME OVER :(", width / 2 - 150, height / 2);
    noLoop(); // Stop the game
    return;
  }

  // Update and display the player
  player.update();
  player.show();

  // Spawn obstacles at regular intervals
  if (frameCount % spawnInterval == 0) {
    let obstacle = new Obstacle();
    obstacles.push(obstacle);
  }

  // Update and display obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].show();

    // Check for collision with the player
    if (obstacles[i].hits(player)) {
      gameOver = true;
    }

    // Remove obstacles that go off the screen
    if (obstacles[i].offScreen()) {
      obstacles.splice(i, 1);
      score++;
    }
  }

  // Increment frame count
  frameCount++;
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - playerRadius - 10;
  }

  update() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= playerSpeed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - playerRadius) {
      this.x += playerSpeed;
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, playerRadius * 2);
  }
}

class Obstacle {
  constructor() {
    this.x = random(width);
    this.y = -20; // Start above the canvas
    this.width = random(40, 80);
    this.height = random(20, 40);
  }

  update() {
    this.y += obstacleSpeed;
  }

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }

  offScreen() {
    return this.y > height;
  }

  hits(player) {
    let distance = dist(this.x + this.width / 2, this.y + this.height / 2, player.x, player.y);
    return distance < playerRadius + this.width / 2;
  }
}

