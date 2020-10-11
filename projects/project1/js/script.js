/**************************************************
Project 1 : Until Nightfall
Daniel Cacatian

This project is a small little game puzzle where the player has to figure out how to survive the night! Its a race against the sun.
**************************************************/

// VARIABLES ////////////////////////////////////////////////////////////////////
let bg = {
  r: 248,
  g: 177,
  b: 149
}

let player = {
  x: 0,
  y: 0,
  speed: 5,
  image: undefined,
  size: 120,
}

let sun = {
  x: 0,
  y: 0,
  size: 1500,
  alpha: 0.5,
  speed: 2,
}

let inventory = {
  x: 100,
  y: 25,
  width: 500,
  height: 150,
  image: undefined,
  imageX: 50,
  imageY: 50,
  imageSize: 100,
}

let tree = {
  x: 0,
  y: 0,
  width: 150,
  height: 2000,
}

let stump = {
  x: 0,
  y: 0,
  width: 150,
  height: 250,
}

let floor = {
  x: 0,
  y: 0,
  width: undefined,
  height: 100,
}

let tent = {
  x: 0,
  y: 0,
  size: 600,
  image: undefined,
  imageFire: undefined,
}

let axe = {
  x: 0,
  y: 0,
  image: undefined,
  size: 100,
}

let wood = {
  x: undefined,
  y: undefined,
  image: undefined,
  size: 100,
}

let forest = {
  x: undefined,
  y: undefined,
  image: undefined,
  size: 1950,
}

let axeSFX;
let chopSFX;
let fireSFX;
let nightSFX;

let state = `title`;

function preload() {
  //Preload IMAGES
  tent.image = loadImage(`assets/images/tent.png`);
  player.image = loadImage(`assets/images/player_R.png`);
  inventory.image = loadImage(`assets/images/inventory.png`);
  axe.image = loadImage(`assets/images/axe.png`);
  wood.image = loadImage(`assets/images/wood.png`);
  loadImage(`assets/images/player_L.png`);
  tent.imageFire = loadImage(`assets/images/tent_F.png`);
  forest.image = loadImage(`assets/images/background.png`);

  //Preload SOUND
  axeSFX = loadSound(`assets/sounds/axeAcquired.wav`);
  chopSFX = loadSound(`assets/sounds/chop.wav`);
  fireSFX = loadSound(`assets/sounds/fire.wav`);
  nightSFX = loadSound(`assets/sounds/nightfall.wav`)
};


// SETUP ////////////////////////////////////////////////////////////////////
//
// Contains the canvas, and the starting positions of the objects
function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke();

  objectSetup();

}

// STARTING POSITIONS ///////////////////////////////////////////////////////
//Function that gives the starting positions for objects
function objectSetup() {
  // Player starting position
  player.x = width / 2;
  player.y = height / 2 * 1.65;

  // Tree starting position
  tree.x = width / 6 * 5.5;
  tree.y = height;

  // Stump starting position
  stump.x = width / 10;
  stump.y = height;

  // Sun starting postion
  sun.x = width / 2;
  sun.y = height;

  // Floor starting postion
  floor.x = width / 2;
  floor.y = height;

  // Tent starting postion
  tent.x = width / 2;
  tent.y = height / 2 * 1.65;

  // Axe starting postion
  axe.x = width / 10 + 60;
  axe.y = height - 190;

  // Forest starting postion
  forest.x = width / 2;
  forest.y = height / 2 * 1.3;

}

// DRAW ////////////////////////////////////////////////////////////////////
//
// Contains everything else, the title, simulation, background, endings, etc.
function draw() {
  background(bg.r, bg.g, bg.b);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `fire`) {
    goodEnding();
  } else if (state === `noFire`) {
    badEnding();
  }


}

// STATES ////////////////////////////////////////////////////////////////////
//Functions that activate when a different state occurs
//Title state
function title() {
  header();
  instructions();
  tip();
}

//Simulation state
function simulation() {
  display();
  environment();
  displayAxe();
  displayTent();
  displayPlayer();
  controls();
  movement();
  collision();
}

//Good ending state
function goodEnding() {
  fire();
}

//Bad ending state
function badEnding() {
  noFire();
}

// ENDINGS FUNCTIONS ////////////////////////////////////////////////////////////////////
//How the GOOD ending screen will be displayed
function fire() {
  background(53, 94, 126)
  environment();
  displayTentFire();
  good();
}

//How the BAD ending screen will be displayed
function noFire() {
  background(53, 94, 126);
  environment();
  displayTent();
  bad();
  tryAgain();
}


// DISPLAY FUNCTIONS ////////////////////////////////////////////////////////////////////
//Functions that allow objects to be displayed
// Displays the player, tree, stump, sun
function display() {
  //Display sun
  push();
  fill(255, 255, 217, 150);
  ellipse(sun.x, sun.y, sun.size)
  pop();

  //Display inventory
  push();
  fill(0, 0, 0, 100);
  rect(inventory.x, inventory.y, inventory.width, inventory.height, 20);
  image(inventory.image, inventory.imageX, inventory.imageY, inventory.imageSize, inventory.imageSize);

  //Display wood in inventory
  push();
  image(wood.image, wood.x, wood.y, wood.size, wood.size);
  pop();

}

