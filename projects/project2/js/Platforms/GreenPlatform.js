class GreenPlatform extends Platform {

  constructor(x,y, w, platformImage){
    super(x,y, w);
    this.note = `G4`;
    this.moving = false;

    this.image = platformImage;
  }

  move(level){
    super.move();
    if(level === 7){
      this.moving = true;
    }
    else if(level === 8){
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
