/**************************************************
Project 2 Prototype
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let gravityForce = 0.0025;

let player;

let platforms = [];
let numPlatforms = 1;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);

  player = new Player(width/2, height - 50);

  for (let i = 0; i < numPlatforms; i++) {
    let platform = new Platform(width/2, height, 600, 25);
    platforms.push(platform);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  let canvasHeight = height - 40;

  player.handleInput();
  player.gravity(gravityForce);
  player.wrap();
  player.move();
  player.display();

  for (let i = 0; i < platforms.length; i++) {
    let platform = platforms[i];
    platform.display();

    player.bounce(platform);
  }

}
