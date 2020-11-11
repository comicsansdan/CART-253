class NoteB5 extends MusicBlock {

  constructor(x,y){
    super(x,y);
    this.note = `B5`;
  }

  mousePressed(){
    super.mousePressed();

  }

  display(){
    push();
    noStroke();
    fill(4, 143, 255);
    ellipse(this.x, this.y, this.size);    
    pop();

    super.display();
  }

}
