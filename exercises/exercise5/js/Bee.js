class Bee {

  // constructor() sets up our starting properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.minSize = 10; // If we get smaller than this minimum we're dead
    this.maxSize = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1;
    this.maxSpeed = 5;
    this.shrinkRate = 0.05; // How much smaller we get each frame
    this.growRate = 0.05;
    this.alive = true; // The Bee starts out alive!
  }

  // shrink() causes the bee to get smaller over time
  shrink() {
    // Shrink by reducing the size by a set amount
    this.size = this.size - this.shrinkRate;
    // Check if we're smaller than the minimum size
    if (this.size < this.minSize) {
      // If so, we're dead
      this.alive = false;
    }
  }

  tryToPollinate(flower) {
    let d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.size / 2 + flower.size / 2 + flower.petalThickness) {
      this.grow();
      flower.pollinate();
    }
  }

  grow() {
    this.size += this.growRate;
    this.size = constrain(this.size, this.minSize, this.maxSize);
  }

  eaten(bird) {
    let d = dist(this.x, this.y, bird.x, bird.y);
    if (d < this.size / 2 + bird.size / 2) {
      this.alive = false; // The Bee dies
    }
  }

  // move() moves the bee by potentially changing direction
  // and then changing position based on velocity
  move() {
    // Up movement
    if (keyIsDown(38)) {
      this.vy += -this.speed;
    } else if (keyIsDown(87)) {
      this.vy += -this.speed;
    }
    //Right movement
    if (keyIsDown(39)) {
      this.vx += this.speed;
    } else if (keyIsDown(68)) {
      this.vx += this.speed;
    }
    //Down movement
    if (keyIsDown(40)) {
      this.vy += this.speed;
    } else if (keyIsDown(83)) {
      this.vy += this.speed;
    }
    //Left movement
    if (keyIsDown(37)) {
      this.vx += -this.speed;
    } else if (keyIsDown(65)) {
      this.vx += -this.speed;
    }

    // Update position with velocity to actually move
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    // Constrain to the speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    // Constrain to the canvas (guess it's a walled garden!)
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // display() draws our bee onto the canvas
  display() {
    push();
    // Wings on either side
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();

    // Body
    push();
    fill(225, 225, 50);
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
