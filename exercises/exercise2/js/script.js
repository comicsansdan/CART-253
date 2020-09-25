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
  size: 275,
  image: undefined,
  fade: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 1,
  maxSpeed: 20,
}

function preload() {
  clown.image = loadImage("assets/images/clown.png")
}

let user = {
  x: 0,
  y: 0,
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

  // USER ///////////////////////////////////////////////////////////////////////////
  //Display user & controls
  ellipse(mouseX, mouseY, user.size);

  // CLOWN (VILLAIN) /////////////////////////////////////////////////////////////////
  //Clown's mouvement controls (X axis)
  if (mouseX < clown.x) {
    clown.ax = -clown.acceleration;
  } else {
    clown.ax = clown.acceleration;
  }

  //Clown's mouvement controls (Y axis)
  if (mouseY < clown.y) {
    clown.ay = -clown.acceleration;
  } else {
    clown.ay = clown.acceleration;
  }

  //Clown's acceleration constraint
  clown.vx += clown.ax
  clown.vx = constrain(clown.vx, -clown.maxSpeed, clown.maxSpeed);
  clown.vy += clown.ay
  clown.vy = constrain(clown.vy, -clown.maxSpeed, clown.maxSpeed);

  //Clown's velocity controls
  clown.x += clown.vx;
  clown.y += clown.vy;

  //Display clown image
  imageMode(CENTER);
  image(clown.image, clown.x, clown.y, clown.size, clown.size);

}
