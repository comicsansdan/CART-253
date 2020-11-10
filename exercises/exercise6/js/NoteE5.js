class NoteE5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `E5`;
  }

  mousePressed(){
    super.mousePressed();
  }

  display(){
    super.display();
    push();
    fill(250, 100, 200);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
