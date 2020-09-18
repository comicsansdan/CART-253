/**************************************************
Exercise 1
Daniel Cacatian

This activity consist of creating moving objects using variables, mapping, constrains and more!
**************************************************/

// VARIABLES

let bg = {
  r: 0,
  g: 86,
  b: 120,
};

let circle = {
  x: 150,
  y: 1000,
  size: 75,
  fill: 255,
  speed: -1.25,
};

let square = {
  x: 450,
  y: 500,
  size: 75,
  growthRate: 0.25,
  fill: 255,
};

let r_square = {
  x: 750,
  y: 1000,
  size: 75,
  fill: 255,
  corners: 20,
};

// setup()
//
// Setup that contains code for the canvas.
function setup() {

  createCanvas(900, 1000);

  noStroke();

}

// draw()
//
// Draw() consists of all the shapes, background and animations.
function draw() {

// Background color
  background(bg.r, bg.g, bg.b);
  bg.r = map(0, mouseX, windowWidth, mouseY, windowHeight);

// Left circle
  circle.y += circle.speed;
  circle.y = constrain(circle.y, 0, 1000);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);

// Middle square
  square.size += square.growthRate;
  square.size = constrain(square.size, 0, 200);
  rectMode(CENTER);
  fill(square.fill);
  rect(square.x, square.y, square.size);

// Right square
  r_square.y = constrain(r_square.y, 1000, 0);
  r_square.size = map(mouseY, height, 0, 75, 200);
  fill(r_square.fill);
  rect(r_square.x, mouseY, r_square.size, r_square.size, r_square.corners);
}
