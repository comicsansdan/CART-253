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
let bluePlatform;
let orangePlatform;
let redPlatform;
let greenPlatform;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);
  noStroke();

  //Player setup
  player = new Player(width/2, height-100);

  //Blue platform
  let bluePlatform = new BluePlatform(width/2, height-200);
  platforms.push(bluePlatform);

  //Orange platform
  let orangePlatform = new OrangePlatform(width/2, height-400);
  platforms.push(orangePlatform);

  //Red platform
  let redPlatform = new RedPlatform(width/2, height-600);
  platforms.push(redPlatform);

  //Green platform
  let greenPlatform = new GreenPlatform(width/2, height-800);
  platforms.push(greenPlatform);
  greenPlatform = new GreenPlatform(width/2, height-900);
  platforms.push(greenPlatform);

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
  player.wrap();


  //Display platforms
  for (let i = 0; i < platforms.length; i++){
    let platform = platforms[i];
    platform.display();
    platform.pressedOn(player);

    player.collision(platform);
  }

}
