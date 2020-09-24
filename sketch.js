function preload(){
  monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
  "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaimage = loadImage("banana.png")
  stoneimage = loadImage("stone.png")
  bg = loadImage("jungle.jpg")
}

var score = 0
function setup() {
  createCanvas(800,400);
  backgroundimg = createSprite(0,0,800,400)
  backgroundimg.addImage(bg)
  backgroundimg.scale = 1.6;
  backgroundimg.velocityX = -4;

  player = createSprite(50,340,10,10)
  player.addAnimation("blue",monkeyimage)
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,5)
  ground.visible = false;
  coinGroup = new Group 
 }

function draw() {
  background(255,255,255);  
if(backgroundimg.x < 0 ){
  backgroundimg.x = backgroundimg.width/2
}
if(keyDown("space")){
  player.velocityY = -5;
}
player.velocityY = player.velocityY + 0.5
player.collide(ground)
if(coinGroup.isTouching(player)){
coinGroup.destroyEach()
score = score + 2
}
switch(score){

case 10: player.scale = 0.12;
 break;
 case 20: player.scale = 0.14;
 break;
 case 30: player.scale = 0.16;
 break;
 case 40: player.scale = 0.18;
 break;
 default: break;
}
stone();
banana();
  drawSprites();
  textSize(20)
  fill("black")
  text("score " + score,500,50)
 
}

function stone(){
if(frameCount  %300 === 0){  
 
  obstacle = createSprite(800,350,15,10)
  obstacle.addImage(stoneimage)
  obstacle.velocityX = -4;
  obstacle.scale = 0.5

}
}
function banana(){
  if(frameCount %80 === 0){
    coin = createSprite(800,200,15,10)
    coin.addImage(bananaimage)
    coin.velocityX = -4;
    coin.scale = 0.05;
    coinGroup.add(coin)
  }
}


