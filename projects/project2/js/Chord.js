class Chord {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 600;
    this.height = 5;

    //Synth
    this.note = `D4`;
    this.synth = new p5.PolySynth();
  }

  playNote(){
    setInterval(this.struck(player), 100);
  }

  struck(player){
    //Player passes cord
    if(player.x >= this.x-this.width/2 &&
      player.x <= this.x+this.width/2 &&
      player.y+player.size/2 >= this.y-this.height/2 &&
      player.y+player.size/2 <= this.y+this.height/2){

      this.synth.play(this.note, 0.1, 0, 0.4);
    }
  }

  display(){
    push();
    fill(218, 252, 255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
