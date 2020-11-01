/**************************************************
Project 2 Prototype
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let gravityForce = 0.0025;

let player;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);

  player = new Player(width/2, height - 50);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  let canvasHeight = height - 40;

  player.handleInput();
  player.gravity(gravityForce);
  player.wrap(canvasHeight);
  player.move();
  player.display();
}
