/**************************************************
Melody Tower
Daniel Cacatian
Creating a platforming game that incorporates platforming and sound mechanics within p5.js
**************************************************/

let gravityForce = 1;

//User himself
let player;

//platform player can jump on
let platforms = [];
let numBluePlatforms = 2;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);
  noStroke();

  //Player setup
  x = width / 2;
  y = height - 100;
  player = new Player(x, y);

  for (let i = 0; i < numBluePlatforms; i++) {
    let x = width/2;
    let y = height/2 + 300;
    let bluePlatform = new BluePlatform(x, y);
    platforms.push(bluePlatform);
  }

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  //Ground
  push();
  fill(100, 200, 75);
  rectMode(CENTER);
  rect(width / 2, windowHeight, width, 100);
  pop();

  //Display player
  player.controls();
  player.display();
  player.gravity(gravityForce);

  //Display platforms
  for (let i = 0; i < platforms.length; i++){
    let platform = platforms[i];
    platform.display();
  }

}
