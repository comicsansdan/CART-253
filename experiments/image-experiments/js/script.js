/**************************************************
Image Experiments
Daniel Cacatian

Experimenting with p5's image functions.
**************************************************/

let clownImage;

function preload() {
  clownImage = loadImage("assets/images/clown.png")
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

  imageMode(CENTER);
  image(clownImage, width/2, height/2, 200, 25);

}
