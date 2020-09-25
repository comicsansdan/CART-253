/**************************************************
Exercise 2
Daniel Cacatian

This activity consist of creating a simulation where there are conditionals, interactivity, loops and an image!
**************************************************/

// VARIABLES //////////////////////////////////////

let bg = {
  r: 0,
  g: 0,
  b: 0,
}

let clown = {
  x: 0,
  y: 0,
  size: 300,
  image: undefined,
  speedX: 15,
  speedY: 15,
  maxSpeed: 40,
}

function preload() {
  clown.image = loadImage("assets/images/clown.png")
}

let user = {
  x: 0,
  y: 0,
  size: 50,
}

// setup()
//
// Setup that contains code for the canvas and the random spawn for the clown.
function setup() {

  createCanvas(windowWidth, windowHeight);

  noStroke();

  clown.y = random(0,height);

}

// draw()
//
// Draw() consists of all the shapes, background and animations.
function draw() {

  background(bg.r, bg.g, bg.b);

  // GAME OVER /////////////////////////////////////////////////////////////////
  //Check for getting caught by the clown
  let d = dist(user.x, user.y, clown.x, clown.y);
  if (d < clown.size/2 + user.size/2) {
    bg.r = 255;
    background(bg.r, bg.g, bg.b);
    noLoop();
  }

  // USER ///////////////////////////////////////////////////////////////////////////
  //Display user & controls
  user.x = mouseX;
  user.y = mouseY;

  ellipse(mouseX, mouseY, user.size);

  // CLOWN (VILLAIN) /////////////////////////////////////////////////////////////////
  //Clown's mouvement (X axis)
  clown.x += clown.speedX;
  if (clown.x > width){
      clown.speedX = -clown.speedX;
    }
    if (clown.x < 0){
        clown.speedX = -clown.speedX;
      }

  //Clown's mouvement controls (Y axis)
  clown.y += clown.speedY;
  if (clown.y > height){
    clown.speedY = -clown.speedY;
  }
  if (clown.y < 0){
    clown.speedY = -clown.speedY;
  }

  //Display clown image
  imageMode(CENTER);
  image(clown.image, clown.x, clown.y, clown.size, clown.size);


}
