/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

// Food
let food1;
let food2;
let food3;
let food4;
let food5;



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  food1 = createFood(250,windowHeight/2);
  food2 = createFood(350,windowHeight/2);
  food3 = createFood(450,windowHeight/2);
  food4 = createFood(550,windowHeight/2);
  food5 = createFood(650,windowHeight/2);

}

function createFood(x,y){
  let food = {
    x: x,
    y: y,
    size: 50,
    eaten: false
  };
  return food;
}

// draw()
//
// Description of draw() goes here.
function draw() {

//INTERMEDIATE FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);
  checkFood(food5);



  // Display the user and foods
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  displayFood(food5);


}

//INTERMEDIATE FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////
// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

// Checks if the user overlaps the food1 object and eats it if so
function checkFood(food) {
  // We only want to check for an overlap if food1 hasn't been eaten yet
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

function displayFood(food){
  if (!food.eaten) {
    push();
    fill(255,100,100);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}
