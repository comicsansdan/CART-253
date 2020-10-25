class Basket {

//Construct the basket
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height/2;
    this.speed = 2;
    this.maxSpeed = 20;
    this.size = 40;
    this.active = true;
  }

  //Move's the basket left and right with A and D keys
    move() {
      //Right movement
      if (keyIsDown(68)) {
        this.x += this.speed;
      }
      //Left movement
      if (keyIsDown(65)) {
        this.x += -this.speed;
      }

      //Constrain the speed of the basket
      this.speed = constrain(this.speed, -this.maxSpeed, this.maxSpeed);

      //Constrain (doesn't go out of bounds)
      player.x = constrain(this.x, 0, width);
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
