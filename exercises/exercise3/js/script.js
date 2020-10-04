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
  speed: 13,
}

let fake = {
  x: 0,
  y: 0,
  size: 50,
  string: `hey! <3`
}

let state = `title`

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
    you.y = height / 8 * 6.5;

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

  if(state === `title`){
    title();
  } else if (state === `simulation`){
    simulation();
  } else if (state === `love`){
    love();
  } else if (state === `bad`){
    bad();
  } else if (state === `secret`){
    secret();
  }

}

// STATES /////////////////////////////////////////////////////////////////////
//Title state
function title(){
  header();
  instructions();
}

//Simulation state
function simulation(){
  display();
  movement();
  controls();
  obstructed();
}

//Love! ending state
function love(){
  goodText();
}

//bad ending state
function bad(){
  badText();
}

//Secret ending state
function secret(){
  easterEgg();
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

// TEXT ////////////////////////////////////////////////////////////////////////
//Main title text
function header(){
  push();
  textSize(54);
  fill(200, 100, 100);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`LOVE, ACTUALLY...`, width / 2, height / 2, 300, 200);
  pop();
}

//Instruction text
function instructions(){
  push();
  textSize(24);
  fill(200, 100, 100);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Press any key to continue`, width / 2, height / 2*2, 300, 200);
  pop();
}

//Good ending text
function goodText(){
  push();
  textSize(54);
  fill(255, 194, 202);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`YOU FOUND TRUE LOVE! :D`, width / 2, height / 2, 300, 300);
  pop();
}

//Bad ending text
function badText(){
  push();
  textSize(24);
  fill(17, 59, 81);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`We accept the love we think we deserve... maybe try again?`, width / 2, height / 2, 300, 100);
  pop();
}

//Secret ending text
function easterEgg(){
  push();
  textSize(24);
  fill(118, 202, 228);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`Love doesn't have to be rushed, you can always come back when you feel ready :)`, width / 2, height / 2, 300, 150);
  pop();
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

//Collision with the soulmate
let d3 = dist(you.x, you.y, soulmate.x, soulmate.y);
  if (d3 < you.size/2 + soulmate.size/2){
    state = `love`
  }

//Collision with the fake
let d4 = dist(you.x, you.y, fake.x, fake.y);
  if (d4 < you.size/2 + fake.size/2 + 150){
    fill(17, 59, 81);
    text(fake.string, 130, fake.y);
  }
  if (d4 < you.size/2 + fake.size/2){
    state = `bad`
  }

  //Collision with the bottom
  if (you.y > height){
    state = `secret`
  }

}

// START BUTTON ///////////////////////////////////////////////////////////
function keyPressed(){
if (state === `title`){
  state = `simulation`;
  }
}
