/**************************************************
Melody Tower
Daniel Cacatian

Creating a platforming game that incorporates platforming and sound mechanics within p5.js
**************************************************/

let gravityForce = 1;

//User himself
let player;

//platform player can jump on
let platform;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);
  noStroke();

  x = width / 2;
  y = height - 100;
  player = new Player(x, y);

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
  rect(width / 2, windowHeight, width, 100);
  pop();

  //Display player
  player.controls();
  player.display();
  player.gravity(gravityForce);
}
