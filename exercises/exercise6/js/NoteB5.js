class NoteB5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `B5`;
    this.sequence = 1;
  }

  mousePressed(){
    super.mousePressed();
    if (this.order === 1 && this.sequence === 1){
      this.order = 2;
    }
    else if (this.order === 4){
      this.order = 5;
    }
    else {
      this.order = 1;
    }
  }

  display(){
    super.display();
    push();
    noStroke();
    fill(4, 143, 255);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
