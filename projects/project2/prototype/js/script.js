/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let gravityForce = 1;

let player;

let platform;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800,500);
  noStroke();

  x = width/2;
  y = 375;
  player = new Player(x,y);

  platform = new Platform(200, 300, 200, 40);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  //Ground
  push();
  fill(100, 200, 75);
  rectMode(CENTER);
  rect(width/2, 450, width, 100);
  pop();

  //Display player
  player.controls();
  player.display();
  player.gravity(gravityForce);

  //Platform
  platform.display();

}
