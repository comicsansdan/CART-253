class RedPlatform extends Platform {

  constructor(x,y,w){
    super(x,y,w);
    this.note = `A5`;
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
