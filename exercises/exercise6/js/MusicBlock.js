class MusicBlock {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.color = {
      r: 255,
      g: 255,
      b: 255,
    };
    //Text
    this.stringSize = 24;

    //Synth
    this.note = undefined;
    this.synth = new p5.PolySynth();
  }

  mousePressed(x, y) {
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.size / 2 + 50 / 2) {

      console.log(this.note);

      this.synth.play(this.note, 1, 0, 0.2);

      //Notifies the note being played
      if (this.note === `B5`) {
        this.color.r = 100;
      } else if (this.note === `A5`) {
        this.color.b = 100;
        this.color.g = 100;
      } else if (this.note === `F5`) {
        this.color.b = 100;
        this.color.r = 100;
      } else if (this.note === `D5`) {
        this.color.b = 100;
        this.color.r = 255;
        this.color.g = 200;
      } else if (this.note === `E5`) {
        this.color.b = 200;
        this.color.r = 150;
        this.color.g = 100;
      }

    }
  }

  display() {
    push();
    textAlign(CENTER);
    textSize(this.stringSize);
    fill(this.color.r, this.color.g, this.color.b);
    text(this.note, this.x, this.y);
    pop();
  }


}
