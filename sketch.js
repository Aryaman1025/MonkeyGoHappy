var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" ,monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x = ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  background(280);
  
  ground.velocityX = -10
  
   if (ground.x < 350){
     ground.x = 400;
    }
  
  if(keyDown("space") && monkey.y >= 300 ){
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("red");
  text("Score: " + score ,500,50);
  
  stroke("black");
  textSize(20);
  fill("brown");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 10,20);
  
  
  
  bananaGroup();
  obstacleGroup();
  drawSprites();
  
}

 function bananaGroup(){
   
   if (frameCount % 80 === 0) {
    var banana = createSprite(625,120,40,10);
    banana.y = Math.round(random(230,330));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
     
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
     
    banana.lifetime = 215;
  }
 }

function obstacleGroup(){
   
   if (frameCount % 300 === 0) {
    var obstacle = createSprite(625,120,40,10);
    obstacle.y = 330;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
     
     obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
     
    obstacle.lifetime = 215;
  }
 }


