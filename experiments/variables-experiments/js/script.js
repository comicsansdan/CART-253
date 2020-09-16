/**************************************************
Drawing Experiments
Daniel Cacatian

Experimenting with p5's drawing and color functions.
**************************************************/

let circleSize = 250;
let circleX = 0;
let circleY = 250;
let backgroundShade = 0;
let circleSpeed = 2;
let circleAcceleration = 0.25;

// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(500, 500);

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(backgroundShade);
  circleX += circleSpeed;
  circleSpeed += circleAcceleration;
  ellipse(circleX, circleY, circleSize);


}
