 var shooter1,shooter2,shooter3,shooter4;
 var shooter1Img,shooter2Img,shooter3Img,shooter4Img;
 var zombie,zombieImg,zombieGroup;
 var PLAY = 1;
 var END = 0;
 var gameState =PLAY;
 var zombiesCount = 0;
 var backgroundImg,bg;
 var database;
 var shooter;
 var spark,sparkImg;
var score = 0;


function preload(){
 shooter1Img = loadImage ("images/shooter1.png");
 shooter2Img = loadImage ("images/shooter2.png");
 shooter3Img = loadImage ("images/shooter3.png");
 shooter4Img = loadImage ("images/shooter4.png");
 sparkImg = loadImage("images/spark.png");

 zombieImg = loadImage ("images/zombie.png");

 backgroundImg = loadImage ("images/bg.jpg");

}


function setup(){
createCanvas(1600,750);
database = firebase.database();


 shooter = createSprite(400,400,50,50);
 shooter.addImage("shooter1",shooter4Img);
 
spark = createSprite(838,275,20,20);
spark.addImage("spark",sparkImg);
spark.visible = false;

zombieGroup = new Group();



}

function draw(){
background(backgroundImg);
spark.visible = false;

fill("white");
textSize(30);
text("Score : "+score,1449,45)
if(keyDown("space")){
  spark.visible = true;
  zombieGroup.destroyEach();
  score = score+1;
}

if(shooter.isTouching(zombieGroup)){
  textSize(70);
  text("Game Over",700,300);
  text("Press R to restart",700,400);
  shooter.visible=false;
  zombieGroup.setVelocityXEach(0);
  zombie.visible = false;

}
spawnZombies();
drawSprites();

}
function reset(){
score = 0;
}
function spawnZombies(){
  if(frameCount%20===0){
     zombie = createSprite(1459,400,50,50);
    zombie.addImage("zombie",zombieImg);
    zombie.scale = 0.63;
    zombie.velocityX = -6;
    zombieGroup.add(zombie);
  }

}
