
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananasGroup, obstacleGroup;
var score;
var ground;
var survivalTime= 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400, 400);

    //creating monkey!
  monkey = createSprite(80, 315,20,20 );
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1;

    //creating moving ground  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  

  //New Groups
  bananasGroup = new Group();
  obstacleGroup = new Group();

}

function draw() {
background("white");

  
    //Making the monkey jump!
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }

  //Adding gravity
      monkey.velocityY = monkey.velocityY + 0.8

  //To stop monkey from falling down
  monkey.collide(ground);
  
  
    //To make sure the ground doesn't go away
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  if(obstacleGroup.isTouching(monkey)){
       ground.velocityX = 0;
      monkey.velocityY = 0;
      obstacleGroup.setVelocityXEach(0);
      bananasGroup.setVelocityXEach=(0);
      survivalTime=0;
      
    }
  //Creating score
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  food();
  obstacles();
  
  
  
  
  
  drawSprites();
  
  
}


function food() {
  if (frameCount%80 ===0){
    var banana = createSprite(200, 300, 200, 200);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.1;
    banana.lifetime=200;
    
    bananasGroup.add(banana);

  }
}

function obstacles() {
   if (frameCount%300 ===0){
    var obstacle = createSprite(200, 327, 200, 200);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.scale=0.1;
    obstacle.lifetime=200;
    
    obstacleGroup.add(obstacle);

  } 
}



