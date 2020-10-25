/**************************************************
Exercise 05: Juggling Garden
Daniel

Here is a description of this template p5 project.
**************************************************/

"use strict"

//Paddle variable
let paddle;

//Basket variable
let basket;

//Gravitiy force (for balls)
let gravityForce = 0.0025;

//Ball variable
let balls = [];
let numBalls = 10;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

//Call the Paddle.js class
  paddle = new Paddle(300, 20);

//Call the Basket.js class
    basket = new Basket(400, 50);

//Call for the Ball.js class and make it a variable
  for (let i = 0; i < numBalls; i++) {
    let ball = new Ball(random(0, width), random(-400, -100));
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

//Displays and moves the paddles
  paddle.move();
  paddle.display();

//Displays and moves the basket
  basket.move();
  basket.display();

//Displays and gives movement to all the balls
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active){
    ball.gravity(gravityForce);
    ball.move();
    ball.bounce(paddle);
    ball.display();
    }
  }
}
