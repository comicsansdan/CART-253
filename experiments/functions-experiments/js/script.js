/**************************************************
Functions Experiments
Daniel Cacatian

Experimenting with p5's functions.
**************************************************/

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
}

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
  background(0);

  move();
  wrap();
  display();

}

// Functions can also be reffered as modular. Also reuse
function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function wrap() {
  if (circle.x > width) {
    reset();
  }
}

function display() {
  rectMode(CENTER);
  rect(circle.x, circle.y, circle.size, circle.size);
}

function reset() {
  circle.x = 0;
  circle.vx += 2;
  circle.vy += -0.25;
  circle.size += 5;
}

function mousePressed() {
  reset();
}
