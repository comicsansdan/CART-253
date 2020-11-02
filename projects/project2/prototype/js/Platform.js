class Platform {

  constructor(x, y){
    this.x = 600;
    this.y = 300;
    this.width = 200;
    this.height = 40;
  }

  display() {
    push();
    fill(255, 120, 0);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
