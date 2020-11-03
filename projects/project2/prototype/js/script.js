/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let gravityForce = 1;

//User himself
let player;

//platform player can jump on
let platform;

//key item
let key;

//exit
let exit;

let state = `simulation`;

function preload(){
  keyImage = loadImage(`assets/images/key.png`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 500);
  noStroke();

  x = width / 2;
  y = 375;
  player = new Player(x, y);

  platform = new Platform(200, 300, 200, 40);

  key = new Key(200, 50, 50, keyImage);

  exit = new Exit(700, 375, 50, 60);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(135, 206, 235);

if(state === `simulation`) {
  simulation();
}
else if(state === `end`) {
  end();
}

}

//Simulation state/////////////////////////////////////////////////////////////
function simulation(){

  //Display exit
  exit.display();

  //Ground
  push();
  fill(100, 200, 75);
  rectMode(CENTER);
  rect(width / 2, 450, width, 100);
  pop();

  //Display player
  player.controls();
  player.display();
  player.gravity(gravityForce);
  player.collision(platform, exit, state);

  //Player exits{
  if(player.exited){
    state = `end`;
  }

  //Platform
  platform.display();

  //Display key
  if(!key.acquired){
    key.display();
    key.grabbed(player, exit);
  }

}

function end(){
  push();
  textAlign(CENTER);
  textSize(60);
  text(`you win!`, width/2, height/2);
  pop()
}
