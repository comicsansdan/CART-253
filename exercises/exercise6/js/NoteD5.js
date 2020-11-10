class NoteD5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `D5`;
    this.sequence = 4;
  }

  mousePressed(){
    super.mousePressed();
    if (this.order === 10){
      this.order = 11;
    }
    else {
      this.order = 1;
    }
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
