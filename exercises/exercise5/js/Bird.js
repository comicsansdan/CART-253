class Bird {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 70;
    this.speedX = 6;
    this.speedY = 6;
    this.maxSpeed = 5;
  }

  //Birds movement
  move() {
    //Bird's movement controls (X axis)
    this.x += this.speedX;
    if (this.x > width) {
      this.speedX = -this.speedX;
    }
    if (this.x < 0) {
      this.speedX = -this.speedX;
    }

    //Bird's movement controls (Y axis)
    this.y += this.speedY;
    if (this.y > height) {
      this.speedY = -this.speedY;
    }
    if (this.y < 0) {
      this.speedY = -this.speedY;
    }

    // Constrain to the canvas (so no out of bounds)
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // display() draws our bird onto the canvas
  display() {
    push();
    // Wings on either side
    fill(207, 251, 238);
    noStroke();
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();

    // Body
    push();
    fill(207, 251, 238);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

    // Eyes
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(this.x - this.size / 10, this.y, this.size / 10);
    ellipse(this.x + this.size / 10, this.y, this.size / 10);
    pop();
  }
}
