/**************************************************
Exercise 04: The Age of Aquariums
Daniel Cacatian

Exercise to practice using arrays, intermediate functions, for loops and states
**************************************************/

//VARIABLES///////////////////////////////////////////////////////////////////////////////////////////////////////
let user = {
  x: 0,
  y: 0,
  size: 100
};

let school = [];
let schoolSize = 10;

//SETUP///////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }

}

// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}

//DRAW///////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description of draw() goes here.
function draw() {
  background(12,164,255);

    for (let i = 0; i < school.length; i++){
    displayFish(school[i]);
  }
}

//DISPLAY FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(225,192,39);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}
