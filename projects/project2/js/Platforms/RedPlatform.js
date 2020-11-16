class RedPlatform extends Platform {

  constructor(x,y){
    super(x,y);
    this.activated = false;
  }

  display(){
    super.display();
    push();
    rectMode(CENTER);
    fill(242, 1, 1);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
