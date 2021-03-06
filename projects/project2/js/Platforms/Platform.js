class Platform{

  constructor(x, y, w){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = 20;
    this.vx = 2;
    this.speed = 2;
    this.moving = false;
    this.noteTimer = 0;
    this.noteLength = 60 * 1; //2 secondes

    //Synth
    this.note = undefined;
    this.synth = new p5.PolySynth();
  }

  playNote(){
    setInterval(this.pressedOn(player), 100);
  }

  pressedOn(player){
    console.log(this.noteTimer);
    //Player colides with platform
    if(player.x >= this.x-this.width/2 &&
      player.x <= this.x+this.width/2 &&
      player.y+player.size/2 >= this.y-this.height/2 &&
      player.y+player.size/2 <= this.y+this.height/2 &&
      this.noteTimer <= this.noteLength){

      this.synth.play(this.note, 0.25, 0, 0.3);

      this.speed = 0;
      this.moving = false;

      this.noteTimer++; //Timer goes up
    }
    else if(player.x >= this.x-this.width/2 &&
    player.x <= this.x+this.width/2 &&
    player.y+player.size/2 >= this.y-this.height/2 &&
    player.y+player.size/2 <= this.y+this.height/2 &&
    this.noteTimer >= this.noteLength){

      this.speed = 0;
      this.moving = false;
    }
    else{
      this.speed = 2;
      this.noteTimer = 0;//Reset timer
    }
  }

  move(level){
    if(this.moving){
    this.x += this.vx;

    if(this.x > 550-this.width/2){
      this.vx -= this.speed;
    }
    else if(this.x < 50+this.width/2){
      this.vx += this.speed;
    }
  }
  }

  display(){

  }

}
