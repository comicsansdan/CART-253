class Player {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 30;
    this.speed = 5;
  }

  display(){
    push();
    noStroke();
    fill(255,0,0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
