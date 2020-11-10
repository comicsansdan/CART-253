class NoteB5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `B5`;
  }

  mousePressed(){
    super.mousePressed();
  }

  display(){
    super.display();
    push();
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
