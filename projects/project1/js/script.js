/**************************************************
Project 1 : "Something fire themeed"
Daniel Cacatian

Here is a description of this template p5 project.
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
  image: `assets/images/axe.png`,
  size: 100,
}

let wood = {
  x: undefined,
  y: undefined,
  image: `assets/images/wood.png`,
  size: 100,
}

let state = `title`;

function preload() {
  tent.image = loadImage(`assets/images/tent.png`);
  player.image = loadImage(`assets/images/player_R.png`);
  inventory.image = loadImage(`assets/images/inventory.png`);
  axe.image = loadImage(`assets/images/axe.png`);
  wood.image = loadImage(`assets/images/wood.png`);
  loadImage(`assets/images/player_L.png`);
  tent.imageFire = loadImage(`assets/images/tent_F.png`);
};


// SETUP ////////////////////////////////////////////////////////////////////
//
// Description of setup() goes here.
function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke();

  objectSetup();

}

// STARTING POSITIONS ///////////////////////////////////////////////////////
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

}

// DRAW ////////////////////////////////////////////////////////////////////
//
// Description of draw() goes here.
function draw() {
  background(bg.r, bg.g, bg.b);

  if (state === `title`){
    title();
  } else if (state === `simulation`){
    simulation();
  } else if (state === `fire`){
    goodEnding();
  } else if (state === `noFire`){
    badEnding();
  }


}

// STATES ////////////////////////////////////////////////////////////////////
//Title state
function title(){
  header();
  instructions();
  tip();
}

function simulation(){
  display();
  environment();
  displayTent();
  displayPlayer();
  controls();
  movement();
  collision();
}

function goodEnding(){
  fire();
}

function badEnding(){
  noFire();
}

// ENDINGS ////////////////////////////////////////////////////////////////////
//How the GOOD ending screen will be displayed
function fire(){
  background(53, 94, 126)
  good();
  environment();
  displayTentFire();
}

//How the BAD ending screen will be displayed
function noFire(){
  background(53, 94, 126)
  bad();
  tryAgain();
  environment();
  displayTent();
}


// DISPLAY ////////////////////////////////////////////////////////////////////
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

  //Display axe
  push();
  image(axe.image, axe.x, axe.y, axe.size, axe.size);
  pop();

  //Display wood in inventory
  push();
  image(wood.image, wood.x, wood.y, wood.size, wood.size);
  pop();

}

//Displays the environment ONLY (trees, floor & tent)
function environment(){
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
  fill(11, 102, 35);
  rectMode(CENTER);
  rect(floor.x, floor.y, floor.width, floor.height);
  pop();

}

//Displays tent WITHOUT bonfire
function displayTent(){
push();
imageMode(CENTER);
image(tent.image, tent.x, tent.y, tent.size, tent.size);
pop();
}

//Displays tent WITH bonfire
function displayTentFire(){
push();
imageMode(CENTER);
image(tent.imageFire, tent.x, tent.y, tent.size, tent.size);
pop();
}

//Displays player
function displayPlayer(){
  push();
  image(player.image, player.x, player.y, player.size, player.size);
  pop();
}

// TEXT ///////////////////////////////////////////////////////////////////////
//Title text
function header(){
  push();
  textSize(100);
  fill(53, 94, 126);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`- UNTIL NIGHTFALL -`, width / 2, height / 2);
  pop();
}

function instructions(){
  push();
  textSize(54);
  fill(53, 94, 126);
  textStyle(ITALIC)
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Build a bonfire before night to survived... Press any key to start`, width / 2, height / 2+100, 1000, 150);
  pop();
}

//Controls text
function tip(){
  push();
  textSize(24);
  fill(53, 94, 126);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Controls: Use WASD or ArrowKeys to move LEFT or RIGHT`, width / 2, height / 2*1.9);
  pop();
}

function good(){
  push();
  textSize(100);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`- YOU SURVIVED THE NIGHT! -`, width / 2, height / 2);
  pop();
}

function bad(){
  push();
  textSize(80);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`YOU DIDN'T SURVIVE THE NIGHT! :(`, width / 2, height / 2, 900, 300);
  pop();
}

function tryAgain(){
  push();
  textSize(54);
  fill(255);
  textStyle(ITALIC)
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Try again?`, width / 2, height / 2+120, 1000, 150);
  pop();
}


// MOVEMENT/CHANGE ////////////////////////////////////////////////////////////////////
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

// PLAYER CONTROLS /////////////////////////////////////////////////////////////
//Allows the player to control themselves with either the arrow keys or WASD
function controls() {
  //Movement constrain (doesn't go out of bounds)
  player.x = constrain(player.x, 250, 1600);
  //Right movement
  if (keyIsDown(39)) {
    player.x += player.speed;
  } else if (keyIsDown(68)) {
    player.x += player.speed;
  }
  //Left movement
  if (keyIsDown(37)) {
    player.x += -player.speed;
  } else if (keyIsDown(65)) {
    player.x += -player.speed;
  }
}

// COLLISION/CHANGE STATE /////////////////////////////////////////////////////////////////
//Detects collision with various objects that will change the current state
function collision() {
  //Collision with axe
  let d1 = dist(player.x, player.y, axe.x, axe.y);
    if (d1 < player.size/2 + axe.size/2){
      axe.x = 200;
      axe.y = 50;
  }
  //Collision with tree (right)
    if (player.x === 1600 && axe.x === 200){
      tree.height = 250;
      wood.x = 325;
      wood.y = 50;
    }
  //Collision with tree (right)
    if (wood.x === 325 && player.x === width/2){
      state = `fire`
    }
  //Turns night time
    if (bg.r < 56){
      state = `noFire`;
    }

}

// START BUTTON ///////////////////////////////////////////////////////////
function keyPressed(){
if (state === `title`){
  state = `simulation`;
  }
}
