/**************************************************
Project 1 : "Something fire themeed"
Daniel Cacatian

Here is a description of this template p5 project.
**************************************************/

let player = {
  x: 0,
  y: 0,
  speed: 2,
  image: undefined,
}

let sun = {
  x: 0,
  y: 0,
  size: 1000,
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
}

let axe = {
  x: 0,
  y: 0,
  image: `assets/images/axe.png`,
  size: 100,
}

function preload(){
  tent.image = loadImage(`assets/images/tent.png`);
  player.image = loadImage(`assets/images/player_R.png`);
  inventory.image = loadImage(`assets/images/inventory.png`);
  axe.image = loadImage(`assets/images/axe.png`);
  loadImage(`assets/images/player_L.png`);
};


// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke();

  objectSetup();

}

// STARTING POSITIONS ///////////////////////////////////////////////////////
function objectSetup(){
  // Player starting position
    player.x = width/2;
    player.y = height/2*1.65;

  // Tree starting position
    tree.x = width/6*5.5;
    tree.y = height/6;

  // Stump starting position
    stump.x = width/10;
    stump.y = height;

  // Sun starting postion
    sun.x = width/2;
    sun.y = height;

  // Floor starting postion
    floor.x = width/2;
    floor.y = height;

  // Tent starting postion
    tent.x = width/2;
    tent.y = height/2*1.65;

  // Tent starting postion
    axe.x = width/10 + 60;
    axe.y = height - 190;

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(255, 213, 163);

  display();
  controls();


}

// DISPLAY ////////////////////////////////////////////////////////////////////
// Displays the player, tree, stump, sun
function display(){

//Display tree
  push();
  fill(83,53,10);
  rectMode(CENTER);
  rect(tree.x, tree.y, tree.width, tree.height);
  pop();

//Display max
  push();
  image(axe.image, axe.x, axe.y, axe.size, axe.size);
  pop();

//Display stump
  push();
  fill(83,53,10);
  rectMode(CENTER);
  rect(stump.x, stump.y, stump.width, stump.height);
  pop();

//Display sun
  push();
  fill(255, 255, 217, 100);
  ellipse(sun.x, sun.y, sun.size)
  pop();

//Display floor
  floor.width = width;

  push();
  fill(11, 102, 35);
  rectMode(CENTER);
  rect(floor.x, floor.y, floor.width, floor.height);
  pop();

//Display tent
  push();
  imageMode(CENTER);
  image(tent.image, tent.x, tent.y, tent.size, tent.size);
  pop();

//Display player
  push();
  fill(255);
  image(player.image, player.x, player.y);
  pop();

//Display inventory
  push();
  fill(0, 0, 0, 100);
  rect(inventory.x, inventory.y, inventory.width, inventory.height, 20);
  image(inventory.image, inventory.imageX, inventory.imageY, inventory.imageSize, inventory.imageSize);


}

// PLAYER CONTROLS /////////////////////////////////////////////////////////////
//Allows the player to control themselves with either the arrow keys or WASD
function controls(){
  //Movement constrain (doesn't go out of bounds)
  player.x = constrain(player.x, 0, width);
  //Right movement
  if (keyIsDown(39)){
    player.x += player.speed;
  } else if (keyIsDown(68)){
    player.x += player.speed;
  }
  //Left movement
  if (keyIsDown(37)){
    player.x += -player.speed;
  } else if (keyIsDown(65)){
    player.x += -player.speed;
  }
}
