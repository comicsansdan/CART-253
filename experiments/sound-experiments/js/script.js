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

// OSCILLATOR ////////////////////////////////////////////////////////////////////
let oscillator;
let t = 0;

// POLYSYNTH ////////////////////////////////////////////////////////////////////
let synth; //Piano basically
let notes = [`F2`, `G2`, `Ab3`, `Bb3`, `C3`, `Db3`, `Eb3`, `F4`]; // F-minor notes
let currentNote = 0;

// AUDIOIN ////////////////////////////////////////////////////////////////////
let mic;
let ghost = {
  x:0,
  y:0,
  vx:0,
  vy:0,
  image: undefined,
};

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
  music = loadSound(`assets/sounds/bark.wav`);
  ghost.image = loadImage(`assets/images/clown.png`);
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
  userStartAudio();

// AUDIOIN ////////////////////////////////////////////////////////////////////
  mic = new p5.AudioIn();
  mic.start();

  ghost.x = width/2;
  ghost.y = height/2;

// POLYSYNTH ////////////////////////////////////////////////////////////////////
  // synth = new p5.PolySynth();

// OSCILLATOR ////////////////////////////////////////////////////////////////////
  // oscillator = new p5.Oscillator(440,`sine`);
  // oscillator.amp(0.2); //amp. Controls volume
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

// AUDIOIN ////////////////////////////////////////////////////////////////////
  //Get level of microphone
  let level = mic.getLevel();
  if (level > 0.1) {
    //Exit stage right!
    ghost.vx = 20;
  }

  //Move the ghost
  ghost.x += ghost.vx;
  ghost.y += ghost.vy;

  //Tremble ghost
  ghost.x += random(-1,1);
  ghost.y += random(-1,1);

  //Display ghost
  push();
  imageMode(CENTER);
  tint(255, 50);
  image(ghost.image, ghost.x, ghost.y);
  pop();

// OSCILLATOR ////////////////////////////////////////////////////////////////////
  // let noiseValue = noise(t);
  // let newFreq = map(noiseValue, 0, 1, 20, 2000);
  // oscillator.freq(newFreq); //freq. Frequency controls the pitch of the noise 0 = low, to high pitch
  //
  // t += 0.5;
}

// function keyPressed(){
// POLYSYNTH ////////////////////////////////////////////////////////////////////
  //Start the ghost player
  // setInterval(playRandomNote, 150);

// OSCILLATOR ////////////////////////////////////////////////////////////////////
  // oscillator.start();
// }

// function playRandomNote(){
// POLYSYNTH ////////////////////////////////////////////////////////////////////\
  // let note = notes[currentNote];
  // synth.play(note, 1, 0, 0.1);
  //
  // currentNote += 1;
  // if (currentNote === notes.length){
  //   currentNote = 0;
  // }
// }

// function mouseReleased(){
//   oscillator.stop();
// }

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
