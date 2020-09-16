/**************************************************
Drawing Experiments
Daniel Cacatian

Experimenting with p5's drawing and color functions.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {

createCanvas(windowWidth, windowHeight);

}

// draw()
//
// Description of draw() goes here.
function draw() {

background(mouseX, mouseY, 255);
rectMode(CENTER);
rect(width/2, height/2, 100, 100);

}
