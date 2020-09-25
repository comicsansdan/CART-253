/**************************************************
Image Experiments
Daniel Cacatian

Experimenting with p5's image functions.
**************************************************/

let clown = {
  x: 250,
  y: 250,
  size: 100,
  image: undefined,
};

function preload() {
  clown.image = loadImage("assets/images/clown.png")
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

  clown.x = mouseX;
  clown.y = mouseY;

  imageMode(CENTER);
  image(clown.image, clown.x, clown.y, clown.size, clown.size);
}

function mousePressed() {
  clown.size += 50;
}
