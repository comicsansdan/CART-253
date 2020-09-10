/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  background(200, 200, 200);

  noStroke();

  rectMode(CENTER);
  fill( 239, 150, 89,);
  rect(250, 250, 250, 250);

  fill( 39, 230, 180, 150);
  ellipse(250, 250, 150, 150);

  stroke(255, 0, 0);
  line(250, 0, 250, 500);

  stroke(0, 255, 0);
  line(0, 250, 500, 250);
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
