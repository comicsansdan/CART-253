class MusicBlock {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 100;
    this.order = 1;
    //Synth
    this.note = undefined;
    this.synth = new p5.PolySynth();
  }

  mousePressed(){
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.size/2 + 50/2){
      this.synth.play(this.note, 1, 0, 0.2);
      }
  }

  display(){

  }

}
