/**************************************************
Project 1 : "Something fire themeed"
Daniel Cacatian

Here is a description of this template p5 project.
**************************************************/

let player = {
  x: undefined,
  y: undefined,
  size: 50,
  speed: 2,
  image: undefined,
}

let sun = {
  x: undefined,
  y: undefined,
  size: 1000,
  alpha: 0.5,
  speed: 2,
}

let inventory = {
  x: undefined,
  y: undefined,
  size: undefined,
}

let tree = {
  x: undefined,
  y: undefined,
  width: 150,
  height: 2000,
}

let stump = {
  x: undefined,
  y: undefined,
  width: 150,
  height: 200,
}

function preload(){

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
    player.y = height/2*2;

  // Tree starting position
    tree.x = width/6*5.5;
    tree.y = height/6;

  // Stump starting position
    stump.x = width/10;
    stump.y = height/6*6;

  // Sun starting postion
    sun.x = width/2;
    sun.y = height;
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
//Display player
  push();
  fill(255);
  ellipse(player.x, player.y, player.size);
  pop();


//Display tree
  push();
  fill(83,53,10);
  rectMode(CENTER);
  rect(tree.x, tree.y, tree.width, tree.height);
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
