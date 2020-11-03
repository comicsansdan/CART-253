/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let player;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800,500);

  x = width/2;
  y = 375;
  player = new Player(x,y);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  player.display();

}
