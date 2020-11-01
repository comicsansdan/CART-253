/**************************************************
Project 2 Prototype
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let player;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);

  player = new Player(width/2, height - 20);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  player.handleInput();
  player.move();
  player.display();
}
