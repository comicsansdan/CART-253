/**************************************************
Conditionals Experiments
Daniel Cacatian

Experimenting with p5's conditionals code.
**************************************************/

let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 2,
}

let displayCircle = false;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundShade)

  /*circle.x += circle.speed;
  fill(255,255,255);

//CONDITIONALS (ONLY 1 CONDITION)////////////////////////////////////////////////////
  if (circle.x > width){
    circle.speed = -circle.speed;
  }

  if (circle.x < 0){
    circle.speed = -circle.speed;
  }

  if (mouseY < height/3){
    fill(255,0,0);
  }
  else if (mouseY < 2 * height/3) {
    fill(0,255,0);
  }
  else{
    fill(0,0,255);
  }

  //CONDITIONALS (WITH MULTIPLE CONDITIONS)////////////////////////////////////////////////////
  if (!(circle.x < width/3)) {
      fill(200, 40, 180);
  }


  ellipse(circle.x, circle.y, circle.size);*/

  //BOOLEANS////////////////////////////////////////////////////
  if (mouseIsPressed) {
    displayCircle = true;
  }

  if (displayCircle) {
    ellipse(250,250,100,100);
  }


}
