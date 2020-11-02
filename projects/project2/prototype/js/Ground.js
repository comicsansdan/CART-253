class Ground {

  constructor(x,w){
    this.x = x;
    this.y = 450;
    this.width = w;
    this.height = 100;
  }

  display(width){
    push();
    noStroke();
    rectMode(CENTER);
    fill(100,200,75);
    rect(this.x, this.y, this.width, this.height)
  }
}
