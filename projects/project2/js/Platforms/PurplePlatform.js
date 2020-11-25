class PurplePlatform extends Platform {

  constructor(x,y, w, platformImage){
    super(x,y, w);
    this.note = `C5`;
    this.moving = false;

    this.image = platformImage;
  }

  move(level){
    super.move();
    if(level === 9){
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
