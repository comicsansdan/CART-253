/**************************************************
Exercise 2
Daniel Cacatian

This activity consist of creating a simulation where there are conditionals, interactivity, loops and an image!
**************************************************/

// VARIABLES

let bg = {
  r:0,
  g:0,
  b:0,
}

let clown = {
  x: 250,
  y: 250,
  size: 100,
  image: undefined,
  alpha: 1,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.25,
  maxSpeed: 10,
};

function preload() {
  clown.image = loadImage("assets/images/clown.png")
}

let user {
  x:0,
  y:0,
  size: 50,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.25,
  maxSpeed: 5,
}

// setup()
//
// Setup that contains code for the canvas.
function setup() {

  createCanvas(windowWidth, windowHeight);

}

// draw()
//
// Draw() consists of all the shapes, background and animations.
function draw() {


}
