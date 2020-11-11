/**************************************************
Exercise 06: Make Some Noise
Daniel Cacatian

This project use sound in form of a puzzle. Play the tune in the correct order and you win
**************************************************/

//User
let player;

//Music blocks
let musicBlocks = [];
let noteB5; //blue
let noteA5; //red
let noteF5; //green
let noteE5; //purple
let noteD5; //orange


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 800);
  userStartAudio();

  song = new p5.PolySynth();

  //Note B5
    let noteB5 = new NoteB5(400,100);
    musicBlocks.push(noteB5);

  //Note A5
    let noteA5 = new NoteA5(200,700);
    musicBlocks.push(noteA5);

  //Note F5
    let noteF5 = new NoteF5(700,400);
    musicBlocks.push(noteF5);

  //Note E5
    let noteE5 = new NoteE5(600,700);
    musicBlocks.push(noteE5);

  //Note D5
    let noteD5 = new NoteD5(100,400);
    musicBlocks.push(noteD5);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  //Display the player
  player = new Player(mouseX, mouseY);
  player.display();

  for (let i = 0; i < musicBlocks.length; i++) {
    let musicBlock = musicBlocks[i];
    musicBlock.display();

  }

}

//MousePressed function allows to play the notes
function mousePressed(){
  for (let i = 0; i < musicBlocks.length; i++) {
    let musicBlock = musicBlocks[i];

    musicBlock.mousePressed(width/2, height/2);

  }
}
