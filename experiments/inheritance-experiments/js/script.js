/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict"

// INHERITANCE ////////////////////////////////////////////////////////////////
let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotorcycles = 10;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);

// INHERITANCE ////////////////////////////////////////////////////////////////
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x,y);
    cars.push(car);
  }

  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x,y);
    motorcycles.push(motorcycle);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

// INHERITANCE ////////////////////////////////////////////////////////////////
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    car.move();
    car.wrap();
    car.display();
  }

  for (let i = 0; i < motorcycles.length; i++) {
    let motorcycle = motorcycles[i];
    motorcycle.move();
    motorcycle.wrap();
    motorcycle.display();
  }
}
