var PLAY = 1
var END =  2;
var gameState = PLAY

var paddle; 
var wall;

var score = 0;
function setup() {
  createCanvas(800,400);
 paddle =  createSprite(100, 200, 25, 60);
 paddle.shapeColor = "red";

ball = createSprite(200,200,10,10)
ball.velocityX = random(1,10)
ball.velocityY = random(1,3)
ball.shapeColor = "green"

}

function draw() {
  background(105,125,125);  
  textSize(23);
  fill("blue");
  text("Score::" + score , 200,50)

  if (gameState === 1){


    edges=createEdgeSprites();

    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
   if( ball.bounceOff(paddle)){
 score = score + 1 

   }
  
    if(keyDown(UP_ARROW)){
      paddle.y = paddle.y-20;  
    }
    if(keyDown(DOWN_ARROW)){
      paddle.y = paddle.y + 20;   
    }
    if(ball.x < 0){
    gameState = 2
    }

  }
  else if (gameState === 2 ){
    textSize(23);
    fill("blue");
   
    text("you looose",200,200)
  }
  

  drawSprites();
}