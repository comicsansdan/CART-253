class NoteA5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `A5`;
  }

  mousePressed(){
    super.mousePressed();
  }

  display(){
    super.display();
    push();
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
