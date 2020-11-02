/**************************************************
Project 2 Prototype
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let gravityForce = 0.0025;

let player;

let platform;

let obstacle;

let ground;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 500);

  player = new Player(width/2, height-25);

  platform = new Platform(width/2, height, 600, 25);

  let x = width/2;
  let w = width;
  ground = new Ground(x, w);

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(150, 230, 240);

  //Display ground
  ground.display();

  let canvasHeight = height - 40;

  platform.display();

  player.handleInput();
  player.gravity(gravityForce);
  player.wrap(platform);
  player.move();
  player.display();
  player.jumpCooldown(platform);

  }
