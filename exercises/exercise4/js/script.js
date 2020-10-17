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

let state = `title`;

//SETUP///////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);
  noStroke();

  objectSetup();

}

//OBJECT SETUP FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
//Setups up all the objects in one function
function objectSetup(){
  //Spawn for fishes
  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }

  //Spawn shark randomly
  shark.x = random(0, width);
  shark.y = random(0, height);
}

// Creates the fishes
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

  if (state === `title`){
    title();
  } else if (state === `simulation`){
    simulation();
  } else if (state === `bad`){
    badEnding();
  } else if (state === `good`){
    goodEnding();
  }

  console.log(schoolSize)

}

//STATES FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions that activate when a different state occurs
//Title state
function title() {
  header();
  instructions();
}

//Simulation state
function simulation() {
  displayUser();
  displayShark();
  moveUser();
  moveShark();
  checkShark();

  for (let i = 0; i < school.length; i++){
  moveFish(school[i]);
  displayFish(school[i]);
  checkFish(school[i]);
  }

  fishEaten();
}

function goodEnding(){
  push();
  textSize(40);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`YOU ATE ALL THE FISH!`, width / 2, height / 2);
  pop();
}

function badEnding(){
  background(255, 0, 0);

  eaten();
  tryAgain();
}

//TEXT FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////////////
//Text containing the title of the game
function header(){
  push();
  textSize(75);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  text(`- GO FISH -`, width / 2, height / 2);
  pop();
}

//Text containing the instructions of the game
function instructions(){
  push();
  textSize(25);
  fill(255);
  textAlign(CENTER);
  text(`Eat the fishies, but watch out for the shark!
Click to begin`, width / 2, height / 2+50);
  pop();
}

//Text containing the bad ending text of the game
function eaten(){
  push();
  textSize(75);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  text(`YOU DIED`, width / 2, height / 2);
  pop();
}

function tryAgain(){
  push();
  textSize(25);
  fill(255);
  textAlign(CENTER);
  text(`Refresh to try again`, width / 2, height / 2+50);
  pop();
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
  // We only want to check for an overlap if fish hasn't been eaten yet
  if (!fish.eaten) {
    let d = dist(user.x, user.y, fish.x, fish.y);
    if (d < user.size / 2 + fish.size / 2) {
      fish.eaten = true;
      schoolSize += -1;
    }
  }
}

// Checks if all the fish are eaten
function fishEaten(){
  if (schoolSize === 0){
    state = `good`;
  }
}

function checkShark(){
  let d1 = dist(user.x, user.y, shark.x, shark.y);
  if (d1 < user.size/2 + shark.size/2) {
    state = `bad`;
  }
}

//MOUSE PRESSED FUNCTION///////////////////////////////////////////////////////////////////////////////////////////////////////
//Clicking starts or either restarts the game
function mousePressed(){
  if (state === `title`){
  state = `simulation`;
  }
}
