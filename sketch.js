const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld
var backgroundImg, ground ;
var box1 , box2 , box3 , box4 ,box5 , log1 , log2 , log3, log4;
var obstacle1 ,obstacle2;
var player , playerImg;
var back;
var score = 0;
var scoreImg , scoreboard;
var life = 5;
const PLAY = 1;
const END = 0;
var gameState = PLAY;


function preload(){
  backgroundImg = loadImage("images/bg4.png");
  obstacleImg1 = loadImage("images/obstacle1.png");
  obstacleImg2 = loadImage("images/obstacle2.png");
  image2 = loadImage("images/obstacle2.png");
  playerAnim = loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png");
  arrowImage = loadImage("images/arrow.png");
  scoreImg = loadImage("images/scoreboard.png");
}

function setup() {
  
  createCanvas(displayWidth,displayHeight);
 
  myengine = Engine.create();
  myworld = myengine.world;
  
  back = createSprite(displayWidth / 2,displayHeight / 2,displayWidth,displayHeight);
  back.velocityX = -5;
  back.addImage(backgroundImg);
  back.scale= 2;

  ground = new Ground(displayWidth/2 ,displayHeight - 100,displayWidth,20);
 
  player = createSprite(displayWidth/8,displayHeight-200);
  player.addAnimation("player Running",playerAnim);

  scoreboard = createSprite(displayWidth-300,displayHeight/4,50,50);
  scoreboard.addImage(scoreImg);
  score.scale = 1.5;

  obstaclesGroup = new Group();
  arrowGroup = new Group();



  Engine.run(myengine);

}

function draw() {

  background(0);  
  Engine.update(myengine);

 
  drawSprites();

      if(gameState === PLAY){

          destroyObstacle();
          spawnObstacles();
          moveBackground();
          destroyPlayer();

      }

      else if(gameState === END){

        fill("purple");
        textSize(40);
        text("GAME OVER",displayWidth/2, displayHeight/2);

        //obstaclesGroup.setVelocityXEach(0);
        arrowGroup.destroyEach();
        obstaclesGroup.destroyEach();
        back.velocityX = 0;
  
      }

 

 

  scoreBoard();
  
//ground.display();
}

function keyPressed(){

    if(keyCode === UP_ARROW && gameState === PLAY){
        /* console.log(keyCode);
        console.log(player.body.position);*/
        //Matter.Body.setPosition(player.body, {x : player.body.position.x , y : player.body.position.y-200});
        createArrow();
    }
}

function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(displayWidth,displayHeight-200,10,40);
    obstacle.velocityX = -4;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(obstacleImg1);
               break;
       case 2: obstacle.addImage(obstacleImg2);
               break;

       default: break;
     }
    
     obstaclesGroup.add(obstacle);
  }
 }

 function createArrow(){

    var arrow = createSprite(player.x,player.y);
    arrow.velocityX = 10;
    arrow.addImage(arrowImage);
    arrow.scale = 0.5;

    arrowGroup.add(arrow);
 }

 function destroyObstacle(){

    for(var i=0; i<obstaclesGroup.length; i++){
      if(obstaclesGroup.get(i).isTouching(arrowGroup)){
          obstaclesGroup.get(i).destroy();
          arrowGroup.destroyEach();
          score = score+1;
      }
      }

 }

 function destroyPlayer(){

    if(obstaclesGroup.isTouching(player)){

          for(var i=0; i<obstaclesGroup.length; i++){
            if(obstaclesGroup.get(i).isTouching(player)){
                obstaclesGroup.get(i).destroy();
                life = life - 1;
            }
            }
    }

    if(life === 0){

      player.destroy();

      gameState = END;
    }

 }

 function moveBackground(){

    if(back.x < 0){
      back.x = displayWidth/2;
    }

 }

 function endGame(){

    if(life === 0){
        gameState = END;
    }

 }

 function scoreBoard(){

  textFont("Algerian");
  textStyle(BOLD);

  fill(247,99,94);
  textSize(30);
  text( life + "       :       " + score, displayWidth-375,displayHeight/3.5);

 
  fill("blue");
  text("LIFE        SCORE  " , displayWidth-400,displayHeight/4.5);
  
  

  
  
 }