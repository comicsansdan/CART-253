class NoteF5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `F5`;
  }

  mousePressed(){
    super.mousePressed();
  }

  display(){
    super.display();
    push();
    fill(100, 200, 200);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
