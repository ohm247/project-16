


function preload(){
  monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
  "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaimage = loadImage("banana.png")
  stoneimage = loadImage("stone.png")
  bg = loadImage("jungle.jpg")
}


function setup() {
  createCanvas(800,400);
  backgroundimg = createSprite(0,0,800,400)
  backgroundimg.addImage(bg)
  backgroundimg.scale = 1.6;
  backgroundimg.velocityX = -4;

  player = createSprite(50,340,10,10)
  player.addAnimation("blue",monkeyimage)
  player.scale = 0.2;
  
}

function draw() {
  background(255,255,255);  
if(backgroundimg.x < 0 ){
  backgroundimg.x = backgroundimg.width/2
}
stone();
banana();
  drawSprites();
}

function stone(){
if(frameCount  %300 === 0){
  obstacle = createSprite(800,350,15,10)
  obstacle.addImage(stoneimage)
  obstacle.velocityX = -4;
  obstacle.scale = 0.5

}

function banana(){
  if(frameCount %300 === 0){
    coin = createSprite(800,360,15,10)
    coin.addImage(bananaimage)
    coin.velocityX = -4;
    
  }
}
}

