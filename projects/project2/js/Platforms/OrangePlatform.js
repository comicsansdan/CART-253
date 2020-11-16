class OrangePlatform extends Platform {

  constructor(x,y){
    super(x,y);
    this.note = `G4`;
  }

  display(){
    super.display();
    push();
    rectMode(CENTER);
    fill(255, 101, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
