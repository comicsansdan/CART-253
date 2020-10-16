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

let shark = {
  x: 0,
  y: 0,
  size: 150,
  vx: 0,
  vy: 0,
  speed: 3,
}

let school = [];
let schoolSize = 10;

//SETUP///////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);
  noStroke();

  //Spawn for fishes
  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }

  //Spawn shark randomly
  shark.x = random(0, width);
  shark.y = random(0, height);
}

//OBJECT SETUP FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
// Creates and spawn fishes
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  return fish;
}

//DRAW///////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description of draw() goes here.
function draw() {
  background(12,164,255);

  displayUser();
  displayShark();
  moveUser();
  moveShark();

  for (let i = 0; i < school.length; i++){
  moveFish(school[i]);
  displayFish(school[i]);
  checkFish(school[i]);
  }
}

//DISPLAY FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
// Displays the provided fish on the canvas
function displayFish(fish) {
  if (!fish.eaten){
    push();
    fill(225,192,39);
    ellipse(fish.x, fish.y, fish.size);
    pop();
  }
}

// Display the user as a circle
function displayUser() {
  push();
  fill(249, 131, 50);
  ellipse(user.x, user.y, user.size);
  pop();
}

//Display the shark as a circle
function displayShark() {
  push();
  fill(150, 151, 150);
  ellipse(shark.x, shark.y, shark.size);
  pop();
}

//MOVEMENT FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
//User movement is based on mouse coordinates
function moveUser(){
  user.x = mouseX;
  user.y = mouseY;
}

// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// Same movement as the fishes with a higher speed
function moveShark(){
  let change = random(0, 1);
  if (change < 0.05) {
    shark.vx = random(-shark.speed, shark.speed);
    shark.vy = random(-shark.speed, shark.speed);
  }

  // Move the shark
  shark.x = shark.x + shark.vx;
  shark.y = shark.y + shark.vy;

  // Constrain the shark to the canvas
  shark.x = constrain(shark.x, 0, width);
  shark.y = constrain(shark.y, 0, height);
}

//COLLISION-BASED FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
// Checks if the user overlaps the fish object and eats it if so
function checkFish(fish) {
  // We only want to check for an overlap if food1 hasn't been eaten yet
  if (!fish.eaten) {
    let d = dist(user.x, user.y, fish.x, fish.y);
    if (d < user.size / 2 + fish.size / 2) {
      fish.eaten = true;
    }
  }
}
