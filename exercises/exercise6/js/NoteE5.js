class NoteE5 extends MusicBlock {

  constructor(x, y) {
    super(x, y);
    this.note = `E5`;
  }

  mousePressed() {
    super.mousePressed();

  }

  display() {
    push();
    noStroke();
    fill(128, 0, 156);
    ellipse(this.x, this.y, this.size);
    pop();

    super.display();
  }

}
