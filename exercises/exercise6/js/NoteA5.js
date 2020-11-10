class NoteA5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `A5`;
    this.sequence = 2;
  }

  mousePressed(){
    super.mousePressed();
    if (this.order === 2){
      this.order = 3;
    }
    else if (this.order === 5){
      this.order = 6;
    }
    else if (this.order === 7){
      this.order = 8;
    }
    else {
      this.order = 1;
    }
  }

  display(){
    super.display();
    push();
    noStroke();
    fill(242, 1, 1);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
