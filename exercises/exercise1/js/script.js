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
  size: 400,
  fill: 255,
  speed: 0.5,
};

let square = {
  x: 450,
  y: 450,
  size: 200,
  growthRate: 1,
  fill: 255,
}

let triangle = {
  size: 200,
  fill: 255,
}

// setup()
//
// Setup that contains code for the canvas.
function setup() {

  createCanvas(900, 1000);

}

// draw()
//
// Draw() consists of all the shapes, background and animations.
function draw() {

// Background color
  background(bg.r, bg.g, bg.b);
  bg.r = map(0, mouseX, windowWidth, mouseY, windowHeight);

}
