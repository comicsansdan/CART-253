class BluePlatform extends Platform {

  constructor(x,y,w, platformImage){
    super(x,y, w);
    this.note = `E4`;
    this.moving = false;

    this.image = platformImage;
  }

  move(level){
    super.move();
    if(level === 5){
      this.moving = true;
    }
    else if(level === 8){
      this.moving = true;
    }
    else if(level === 9){
      this.moving = true;
    }
  }

  display(){
    super.display();
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }


}
