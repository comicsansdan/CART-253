class NoteA5 extends MusicBlock {

  constructor(x, y) {
    super(x, y);
    this.note = `A5`;
  }

  mousePressed() {
    super.mousePressed();

  }

  display() {
    push();
    noStroke();
    fill(242, 1, 1);
    ellipse(this.x, this.y, this.size);
    pop();

    super.display();

  }

}
