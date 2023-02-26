var song;
var blocks=[
  [],
  [],
  [],
  [
    //new Block(150,250,4,1,1,1,150,150)
  ],
  [],
  [],
  [],
  [],
  [],
];
var testMap=[
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
  '    1     ',
  '          ',
];
var level=0;
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
var cam={
  x:0,
  y:0
};
var levelWidth=0;
var levelHeight=0;
var player;
var keys=[];
function keyPressed(){
  keys[keyCode]=true;
}
function keyReleased(){
  keys[keyCode]=false;
}
function setup() {
  song=loadSound('Creo-Epilogue.mp3',ok);
  colorMode(HSB);
  song.setVolume(0.1);
  blocks[3].push(new Block(150,250,4,1,1,1,150,150),new Block(300,150,4,1,1,1,300,250));
  blocks[4].push(new Block(150,0,4,1,1,1,300,0), new Block(600,100,4,1,1,1,900,50));
  createCanvas(windowWidth,windowHeight);
  player=new Player(200,200);
  //blocks=[new Block(100,100,1,1,1,1)];
  Load(blocks,worldMap)
}
function ok(){
  song.play();
}
var zoom=5;
var timer=0;
var BG=[247,78,39.2];
function draw() {
  frameRate(60);
  //console.log(mouseX,mouseY);
  //console.log(frameCount);
  background(BG[0],BG[1],BG[2]);
  for(var i=0;i<worldMap[level].length;i++){
    levelHeight=worldMap[level].length;
    levelWidth=worldMap[level][i].length;
  }
  if(levelWidth*50>width){
    cam.x=lerp(cam.x, width/2-player.x, 0.05);
  }else{
    cam.x=-levelWidth*25;
  }
  if(levelHeight*50>height){
    cam.y=lerp(cam.y, height/2-player.y, 0.05);
  }else{
    cam.y=-levelHeight*25;
  }
  push();
  translate(width/2,height/2);
  scale(zoom);
  translate(cam.x,cam.y);
  zoom=lerp(zoom,1,0.05)
  for(var i=0;i<blocks[level].length;i++){
    blocks[level][i].updateTextures(blocks[level]);
    blocks[level][i].show();
  }
  player.update(blocks[level]);
  player.show();
  pop();
  if(player.hitPortal){
    player.yvel=0;
    level++;
    Load(blocks, worldMap);
    Erase(blocks[level-1]);
    zoom=5;
  }
  console.log(timer);
  if(song.isPlaying()){
    timer++;
  }
  if(timer>1708){
    for(var i=0;i<blocks[level].length;i++){
      blocks[level][i].type2=2;
      blocks[level][i].type3=1;
      blocks[level][i].hue=BG[0];
      if(blocks[level][i].hue>180){
        blocks[level][i].color=color(blocks[level][i].hue-180,70,360);
      }
      if(blocks[level][i].hue<180){
        blocks[level][i].color=color(blocks[level][i].hue+180,70,360);
      }
    }
    BG[0]=0;
    BG[1]=0;
    BG[2]=0;

  }
}
