/**************************************************
Functions Experiments
Daniel Cacatian

Experimenting with p5's functions.
**************************************************/

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  // FUNCTIONS WITH RETURN VALUES////////////////////////////////////////////////
  let hotCelcius = toCelcius(100);
  console.log('100 degrees Fahrenheit is ${hotCelcius} degrees Celcius');

  let coldCelcius = toCelcius(10);
  console.log('10 degrees Fahrenheit is ${coldCelcius} degrees Celcius');
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // FUNCTIONS PARAMETERS////////////////////////////////////////////////
  // parrallels(100, 100, 5, 1, 100,1);
  // parrallels(50, 50, 10, 2, 20, 10);
  // parrallels(200, 200, 15, 7, 3, 20);
  // parrallels(23, 99, 20, 0.5, 300, 1);
  //FUNCTIONS//////////////////////////////////////////////////////
  // move();
  // wrap();
  // display();

}

// FUNCTIONS WITH RETURN VALUES////////////////////////////////////////////////
// Used to return math calculations
function toCelcius(fahrenheit){
  let celcius = (fahrenheit - 32) * 5/9;
  return celcius;
}

// FUNCTIONS PARAMETERS////////////////////////////////////////////////
// function parrallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) {
//   //For loop
//   for (let i = 0; i < numLines; i++) {
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     rect(x, y, lineWidth, lineHeight);
//     x += lineSpacing;
//   }
// }

//FUNCTIONS//////////////////////////////////////////////////////
// Functions can also be reffered as modular. Also reuse
// function move() {
//   circle.x += circle.vx;
//   circle.y += circle.vy;
// }
//
// function wrap() {
//   if (circle.x > width) {
//     reset();
//   }
// }
//
// function display() {
//   rectMode(CENTER);
//   rect(circle.x, circle.y, circle.size, circle.size);
// }
//
// function reset() {
//   circle.x = 0;
//   circle.vx += 2;
//   circle.vy += -0.25;
//   circle.size += 5;
// }
//
// function mousePressed() {
//   reset();
// }
