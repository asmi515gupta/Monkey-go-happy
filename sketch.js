
var monkey , monkey_running
var banana ,bananaImage, rock, obstacleImage
var FoodGroup, rockGroup
var score
var ground,iGround
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
iGround=createSprite(400,360,900,10)
  iGround.velocityX=-4;
  iGround.x=iGround.width/2;
  iGround.visible=false;
  
 bananaGroup= new Group();
  rockGroup= new Group();
}


function draw() {
background(200);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }if (iGround.x < 0){
      iGround.x = iGround.width/2;
    }
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
    }
  if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
  }
  banana1();
  rock1();
  monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(iGround);
  var Survivaltime=0;
  stroke("white");
  textSize(20);
  fill("white");
  stroke("black");
  textSize(20);
  fill("black");
  Survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+Survivaltime,100,50)
  drawSprites();
}


function banana1() {
  
  if (frameCount % 100 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,260));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    banana.lifetime = 200;
    
   
    
    //adding cloud to the group
   bananaGroup.add(banana);
    }
}

function rock1() {
  
  if (frameCount % 60 === 0) {
     rock = createSprite(600,360,40,10);
    rock.y = Math.round(random(340,340));
    rock.addImage(obstacleImage);
    rock.scale = 0.1;
    rock.velocityX = -3;
    
     
    rock.lifetime = 200;
    
    
  
   rockGroup.add(rock);
    }
}



