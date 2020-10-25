class Paddle {

//Constructs the paddle with parameters for the width and height
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
  }

//Move's the paddle left and right with the mouse position
  move() {
    this.x = mouseX;
  }

//Displays the paddle
  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
