class Basket {

//Construct the basket
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height/2;
    this.ax = 2;
    this.vx = 0;
    this.maxSpeed = 20;
    this.size = 40;
  }

  //Move's the basket left and right with A and D keys
    move() {
      //Right movement
      if (keyIsDown(68)) {
        this.vx += this.ax;
      }
      //Left movement
      if (keyIsDown(65)) {
        this.vx += -this.ax;
      }
      //Constrain the speed of the basket
      this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);

      this.x += this.vx;

      //Constrain (doesn't go out of bounds)
      this.x = constrain(this.x, 0, windowWidth);
    }

  //Displays the paddle
    display() {
      push();
      fill(170, 118, 68);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
      pop();
    }
}
