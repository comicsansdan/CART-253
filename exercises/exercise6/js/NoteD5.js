class NoteD5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `D5`;
  }

  mousePressed(){
    super.mousePressed();
  }

  display(){
    super.display();
    push();
    noStroke();
    fill(255, 101, 0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
