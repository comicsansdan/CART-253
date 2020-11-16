class Platform{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 200;
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

      this.synth.play(this.note, 1, 0, 0.4);

    }
  }

  display(){

  }

}
