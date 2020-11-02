class Platform {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 40;
  }

  display() {
    push();
    fill(255, 255, 0);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
