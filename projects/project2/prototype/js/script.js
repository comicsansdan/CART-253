/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

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
  //Display player
  player.display();

  //Platform
  platform.display();

  //Ground
  push();
  fill(100, 200, 75);
  rectMode(CENTER);
  rect(width/2, 450, width, 100);
  pop();

}
