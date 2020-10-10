/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict";

let circle = {
  x:0,
  y:0,
}

let barkSFX;
let music;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
  music = loadSound(`assets/sounds/bark.wav`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  circle.x = mouseX;
  circle.y = mouseY;

  ellipse(circle.x,circle.y,100);
}

// SOUND ////////////////////////////////////////////////////////////////////
// function mousePressed(){
//   if (!music.isPlaying()) {
//     music.play();
//   }
// }
//
// function keyPressed(){
//   if (!music.isPlaying()) {
//     music.play();
//   }
// }
