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

let level = 1;

function preload(){
  //Player image
  playerImage = loadImage(`assets/images/Player.png`);
  playerImage2 = loadImage(`assets/images/PlayerFlip.png`);

  //Platform images
  blueImage = loadImage(`assets/images/Blue.png`);
  orangeImage = loadImage(`assets/images/Orange.png`);
  redImage = loadImage(`assets/images/Red.png`);
  greenImage = loadImage(`assets/images/Green.png`);
  purpleImage = loadImage(`assets/images/Purple.png`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, windowHeight);
  noStroke();
  userStartAudio();

  //Player setup
  player = new Player(width/2, height-100, playerImage, playerImage2);

  //Level setup
  if(level === 1){
    level1Setup();
  }
  else if(level === 2){
    level2Setup();
  }
  else if(level === 3){
    level3Setup();
  }

}


// draw()
//
// Description of draw() goes here.
function draw() {

  background(255);

  //Ground
  push();
  fill(100, 200, 75);
  rectMode(CENTER);
  rect(width / 2, windowHeight, width, 90);
  pop();

  //Display player
  player.controls();
  player.display();
  player.gravity();
  player.wrap();

  levelComplete();

  //Display platforms
  for (let i = 0; i < platforms.length; i++){
    let platform = platforms[i];
    platform.display();
    platform.playNote();
    platform.pressedOn(player);

    player.collision(platform);
  }

}

function levelComplete(){
  if(player.y <= -25){
    level++ ;
    player.y = height-100;
  }
}

//LEVEL PLATFORM SETUPS////////////////////////////////////////////////////////
//Level 1
function level1Setup(){
  //Platforms IN ORDER
  bluePlatform = new BluePlatform(width/2, height-150, 250, blueImage);
  platforms.push(bluePlatform);

  orangePlatform = new OrangePlatform(width/2, height-300 , 250, orangeImage);
  platforms.push(orangePlatform);

  redPlatform = new RedPlatform(width/2, height-450 , 250, redImage);
  platforms.push(redPlatform);

  bluePlatform = new BluePlatform(width/2, height-600, 250, blueImage);
  platforms.push(bluePlatform);

  greenPlatform = new GreenPlatform(width/2, height-700 , 250, greenImage);
  platforms.push(greenPlatform);

  greenPlatform = new GreenPlatform(width/2, height-750 , 250, greenImage);
  platforms.push(greenPlatform);

  redPlatform = new RedPlatform(width/2, height-900 , 250, redImage);
  platforms.push(redPlatform);
}

//level 2
function level2Setup(){
  //Platforms IN ORDER
  bluePlatform = new BluePlatform(100, height-150, 100);
  platforms.push(bluePlatform);

  orangePlatform = new OrangePlatform(width/2, height-300 , 100);
  platforms.push(orangePlatform);

  redPlatform = new RedPlatform(500, height-400 , 100);
  platforms.push(redPlatform);

  bluePlatform = new BluePlatform(500, height-550, 100);
  platforms.push(bluePlatform);

  greenPlatform = new GreenPlatform(width/2, height-650 , 100);
  platforms.push(greenPlatform);

  greenPlatform = new GreenPlatform(100, height-700 , 100);
  platforms.push(greenPlatform);

  redPlatform = new RedPlatform(width/2, height-850 , 100);
  platforms.push(redPlatform);
}

//level 3
function level3Setup(){
  //Platforms IN ORDER
  bluePlatform = new BluePlatform(150, height-150, 150);
  platforms.push(bluePlatform);

  redPlatform = new RedPlatform(width/2, height-300 , 150);
  platforms.push(redPlatform);

  purplePlatform = new PurplePlatform(450, height-450 , 150);
  platforms.push(purplePlatform);

  orangePlatform = new OrangePlatform(width/2, height-600 , 150);
  platforms.push(orangePlatform);

  redPlatform = new RedPlatform(150, height-750 , 150);
  platforms.push(redPlatform);

  orangePlatform = new OrangePlatform(width/2, height-900 , 150);
  platforms.push(orangePlatform);

}
