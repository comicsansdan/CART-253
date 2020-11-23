class Player {

  constructor(x, y, playerImage, playerImage2){
    this.x = x;
    this.y = y;
    this.minHeight = y;
    //display variables
    this.size = 60;
    this.image = playerImage;
    this.speed = 5;
    this.fallingSpeed = 7.5;
    this.vy = 0;
    this.force = 1;
    this.jumpPower = 15;
    this.jump = false;
    this.jumpCounter = 0;
  }

  controls(){
    //Left and right movement
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.speed;
      this.image = playerImage2;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      this.x += this.speed;
      this.image = playerImage;
    }
    else {
      this.x += 0;
      this.image = playerImage;
    }

    //Jump
    if(keyIsDown(32)){
      this.jump = true;
    }
    else {
      this.jump = false;
    }
  }

  gravity(){
    if (this.y >= this.minHeight+this.size/2 && !this.jump){
      this.y = this.y;
      this.jumpCounter = 0; //Resets jump counter (limits the amount of time in the air you can jump)
    }
    else {
      this.y += this.vy*this.force; //Falling (gravity)
    }

    if (this.jump){
      if(this.y <= -40 || this.jumpCounter >= this.jumpPower )// Reached max jump height/jumpPower
        if(this.y >= this.minHeight+this.size/2){
          this.y = this.minHeight+this.size/2; //Stays at the minimum height
        }
        else {
        this.vy = this.fallingSpeed;
      }
      else {
      this.vy = -this.jumpPower; //Jumping (only once)
      this.jumpCounter += 1 //Add to jump counter
      }
    }
    else {
      this.vy = this.fallingSpeed;
    }
  }

  collision(platform){
    //Player colides with platform
    if(this.x >= platform.x-platform.width/2 &&
      this.x <= platform.x+platform.width/2 &&
      this.y+this.size/2 >= platform.y-platform.height/2 &&
      this.y+this.size/2 <= platform.y+platform.height/2 &&
      !this.jump){
      this.y = this.y;//dont fall
      this.vy = 0;
      this.jumpCounter = 0;//Allows to jump again
    }

  }

  wrap(){
    //Object doesn't go out of bounds
    this.x = constrain(this.x, 0+this.size/2, width-this.size/2);
    this.y = constrain(this.y, -40, height);
  }

  display(){
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }

}
