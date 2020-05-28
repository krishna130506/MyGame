// player paddle
var paddle, pong, obs;
var brick =[];
var t = 0;
var f = 0;
var c=20;
var edges;

function setup() {
  var canvas = createCanvas(400,400);
 paddle = createSprite(0, 390, 110, 10);
 pong=createSprite(10,200,20,20);
 edges = createEdgeSprites();
  
 obs=createSprite(150,200,50,30);

pong.velocityY = 5;
pong.velocityX = 6;
for(var i=0; i < 21; i++)
{
  if(i<11) 
  {
    brick[i] = createSprite(20+ t, 10 , 40, 20 );
    t += 41;
  }
  else
  {
    brick[i] = createSprite(20+ f, 31 , 40, 20 );
    f += 41;
  }
}

}
function draw() 
{
  for(var j =0; j < 20; j++)
  {
    if(pong.isTouching(brick[j]))
    {
      pong.bounceOff(brick[j]);
      brick[j].destroy();
      pong.velocityY += 0.2;
      pong.velocityX += 0.2;
      paddle.width= paddle.width-5;
    pong.width=pong.width-1;
    pong.height=pong.height-1;
    }
  }
  

  //clearing the background
  background( "white");
  
  
  //The paddle will move with the mouse
  paddle.x = World.mouseX;
  
  if(pong.y>400)
  {
    pong.velocityY = 0;
    pong.velocityX= 0;
    textSize(20);
    fill("red");
    text("YOU LOSE", 200, 180);
  }
  
  

  //clearing the background
  background( "white");
  
  
  //The paddle will move with the mouse
  paddle.x = World.mouseX;
  
  if(pong.y>400)
  {
    pong.velocityY = 0;
    pong.velocityX= 0;
    textSize(20);
    fill("red");
    text("YOU LOSE", 150, 180);
  }
  brick.shapeColor="red";
  pong.shapeColor="red";
  paddle.shapeColor="red";
  
  if(c==0){
    fill("red");
    text("YOU WIN ",150,150);
  }
  pong.bounceOff(edges[1]);
  pong.bounceOff(edges[0]);
  pong.bounceOff(edges[2]);
  pong.bounceOff(paddle);
  pong.bounceOff(obs);
  drawSprites();
}
  


 
 

