/**************************************************
Project 2 Prototype
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let gravityForce = 0.0025;

let player;

let platform;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  player = new Player(width/2, height/2);

  platform = new Platform(width/2, height, 600, 25);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  let canvasHeight = height - 40;

  platform.display();

  player.handleInput();
  player.gravity(gravityForce);
  player.wrap(platform);
  player.move();
  player.display();
  player.jumpCooldown(platform);

  }
