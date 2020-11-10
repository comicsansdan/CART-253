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
    noStroke();
    fill(103, 204, 0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
