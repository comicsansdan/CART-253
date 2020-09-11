/**************************************************
Activity 02: Draw an Alien
Daniel Cacatian

This activity consist of creating an alien by following Pippin's instructions or by ourselves with JavaScript and p5 references.
**************************************************/

// setup()
//
// Setup that contains code which forms the Alien.
function setup() {
createCanvas(750, 610);

background(34, 41, 97);

noStroke();

//ANTENNA///////////////////////////////////////////////////////
// Line
fill(171, 193, 58);
ellipse(375, 190, 20, 150);

// Dot
fill(171, 193, 58);
ellipse(375, 115, 60, 60);

//BODY///////////////////////////////////////////////////////
// Body
fill(51, 131, 199);
ellipse(375, 570, 525, 600);

// Collar
fill(135, 83, 155);
ellipse(375, 395, 450, 330);

//HEAD///////////////////////////////////////////////////////
fill(171, 193, 58);
ellipse(375, 355, 480, 330);

//EYES///////////////////////////////////////////////////////
// Middle eye
fill(255, 255, 255);
ellipse(375, 270, 100, 100);

// Left eye
fill(255, 255, 255);
ellipse(265, 325, 100, 100);

// Right eye
fill(255, 255, 255);
ellipse(485, 325, 100, 100);

//IRIS///////////////////////////////////////////////////////
// Middle iris
fill(0, 0, 0);
ellipse(375, 290, 25, 25);

// Left iris
fill(0, 0, 0);
ellipse(245, 340, 25, 25);

// Right eye
fill(0, 0, 0);
ellipse(510, 325, 25, 25);

//MOUTH///////////////////////////////////////////////////////
// Mouth hole
fill(61, 72, 20);
ellipse(375, 430, 75, 30);

// Smirk
fill(61, 72, 20);
ellipse(375, 430, 300, 2.5);

}

// draw()
//
// Draw() does nothing.
function draw() {

}
