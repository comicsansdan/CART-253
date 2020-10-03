/**************************************************
Activity 05: Looking for Love
Daniel Cacatian

This activity consist of creating a small simulation with states and functions
**************************************************/

//VARIABLES////////////////////////////////////////////////////////////////
let lover1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
};

let lover2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
};

let state = `title`; //Can be title, simulation, love, sadness

// setup()
//
// Setup() contains the canvas and the lovers positions starting point and their velocity
function setup() {
  createCanvas(500, 500);
  setupCircles();
}

function setupCircles(){
  //Postions circles away from each other
  lover1.x = width / 3;
  lover2.x = 2 * width / 3;

  //Start circles moving in a random direction
  lover1.vx = random(-lover1.speed, lover1.speed);
  lover2.vx = random(-lover2.speed, lover2.speed);
  lover1.vy = random(-lover1.speed, lover1.speed);
  lover2.vy = random(-lover2.speed, lover2.speed);
}

// draw()
//
// Draw() is what allows the lovers to move and display them
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state=== `love`){
    love();
  } else if (state === `sadness`) {
    sadness();
  }

}

//EXTRA FUNCTIONS////////////////////////////////////////////////////////////////
function sadness() {
  textSize(64);
  fill(150, 150, 255);
  textAlign(CENTER, CENTER);
  text(`D:`, width / 2, height / 2);
}

function love() {
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`LOVE!`, width / 2, height / 2);
}

function simulation(){
  move();
  checkOffscreen();
  checkOverlap();
  display();
  }

function title() {
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width / 2, height / 2);
}

function move() {
  //Move the circles
  lover1.x += lover1.vx;
  lover1.y += lover1.vy;

  lover2.x += lover2.vx;
  lover2.y += lover2.vy;
}

function checkOffscreen() {
  //Check if the circles have gone offscreen
  if (lover1.x < 0 || lover1.x > width || lover1.y < 0 || lover1.y > height || lover2.x < 0 || lover2.x > width || lover2.y < 0 || lover2.y > height) {
    //SAD ENDING
    state = `sadness`;
  }
}

function checkOverlap() {
  //Check if the circles overlap
  let d = dist(lover1.x, lover1.y, lover2.x, lover2.y);
  if (d < lover1.size / 2 + lover2.size / 2) {
    //GOOD ENDING
    state = `love`;
  }
}

function display() {
  //Displays the lovers\
  fill(255);
  ellipse(lover1.x, lover1.y, lover1.size);
  ellipse(lover2.x, lover2.y, lover2.size);
}

function mousePressed(){
  if (state === `title`){
    state = `simulation`;
  }
}
