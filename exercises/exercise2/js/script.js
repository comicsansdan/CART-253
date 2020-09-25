/**************************************************
Exercise 2
Daniel Cacatian

This activity consist of creating a simulation where there are conditionals, interactivity, loops and an image!
**************************************************/

// VARIABLES //////////////////////////////////////
let bg = {
  r: 0,
  g: 0,
  b: 0,
}

let gameTitle = {
  x: 50,
  y:50,
  fill: 255,
  size: 20,
  writing: 'DODGE THE CLOWN',
}

let gameInstructions = {
  x: 50,
  y:70,
  fill: 255,
  size: 18,
  writing: 'CLICK mouse to increase difficulty (x5)',
}

let gameOver = {
  x: 0,
  y: 0,
  fill: 0,
  size: 30,
  writing: 'GAME OVER'
}

let clown = {
  x: 0,
  y: 0,
  size: 300,
  image: undefined,
  speedX: 20,
  speedY: 20,
  maxSpeed: 60,
  maxSize: 600,
}

function preload() {
  clown.image = loadImage("assets/images/clown.png")
}

let user = {
  x: 0,
  y: 0,
  size: 50,
}

// setup()
//
// Setup that contains code for the canvas and the random spawn for the clown.
function setup() {

  createCanvas(windowWidth, windowHeight);

  noStroke();

  clown.y = random(0,height);

}

// draw()
//
// Draw() consists of all the shapes, background and animations.
function draw() {

  background(bg.r, bg.g, bg.b);

  // GAME OVER /////////////////////////////////////////////////////////////////
  //Check for getting caught by the clown
  let d = dist(user.x, user.y, clown.x, clown.y);
  if (d < clown.size/2 + user.size/2) {
    bg.r = 255;
    background(bg.r, bg.g, bg.b);

    noLoop();

    //Game Over text
    gameOver.x = width/2;
    gameOver.y = height/2;

    push();
    textAlign(CENTER);
    textSize(gameOver.size);
    fill(gameOver.fill);
    text(gameOver.writing, gameOver.x, gameOver.y);
    pop();
  }

  // USER ///////////////////////////////////////////////////////////////////////////
  //Display user & controls
  user.x = mouseX;
  user.y = mouseY;

  ellipse(mouseX, mouseY, user.size);

  // CLOWN (VILLAIN) /////////////////////////////////////////////////////////////////
  //Clown's mouvement (X axis)
  clown.x += clown.speedX;
  if (clown.x > width){
      clown.speedX = -clown.speedX;
    }
    if (clown.x < 0){
        clown.speedX = -clown.speedX;
      }

  //Clown's mouvement controls (Y axis)
  clown.y += clown.speedY;
  if (clown.y > height){
    clown.speedY = -clown.speedY;
  }
  if (clown.y < 0){
    clown.speedY = -clown.speedY;
  }

  //Display clown image
  imageMode(CENTER);
  image(clown.image, clown.x, clown.y, clown.size, clown.size);

  // TEXT /////////////////////////////////////////////////////////////////
  // Title of the game
  textSize(gameTitle.size);
  fill(gameTitle.fill);
  text(gameTitle.writing, gameTitle.x, gameTitle.y);

  // Let's player know how to change the difficulty
  textSize(gameInstructions.size);
  fill(gameInstructions.fill);
  text(gameInstructions.writing, gameInstructions.x, gameInstructions.y);

}

// mousePressed()
//
// mousePressed() allows the user to higher the difficulty
function mousePressed() {
  //Increase clown size
  clown.size += 50;
  clown.size = constrain(clown.size, 300, clown.maxSize);

  //Increase clown speed
  clown.speedX *= 2;
  clown.speedX = constrain(clown.speedX, -50, clown.maxSpeed);

  clown.speedY *= 1.5;
  clown.speedY = constrain(clown.speedY, -50, clown.maxSpeed);

  //Difficulty indicator (the reder the harder)
  bg.r += 50;

}
