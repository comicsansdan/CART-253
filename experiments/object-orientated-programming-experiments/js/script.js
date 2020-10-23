/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict";

//OBJECT-ORIENTATED-PROGRAMMING////////////////////////////////////////////////
// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 30,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

//OBJECT-ORIENTATED-PROGRAMMING////////////////////////////////////////////////
  // Create our flowers by counting up to the number of the flowers
for (let i = 0; i < garden.numFlowers; i++) {
//CONSTRUCTORS WITH PARAMETERS////////////////////////////////////////////////
  let x = random(0, width);
  let y = random(0, height);
  let size = random(50,80);
  let stemLength = random(50, 100);
  let petalColor = {
    r: random(100,255),
    g: random(100,255),
    b: random(100,255),
  }
  // Create a new flower
  //Before
  // let flower = createFlower();
  //After (From the construction class in Flower.js)
  let flower = new Flower(x, y, size, stemLength, petalColor);
  // Add the flower to the array of flowers
  garden.flowers.push(flower);
}
}

// draw()
//
// Description of draw() goes here.
function draw() {

//OBJECT-ORIENTATED-PROGRAMMING////////////////////////////////////////////////
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    //Before
    // displayFlower(flower);
    //After (From the display function in Flower.js)
    flower.display();
  }
}

//OBJECT-ORIENTATED-PROGRAMMING AND P5 EVENTS////////////////////////////////////////////////
function mousePressed(){
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    flower.mousePressed();
  }
}
