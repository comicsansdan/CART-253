/**************************************************
Drawing Experiments
Daniel Cacatian

Experimenting with p5's drawing and color functions.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  // Background color
  background(200, 200, 200);

  noStroke();

  // Random rectangle
  rectMode(CENTER);
  fill( 239, 150, 89,);
  rect(250, 250, 250, 250);

  // Circle in the center
  fill( 39, 230, 180, 150);
  ellipse(250, 250, 150, 150);

  // Crosshairs +
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
