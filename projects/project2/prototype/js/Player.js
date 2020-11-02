class Player {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 30;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.speed = 2;
    this.jump = true;
  }

  gravity(force) {
    this.ay += force;
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;

    this.vy += this.ay;

    this.vy = constrain(this.vy, -this.speed, this.speed)
    this.y += this.vy;
  }

  handleInput(){
    //Move left
    if (keyIsDown(LEFT_ARROW)){
      this.vx = -this.speed;
    }
    //Move right
    else if (keyIsDown(RIGHT_ARROW)){
      this.vx = this.speed;
    }
    else  {
      this.vx = 0;
    }
    //Jump
    if (keyIsDown(32) && this.jump){
      this.vy = -this.vy;
      this.ay = 0;

      this.jump = false;
    }
  }

  wrap(platform){
    if (this.x > width) {
      this.x -= width;
    }
    else if (this.x < 0) {
      this.x += width;
    }

    this.y = constrain(this.y, 0, platform.y-platform.height);

  }

  jumpCooldown(platform){
    if (this.x > platform.x - platform.width/2 &&
        this.x < platform.x + platform.width/2 &&
        this.y + this.size/2 > platform.y - platform.height/2 &&
        this.y - this.size/2 < platform.y + platform.height/2) {
          this.jump = true;
        }
  }

  display(){
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
