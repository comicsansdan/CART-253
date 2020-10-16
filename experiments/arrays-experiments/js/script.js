/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict";

//INTERMEDIATE FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////
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

//ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
let school = [];
let schoolSize = 10;

//MORE ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
let soliloquy = [
  `To be or not to be.`, //[0]
  `That is the question.`, //[1]
  `Whether 'tis nobler in the mind'.`, //[2]
  `To suffer the slings and arrows.`, //etc.
  `Of outrageous fortune.`,
  `Or to take arms.`,
  `Against a sea of sorrows.`,
  `And by opposing end them.`
];

let currentIndex = 0;

let barkSFX;

let rates = [1.5, 1.75, 2.25, 2.5, 2.75, 3];

let circle = {
  x: 0,
  y: 0,
  size: 100,
  trail: [],
  trailSize: 20,
};

function preload(){
  barkSFX = loadSound(`assets/sounds/bark.wav`);

  for (let i = 0; i < 10; i++){
    images[i] = loadImage(`assets/images/clown-${i}.png`);
  }
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(700, 700);

  //MORE ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
  textAlign(CENTER);
  textSize(32);
  fill(255);

  //ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
  // Create four fish, positioned randomly
  //                 //number of fish (4)
  // for (let i = 0; i < schoolSize; i++) {
  //   school[i] = createFish(random(0, width), random(0, height));
  // }

  //INTERMEDIATE FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////
  // food1 = createFood(250,windowHeight/2);
  // food2 = createFood(350,windowHeight/2);
  // food3 = createFood(450,windowHeight/2);
  // food4 = createFood(550,windowHeight/2);
  // food5 = createFood(650,windowHeight/2);

}

// function createFood(x,y){
//   let food = {
//     x: x,
//     y: y,
//     size: 50,
//     eaten: false
//   };
//   return food;
// }

//ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
// function createFish(x, y) {
//   let fish = {
//     x: x,
//     y: y,
//     size: 50,
//     vx: 0,
//     vy: 0,
//     speed: 2
//   };
//   return fish;
// }

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  //MORE ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
  text(soliloquy[currentIndex], width / 2, height / 2);

  circle.x = mouseX;
  circle.y = mouseY;

  for (let i = 0; i < circle.trail.length; i++) {
    let position = circle.trail[i];
    ellipse(position.x, position.y, circle.size);
  }

  ellipse(circle.x, circle.y, circle.size);

  let newTrailPosition = {
    x: circle.x,
    y: circle.y
  };
  circle.trail.push(newTrailPosition);

  if (circle.trail.length > circle.trailSize){
    //Shift will remove the element at index[0] and reset it: Oldest => Recent
    circle.trail.shift();
  }


  //ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
  //length property (stays up to date with the set number where the first array comes up)
  //   for (let i = 0; i < school.length; i++){
  //   moveFish(school[i]);
  //   displayFish(school[i]);
  // }

  //INTERMEDIATE FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////
  // // Move the user (with the mouse)
  // moveUser();
  //
  // // Check whether the user has eaten either food
  // checkFood(food1);
  // checkFood(food2);
  // checkFood(food3);
  // checkFood(food4);
  // checkFood(food5);
  //
  //
  //
  // // Display the user and foods
  // displayUser();
  // displayFood(food1);
  // displayFood(food2);
  // displayFood(food3);
  // displayFood(food4);
  // displayFood(food5);

}

//MORE ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
function mousePressed() {
  let randomRate = random(rates);
  barkSFX.rate(randomRate);
  barkSFX.play();

  currentIndex += 1;

  if (currentIndex === soliloquy.length) {
    currentIndex = 0;
  }
}

//ARRAYS//////////////////////////////////////////////////////////////////////////////////////////////////////
// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
// function moveFish(fish) {
//   // Choose whether to change direction
//   let change = random(0, 1);
//   if (change < 0.05) {
//     fish.vx = random(-fish.speed, fish.speed);
//     fish.vy = random(-fish.speed, fish.speed);
//   }
//
//   // Move the fish
//   fish.x = fish.x + fish.vx;
//   fish.y = fish.y + fish.vy;
//
//   // Constrain the fish to the canvas
//   fish.x = constrain(fish.x, 0, width);
//   fish.y = constrain(fish.y, 0, height);
// }
//
// // displayFish(fish)
// // Displays the provided fish on the canvas
// function displayFish(fish) {
//   push();
//   fill(200, 100, 100);
//   noStroke();
//   ellipse(fish.x, fish.y, fish.size);
//   pop();
// }
//
// function mousePressed(){
//   let fish = createFish(mouseX, mouseY);
//   //Push adds it to the array (the school[i])
//   school.push(fish);
// }


//INTERMEDIATE FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////
// Sets the user position to the mouse position
// function moveUser() {
//   user.x = mouseX;
//   user.y = mouseY;
// }
//
// // Checks if the user overlaps the food1 object and eats it if so
// function checkFood(food) {
//   // We only want to check for an overlap if food1 hasn't been eaten yet
//   if (!food.eaten) {
//     let d = dist(user.x, user.y, food.x, food.y);
//     if (d < user.size / 2 + food.size / 2) {
//       food.eaten = true;
//     }
//   }
// }
//
// // Draw the user as a circle
// function displayUser() {
//   push();
//   fill(255);
//   ellipse(user.x, user.y, user.size);
//   pop();
// }
//
// function displayFood(food){
//   if (!food.eaten) {
//     push();
//     fill(255,100,100);
//     ellipse(food.x, food.y, food.size);
//     pop();
//   }
// }
