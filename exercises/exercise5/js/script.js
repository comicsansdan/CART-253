/**************************************************
Exercise 05: Juggling Garden
Daniel

Here is a description of this template p5 project.
**************************************************/

"use strict"

let paddle;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

//Call the Paddle.js class
  paddle = new Paddle(300, 20);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

//Displays and moves the paddles
  paddle.move();
  paddle.display();
}
