/**************************************************
Drawing Experiments
Daniel Cacatian

Experimenting with p5's drawing and color functions.
**************************************************/

let backgroundShade = 0;

let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2,
};

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
  circle.x = circle.x + circle.speed;
  ellipse(circle.x, circle.y, circle.size);

  console.log(`circleX: ${circle.x}, circleY: ${circle.y}, circleSize: ${circle.size}, circleSpeed: ${circle.speed}`);
}
