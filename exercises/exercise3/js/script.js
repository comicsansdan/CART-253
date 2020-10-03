/**************************************************
Exercise 3: Love, actually
Daniel Cacatian

This exercise is to recreate the "Looking for Love" activity by using our own if statements and states
**************************************************/

// VARIABLES //////////////////////////////////////////////////////////////////
let you = {
  x: 0,
  y: 0,
  size: 50,
  speed: 1,
}

let love = {
  x: 0,
  y: 0,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 1,
}

let others = {
  x: 0,
  y: 0,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
}

let fakes = {
  x: 0,
  y: 0,
  size: 50,
}

// SETUP //////////////////////////////////////////////////////////////////////
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, windowHeight)
  noStroke();

//Player's starting position
  you.x = width / 2;
  you.y = height / 8 * 7.25;

}

// DRAW ///////////////////////////////////////////////////////////////////////
//
// Description of draw() goes here.
function draw() {

  background(255, 248, 255);

  display();
  controls();

}

// DISPLAY /////////////////////////////////////////////////////////////////////
//Displays the lover, the player, others, etc.
function display() {
  //You (the player)

  fill(118, 202, 228);
  ellipse(you.x, you.y, you.size);
}

// PLAYERS CONTROLS ///////////////////////////////////////////////////////////
//Allows the player to control the circle with either the arrow keys or WASD
function controls(){
  // Up movement
  if (keyIsDown(38)){
    you.y += -you.speed;
  } else if (keyIsDown(87)){
    you.y += -you.speed;
  }
  //Right movement
  if (keyIsDown(39)){
    you.x += you.speed;
  } else if (keyIsDown(68)){
    you.x += you.speed;
  }
  //Down movement
  if (keyIsDown(40)){
    you.y += you.speed;
  } else if (keyIsDown(83)){
    you.y += you.speed;
  }
  //Left movement
  if (keyIsDown(37)){
    you.x += -you.speed;
  } else if (keyIsDown(65)){
    you.x += -you.speed;
  }
}
