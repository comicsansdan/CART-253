/**************************************************
Exercise 06: Make Some Noise
Daniel Cacatian

This project use sound in form of a puzzle. Play the tune in the correct order and you win
**************************************************/

//Song
//The tune the player must recreate
let song = {
  playing: false,
};
let notes = [`B5`, `A5`, `F5`, `B5`, `A5`, `F5`, `A5`, `F5`, `E5`, `D5`, `E5`, `E5` ];
let currentNote = 0;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 800);
  userStartAudio();

  song = new p5.PolySynth();


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  console.log(currentNote)

}

function mousePressed(){
  if(!song.playing){
  setInterval(playSong, 500);
  song.playing = true;
  }

}

function playSong(){
  if (song.playing){
  let note = notes[currentNote];
  song.play(note, 1, 0, 0.2);

  currentNote += 1;

  if (currentNote === notes.length){
    currentNote = 0;
    song.playing = false;
  }
  }
}
