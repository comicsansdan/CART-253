class NoteE5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `E5`;
    this.sequence = 5;
  }

  mousePressed(){
    super.mousePressed();
    if (this.order === 9){
      this.order = 10;
    }
    else if (this.order === 11){
      this.order = 12;
    }
    else if (this.order === 12){
      this.order = 13;
    }
    else {
      this.order = 1;
    }
  }

  display(){
    super.display();
    push();
    noStroke();
    fill(128, 0, 156);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
