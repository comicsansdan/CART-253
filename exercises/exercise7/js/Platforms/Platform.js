class Platform{

  constructor(x, y, w){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = 20;

    //Synth
    this.note = undefined;
    this.synth = new p5.PolySynth();
  }

  pressedOn(player){
    //Player colides with platform
    if(player.x >= this.x-this.width/2 &&
      player.x <= this.x+this.width/2 &&
      player.y+player.size/2 >= this.y-this.height/2 &&
      player.y+player.size/2 <= this.y+this.height/2){

      this.synth.play(this.note, 0.5, 0, 0.3);

    }
  }

  display(){

  }

}
