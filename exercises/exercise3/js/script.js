/**************************************************
Exercise 3: Love, actually
Daniel Cacatian

This exercise is to recreate the "Looking for Love" activity by using our own if statements and states
**************************************************/

// VARIABLES //////////////////////////////////////////////////////////////////
let you = {
  x: undefined,
  y: undefined,
  size: 50,
  speed: 3,
}

let soulmate = {
  x: undefined,
  y: undefined,
  size: 50,
  vx: 1,
  speed: 1,
}

let obstacle1 = {
  x: undefined,
  y: undefined,
  size: 50,
  speed: 15,
}

let obstacle2 = {
  x: undefined,
  y: undefined,
  size: 50,
  speed: 11,
}

let fake = {
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
  circleSetup();

}

// CIRCLE SETUP ///////////////////////////////////////////////////////////////
//Starting positions for the player, soulmate, others, etc.
function circleSetup(){
  //Player's starting position
    you.x = width / 2;
    you.y = height / 8 * 7.25;

  //Soulmate's starting position
    soulmate.x = width/ 2;
    soulmate.y = height / 8;

  //Fake's starting position
    fake.x = 100;
    fake.y = height/2;

  //Obstacle starting positions
    obstacle1.x = 0;
    obstacle1.y = height/3.5;
    obstacle2.x = width;
    obstacle2.y = height/3*2;

}

// DRAW ///////////////////////////////////////////////////////////////////////
//
// Description of draw() goes here.
function draw() {

  background(255, 248, 255);

  display();
  movement();
  controls();
  obstructed();

}

// DISPLAY /////////////////////////////////////////////////////////////////////
//Displays the player, their soulmate, others, etc.
function display() {
  //You (the player)
  fill(118, 202, 228);
  ellipse(you.x, you.y, you.size);

  //Soulmate
  fill(255, 194, 202);
  ellipse(soulmate.x, soulmate.y, soulmate.size);

  //Fake
  fill(17, 59, 81);
  ellipse(fake.x, fake.y, fake.size);

  //Obstacles
  fill(199, 145, 168);
  ellipse(obstacle1.x, obstacle1.y, obstacle1.size)

  fill(199, 145, 168);
  ellipse(obstacle2.x, obstacle2.y, obstacle2.size)
}

// MOVEMENT /////////////////////////////////////////////////////////////////////
//This function contains the movement of certain circles
function movement(){
  // Soulmate's movement
  soulmate.x += soulmate.vx;

  if (soulmate.x > width/4*3.5){
    soulmate.vx += -soulmate.speed;
  } else if (soulmate.x < width/7){
    soulmate.vx += soulmate.speed;
  }

  // Obstacle's movement
  obstacle1.x += obstacle1.speed;
  if (obstacle1.x > width){
    obstacle1.x = 0;
  }
  obstacle2.x += -obstacle2.speed;
  if (obstacle2.x < 0){
    obstacle2.x = width;
  }

}

// PLAYERS CONTROLS ///////////////////////////////////////////////////////////
//Allows the player to control the circle with either the arrow keys or WASD
function controls(){
  //Movement constrain (doesn't go out of bounds)
  you.x = constrain(you.x, 0, width);
  you.y = constrain(you.y, 0, height);
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

// COLLISIONS ///////////////////////////////////////////////////////////
//Collision with the obstacles
function obstructed(){
let d1 = dist(you.x, you.y, obstacle1.x, obstacle1.y);
  if (d1 < you.size/2 + obstacle1.size/2){
    you.y += 200;
  }
let d2 = dist(you.x, you.y, obstacle2.x, obstacle2.y);
    if (d2 < you.size/2 + obstacle2.size/2){
      you.y += 200;
    }
}
