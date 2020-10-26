/**************************************************
Exercise 5: Juggling Garden
Daniel Cacatian

An exercise using OOP where I'll be reusing the code from the flower simulation and add my own code.
**************************************************/

"use strict";

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 20,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
}

//Timer to signal that you survived and won
let gameOverTimer = 0;
let gameLength = 60 * 20;

//Text variable
let type = {
  x: 0,
  y: 0,
  title: `FLIGHT OF THE
BUMBLEBEE`,
  instructions: `Goal: Survive for 20 secs!`,
  controls: `Use AWSD or ArrowKeys to move.
Click to begin!`,
  gameOver: `YOU DIED!`,
  youWon: `YOU SURVIVED!`,
  tryAgain: `Refresh to try again.`,
  sizeBig: 50,
  sizeSmall: 25,
}

//Bee variable
let bee;

//Bird variable
let bird;

//State variable
let state = `title`;

// SETUP /////////////////////////////////////////////////////////////////////
//
// Description of setup() goes here.
function setup() {
  createCanvas(700,700);

//Call the bee class
  bee = new Bee( width/2, height/2);

//Call the bird class
  bird = new Bird(0, random(0, height));

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50,80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100,255),
      g: random(100,255),
      b: random(100,255),
    }

    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }

//Title screen x and y values:
  type.x = width/2;
  type.y = height/2;

}


// DRAW /////////////////////////////////////////////////////////////////////
//
// Description of draw() goes here.
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `eaten`) {
    gameOver();
  } else if (state === `survived`) {
    win();
  }
}

// STATES /////////////////////////////////////////////////////////////////////
//Title screen state///////////////////////////////////////////////////////////
function title(){
  push();
  textSize(type.sizeBig);
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  text(type.title, type.x, type.y);
  pop();

  push();
  textSize(type.sizeSmall);
  fill(0, 100, 0);
  textAlign(CENTER);
  text(type.instructions, type.x, type.y + height/3);
  pop();

  push();
  textSize(type.sizeSmall);
  fill(255);
  textAlign(CENTER);
  text(type.controls, type.x, type.y + height/5);
  pop();
}

//Simulation state///////////////////////////////////////////////////////////
function simulation(){
  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];

  //Will only display flowers that are alive
    if (flower.alive) {
    flower.shrink();
    flower.display();
    }
  }

  //Displays the bee (only if its alive)
    if (bee.alive) {
      bee.move();
      bee.display();
      bee.shrink();
      bee.eaten(bird);
  }

  //If bee eaten then game over
  if (!bee.alive) {
    state = `eaten`;
  }

  //Game Timer
  gameOverTimer++;
  if (gameOverTimer >= gameLength){
    state = `survived`
  }


  //displays the bird
    bird.move();
    bird.display();

//Allows the bee to polinate the flowers and survive
      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        if (flower.alive){
        bee.tryToPollinate(flower);
        }
      }
}

//Gameover state///////////////////////////////////////////////////////////
function gameOver(){
  push();
  textSize(type.sizeBig);
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  text(type.gameOver, type.x, type.y);
  pop();

  push();
  textSize(type.sizeSmall);
  fill(255);
  textAlign(CENTER);
  text(type.tryAgain, type.x, type.y + height/5);
  pop();
}

//Win state//////////////////////////////////////////////////////////////////
function win(){
  push();
  textSize(type.sizeBig);
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  text(type.youWon, type.x, type.y);
  pop();
}


// GAMESTART ///////////////////////////////////////////////////////////////////
//Clicking starts the game
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
