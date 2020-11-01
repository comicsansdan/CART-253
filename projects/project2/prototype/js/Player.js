class Player {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.speed = 4;
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
    //Jump
    else if (keyIsDown(32) && this.jump){
      this.vy = -this.vy;
      this.ay = 0;

      this.jump = false;
    }
    else  {
      this.vx = 0;
    }
  }

  wrap(canvasHeight){
    this.y = constrain(this.y, 0, canvasHeight);
  }

  display(){
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
