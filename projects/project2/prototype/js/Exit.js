class Exit {

  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.locked = true;
  }

  display(){
    push();
    rectMode(CENTER);
    fill(100);
    if(!this.locked){
      fill(255)
    }
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
