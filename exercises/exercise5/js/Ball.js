class Ball {

  constructor(x, y) {
  //Ball
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.collected = false;

  //Text
    // this.score = 0;
    // this.textSize = 50;
    // this.text = `Score:`;
    // this.textX = 50;
    // this.textY = 50;
  }

  gravity(force) {
    this.ay += force;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed)
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed)

    this.x += this.vx;
    this.y += this.vy;

//If balls go below off-screen, they will reappear above
    if (this.y - this.size/2 > height) {
      this.x = random(0, width);
      this.y = random(-400, -100);
    }
  }

  bounce(paddle) {
  //Paddle bounces not based on distance, but based on whether it is in the paddles x-y coordinates
    if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) {

        //Bounce
        let dx = this.x - paddle.x;
        this.vx = this.vx + map(dx, -paddle.width/2, paddle.width/2, -2, 2);

        this.vy = -this.vy;
        this.ay = 0;

      }
  }

//Check to see if basket catches the ball
  collect(basket) {
    if (this.x > basket.x - basket.width/2 &&
        this.x < basket.x + basket.width/2 &&
        this.y + this.size/2 > basket.y - basket.height/2 &&
        this.y - this.size/2 < basket.y + basket.height/2) {

        this.collected = true;
      }
  }

  display(){
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();

    // push();
    // fill(255);
    // textSize(this.textSize);
    // text(this.text, this.textX, this.textY);
    // text(this.score, this.textX, this.textY+50);
    // pop();
  }

}