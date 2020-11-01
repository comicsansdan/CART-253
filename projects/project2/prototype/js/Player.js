class Player {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.speed = 5;
    this.maxSpeed = 10;
    this.jump = true;
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
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }

  display(){
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
