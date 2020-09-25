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

let clown = {
  x: 0,
  y: 0,
  size: 100,
  image: undefined,
  alpha: 1,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.5,
  maxSpeed: 5,
}

function preload() {
  clown.image = loadImage("assets/images/clown.png")
}

let user = {
  x: 1800,
  y: 900,
  size: 50,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.25,
  maxSpeed: 5,
}

// setup()
//
// Setup that contains code for the canvas.
function setup() {

  createCanvas(windowWidth, windowHeight);

}

// draw()
//
// Draw() consists of all the shapes, background and animations.
function draw() {

  background(bg.r, bg.g, bg.b);

  // USER //////////////////////////////////////

  //User's mouvement controls (mouse on X axis)
  if (mouseX < user.x){
    user.ax = -user.acceleration;
  } else {
    user.ax = user.acceleration;
  }

  //User's mouvement controls (mouse on Y axis)
  if (mouseY < user.y) {
    user.ay = -user.acceleration;
  } else {
    user.ay = user.acceleration;
  }

  //User's acceleration constraint
  user.vx += user.ax
  user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
  user.vy += user.ay
  user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

  //User's velocity controls
  user.x += user.vx;
  user.y += user.vy;

  //User drawing form
  ellipse(user.x,user.y,user.size);

}
