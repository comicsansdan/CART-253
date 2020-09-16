/**************************************************
Drawing Experiments
Daniel Cacatian

Experimenting with p5's drawing and color functions.
**************************************************/

let circleSize = 250;
let circleX = 250;
let circleY = 100;
let backgroundShade = 0;

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
  ellipse(circleX, circleY, circleSize);


}
