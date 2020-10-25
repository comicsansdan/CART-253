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

let bee;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

  bee = new Bee( width/2, height/2);

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

}


// draw()
//
// Description of draw() goes here.
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

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
  }

  //Allows the bee to polinate the flowers and survive
      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        if (flower.alive){
        bee.tryToPollinate(flower);
        }
      }
}
