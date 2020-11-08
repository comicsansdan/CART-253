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
// OSCILLATOR ////////////////////////////////////////////////////////////////////
let oscillator;
let t = 0;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);

// OSCILLATOR ////////////////////////////////////////////////////////////////////
  userStartAudio();

  oscillator = new p5.Oscillator(440,`sine`);
  oscillator.amp(0.2); //amp. Controls volume
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

// OSCILLATOR ////////////////////////////////////////////////////////////////////
  let noiseValue = noise(t);
  let newFreq = map(noiseValue, 0, 1, 20, 2000);
  oscillator.freq(newFreq); //freq. Frequency controls the pitch of the noise 0 = low, to high pitch

  t += 0.5;
}

// OSCILLATOR ////////////////////////////////////////////////////////////////////
function mousePressed(){
  oscillator.start();
}

function mouseReleased(){
  oscillator.stop();
}

// REIVISITED SOUND (RATE) ////////////////////////////////////////////////////////////////////
//   let newRate = map(mouseX, 0, width, -3, 3);
//   barkSFX.rate(newRate);
// }

// REIVISITED SOUND (RATE) ////////////////////////////////////////////////////////////////////
// function mousePressed(){
//     barkSFX.play();
// }
//
// function keyPressed(){
//   if (!music.isPlaying()) {
//     music.play();
//   }
// }
