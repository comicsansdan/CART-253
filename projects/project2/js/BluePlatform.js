class BluePlatform extends Platform {

  constructor(x,y){
    super(x,y);
    this.activated = false;
  }

  display(){
    super.display();
    push();
    fill(4, 143, 255);
    pop();
  }

}
