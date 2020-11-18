/**************************************************
Melody Tower
Daniel Cacatian
Creating a platforming game that incorporates platforming and sound mechanics within p5.js
**************************************************/

//User himself
let player;

//platform player can jump on
let platforms = [];
let bluePlatform; //E note
let orangePlatform; //B note
let redPlatform; //A note
let greenPlatform; //G note


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);
  noStroke();

  //Player setup
  player = new Player(width/2, height-100);

  scene1Setup();

}

function scene1Setup(){
  //Platforms IN ORDER
  //Blue platform
  let bluePlatform = new BluePlatform(width/2, height-150, 500);
  platforms.push(bluePlatform);
  bluePlatform = new BluePlatform(width/2, height-600, 500);
  platforms.push(bluePlatform);

  //Orange platform
  let orangePlatform = new OrangePlatform(width/2, height-350 , 500);
  platforms.push(orangePlatform);

  //Red platform
  let redPlatform = new RedPlatform(width/2, height-500 , 500);
  platforms.push(redPlatform);
  redPlatform = new RedPlatform(width/2, height-950 , 500);
  platforms.push(redPlatform);

  //Green platform
  let greenPlatform = new GreenPlatform(width/2, height-750 , 500);
  platforms.push(greenPlatform);
  greenPlatform = new GreenPlatform(width/2, height-850 , 500);
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
  rect(width / 2, windowHeight, width, 120);
  pop();

  //Display player
  player.controls();
  player.display();
  player.gravity();
  player.wrap();


  //Display platforms
  for (let i = 0; i < platforms.length; i++){
    let platform = platforms[i];
    platform.display();
    platform.pressedOn(player);

    player.collision(platform);
  }

}
