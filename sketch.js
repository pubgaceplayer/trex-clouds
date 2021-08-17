var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var edges;
var test;
var cloud,cloudimage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);
  edges=createEdgeSprites();
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
invisibleGround=createSprite(200,195,400,20);
invisibleGround.visible=false;
test=Math.round(random(1,100));
}

function draw() {
  background(0);
  
  ground.velocityX = -2
  console.log(test);
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //jumping the trex on space key press
  if(keyDown("space")&&trex.y>=100) {
    trex.velocityY = -10;
    
  }
  
  trex.velocityY = trex.velocityY + 0.8
  spawnClouds();
 
 //stop trex from falling down 
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,100,40,10);
    cloud.addImage(cloudimage);
    cloud.velocityX=-3;
   cloud.y=Math.round(random(10,60));

   cloud.scale=0.7;

  }








}


