//Displays the environment ONLY (trees, floor & tent)
function environment() {
  //Display background trees
  push();
  imageMode(CENTER);
  image(forest.image, forest.x, forest.y, forest.size, forest.size);
  pop();

  //Display tree
  push();
  fill(83, 53, 10);
  rectMode(CENTER);
  rect(tree.x, tree.y, tree.width, tree.height);
  pop();

  //Display stump
  push();
  fill(83, 53, 10);
  rectMode(CENTER);
  rect(stump.x, stump.y, stump.width, stump.height);
  pop();

  //Display floor
  floor.width = width;

  push();
  fill(19, 50, 12);
  rectMode(CENTER);
  rect(floor.x, floor.y, floor.width, floor.height);
  pop();

}

//Displays axe ONLY
function displayAxe() {
  //Display axe
  push();
  image(axe.image, axe.x, axe.y, axe.size, axe.size);
  pop();
}

//Displays tent WITHOUT bonfire
function displayTent() {
  push();
  imageMode(CENTER);
  image(tent.image, tent.x, tent.y, tent.size, tent.size);
  pop();
}

//Displays tent WITH bonfire
function displayTentFire() {
  push();
  imageMode(CENTER);
  image(tent.imageFire, tent.x, tent.y, tent.size, tent.size);
  pop();
}

//Displays player
function displayPlayer() {
  push();
  image(player.image, player.x, player.y, player.size, player.size);
  pop();
}

// TEXT FUNCTIONS ///////////////////////////////////////////////////////////////////////
// Contains functions that have text only
//Title text
function header() {
  push();
  textSize(100);
  fill(53, 94, 126);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`- UNTIL NIGHTFALL -`, width / 2, height / 2);
  pop();
}

//Instructions text
function instructions() {
  push();
  textSize(54);
  fill(53, 94, 126);
  textStyle(ITALIC)
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Build a bonfire before night to survive... Press any key to start`, width / 2, height / 2 + 100, 1000, 150);
  pop();
}

//Controls text
function tip() {
  push();
  textSize(24);
  fill(53, 94, 126);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Controls: Use WASD or ArrowKeys to move LEFT or RIGHT`, width / 2, height / 2 * 1.9);
  pop();
}

//Good ending text
function good() {
  push();
  textSize(100);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`- YOU SURVIVED THE NIGHT! -`, width / 2, height / 2);
  pop();
}

//Bad ending text
function bad() {
  push();
  textSize(80);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`YOU DIDN'T SURVIVE THE NIGHT! :(`, width / 2, height / 2, 900, 300);
  pop();
}

function tryAgain() {
  push();
  textSize(54);
  fill(255);
  textStyle(ITALIC)
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Try again?`, width / 2, height / 2 + 120, 1000, 150);
  pop();
}


// MOVEMENT/CHANGE FUNCTION ////////////////////////////////////////////////////////////////////
//Functions to have movement and change occur
//Allows movement to certain objects
function movement() {
  //Sun set movement
  sun.y += 0.6;

  //Background change
  bg.r = constrain(bg.r, 53, 248);
  bg.r += -0.2;
  bg.g = constrain(bg.g, 94, 177);
  bg.g += -0.2;
  bg.b = constrain(bg.b, 126, 149);
  bg.b += -0.2;

}

// PLAYER CONTROLS FUNCTION /////////////////////////////////////////////////////////////
//Function that allows the player to control themselves with either the arrow keys or WASD
function controls() {
  //Movement constrain (doesn't go out of bounds)
  player.x = constrain(player.x, 250, 1600);
  //Right movement
  if (keyIsDown(39)) {
    player.x += player.speed;
    player.image = loadImage(`assets/images/player_R.png`)
  } else if (keyIsDown(68)) {
    player.x += player.speed;
    player.image = loadImage(`assets/images/player_R.png`);
  }
  //Left movement
  if (keyIsDown(37)) {
    player.x += -player.speed;
    player.image = loadImage(`assets/images/player_L.png`);
  } else if (keyIsDown(65)) {
    player.x += -player.speed;
    player.image = loadImage(`assets/images/player_L.png`);
  }
}

// COLLISION/CHANGE STATE FUNCTION /////////////////////////////////////////////////////////////////
//Detects collision with various objects that will change the current state
function collision() {
  //Collision with axe
  let d1 = dist(player.x, player.y, axe.x, axe.y);
  if (d1 < player.size / 2 + axe.size / 2) {
    axe.x = 200;
    axe.y = 50;
    axeSFX.play();
  }
  //Collision with tree (right)
  if (player.x === 1600 && axe.x === 200) {
    tree.height = 250;
    wood.x = 325;
    wood.y = 50;
    if (!chopSFX.isPlaying()) {
      chopSFX.play();
    }
  }
  //Collision with tree (right)
  if (wood.x === 325 && player.x === width / 2) {
    state = `fire`
    if (!fireSFX.isPlaying()) {
      fireSFX.loop();
    }
  }
  //Turns night time
  if (bg.r < 56) {
    state = `noFire`;
    if (!nightSFX.isPlaying()) {
      nightSFX.loop();
    }
  }

}

// START BUTTON FUNCTION ///////////////////////////////////////////////////////////
function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
