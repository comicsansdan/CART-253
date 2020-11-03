class Key {

  constructor(x, y, size, keyImage ){
    this.x = x;
    this.y = y;
    this.size = size;
    this.image = keyImage;
    this.acquired = false;
  }

  display() {
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.size, this.size);
  pop();
  }

  grabbed(player, exit){
    let d = dist(this.x, this.y, player.x, player.y);
    if(d < this.size/2 + player.size/2){
      this.acquired = true;
      exit.locked = false;
    }
  }

}
