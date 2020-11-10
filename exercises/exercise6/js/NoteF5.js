class NoteF5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `F5`;
    this.sequence = 3;
  }

  mousePressed(){
    super.mousePressed();
    if (this.order === 3){
      this.order = 4;
    }
    else if (this.order === 6){
      this.order = 7;
    }
    else if (this.order === 8){
      this.order = 9;
    }
    else {
      this.order = 1;
    }
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
