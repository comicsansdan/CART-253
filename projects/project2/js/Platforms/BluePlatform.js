class BluePlatform extends Platform {

  constructor(x,y,w){
    super(x,y, w);
    this.note = `E4`;
  }

  display(){
    super.display();
    push();
    rectMode(CENTER);
    fill(4, 143, 255);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
