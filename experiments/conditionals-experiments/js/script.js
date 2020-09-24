/**************************************************
Conditionals Experiments
Daniel Cacatian

Experimenting with p5's conditionals code.
**************************************************/

let backgroundShade = 0;
let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.25,
  maxSpeed: 5,
}

let displayCircle = false;

let angle = 0;
let rectScale = 0;

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

  //   //INTERMEDIATE DRAWING////////////////////////////////////////////////////

  push();
  fill(255,0,0);
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate(angle);
  scale(rectScale);
  rect(0, 0, 100, 100);
  pop();

  angle += 0.05;
  rectScale += 0.01;

  // fill(255, 0, 0);
  // rect(0, 0, 100, 100);
  //
  // translate(200, 100);
  // fill(0, 255, 0);
  // rect(0, 0, 100, 100);
  //
  // translate(0, 200);
  // fill(0, 0, 255);
  // rect(0, 0, 100, 100);

  // push();
  // fill(255,0,0);
  // stroke(0, 255, 255);
  // strokeWeight(10);
  // rect(100,100,100,100);
  // pop();
  //
  // push();
  // fill(0,0,255);
  // stroke(255, 255, 255);
  // strokeWeight(1)
  // rect(300, 100, 100, 100);
  // pop();

  //   //MOVEMENT////////////////////////////////////////////////////

  // if (mouseX < circle.x) {
  //   circle.ax = -circle.acceleration;
  // } else {
  //   circle.ax = circle.acceleration;
  // }
  //
  // if (mouseY < circle.y) {
  //   circle.ay = -circle.acceleration;
  // } else {
  //   circle.ay = circle.acceleration;
  // }
  //
  // circle.vx += circle.ax
  // circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);
  // circle.vy += circle.ay
  // circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);
  //
  // circle.x += circle.vx;
  // circle.y += circle.vy;
  //
  // ellipse(circle.x, circle.y, circle.size);

  //
  //   circle.x += circle.speed;
  //   fill(255,255,255);
  //
  // //CONDITIONALS (ONLY 1 CONDITION)////////////////////////////////////////////////////
  //   if (circle.x > width){
  //     circle.speed = -circle.speed;
  //   }
  //
  //   if (circle.x < 0){
  //     circle.speed = -circle.speed;
  //   }
  //
  //   if (mouseY < height/3){
  //     fill(255,0,0);
  //   }
  //   else if (mouseY < 2 * height/3) {
  //     fill(0,255,0);
  //   }
  //   else{
  //     fill(0,0,255);
  //   }
  //
  //   //CONDITIONALS (WITH MULTIPLE CONDITIONS)////////////////////////////////////////////////////
  //   if (!(circle.x < width/3)) {
  //       fill(200, 40, 180);
  //   }
  //
  //
  //   ellipse(circle.x, circle.y, circle.size);*/
  //
  //   //BOOLEANS////////////////////////////////////////////////////
  //   if (mouseIsPressed) {
  //     displayCircle = true;
  //   }
  //
  //   if (displayCircle) {
  //     ellipse(250,250,100,100);
  //   }
  //
  //   //LOOPS////////////////////////////////////////////////////

  // noStroke();
  // fill(100, 200, 100);
  //
  //   let caterpillar = {
  //     x:100,
  //     y:250,
  //     segmentSize: 50,
  //   }
  //
  //   let x = caterpillar.x;
  //   let numSegments = 8;
  //   let segmentsDrawn = 0;
  //
  //   while (segmentsDrawn < numSegments) {
  //     ellipse(x,caterpillar.y,caterpillar.segmentSize);
  //     x += 40;
  //     segmentsDrawn ++;
  //   }*/

  // let x = caterpillar.x
  // let numSegments = 10;
  //
  // for (let i = 0; i < numSegments; i++) {
  //   ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //   x += 40;
  // }

  //   //   //MOUSE INPUT////////////////////////////////////////////////////
  //
  //
  //   ellipse(circle.x,circle.y,circle.size);
  //   background (bg.r, bg.g, bg.b);
  //
}
//
// let bg = {
//   r:0,
//   g:0,
//   b:0,
// }
//
// function mouseWheel() {
//   bg.r = random(0,255);
//   bg.g = random(0,255);
//   bg.b = random(0,255);
// }
