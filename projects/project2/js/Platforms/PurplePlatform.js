class PurplePlatform extends Platform {

  constructor(x,y, w){
    super(x,y, w);
    this.note = `C5`;
  }

  display(){
    super.display();
    push();
    rectMode(CENTER);
    fill(128, 0, 156);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
