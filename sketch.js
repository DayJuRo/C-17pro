var play, playImg
var redB, redImg 
var blueB, blueImg 
var greenB, greenImg 
var pinkB, pinkImg 
var bow, bowImg
var arrow, arrowImg
var score=0;


function preload(){
 playImg= loadImage("background0.png");
 redImg= loadImage("red_balloon0.png");
 blueImg= loadImage("blue_balloon0.png");
 greenImg= loadImage("green_balloon0.png");
 pinkImg= loadImage("pink_balloon0.png");
 bowImg= loadImage("bow0.png");
 arrowImg= loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  play=createSprite(0,0,600,600);
  play.addImage(playImg);
 play.scale=2.89;
  
  bow=createSprite(580,200);
  bow.addImage(bowImg);
  bow.scale=1.2;
    
}

function draw() {
  play.velocityX = -3 

  if (play.x < 0){
      play.x = play.width/2;
    }
  
  bow.y = World.mouseY;
  
   //release the arrow when the space key is pressed
  if (keyDown("space")){
    var arrow = createArrow();
    arrow.addImage(arrowImg);
    arrow.y = bow.y;
  }
  
  var select_B = Math.round(random(1,4));
  console.log(select_B)
  
  if (World.frameCount % 80 == 0){
    if (select_B == 1){
      redB();
    }else if (select_B == 2) {
      greenB();
    }else if (select_B == 3) {
      blueB();
    }else {
      pinkB();
    }
  }
  drawSprites();
  textSize(20);
  text("Score : "+ score,370, 50);
}
function createArrow(){
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}
function redB(){
  var redB= createSprite(0,Math.round(random(20,370)), 10, 10);
  redB.addImage(redImg);
  redB.velocityX = 4;
  redB. lifetime = 150;
  redB.scale=0.1;
}
function greenB(){
  var greenB= createSprite(0,Math.round(random(20,370)), 10, 10);
  greenB.addImage(greenImg);
  greenB.velocityX = 4;
  greenB. lifetime = 150;
  greenB.scale=0.1;
}
function blueB(){
  var blueB= createSprite(0,Math.round(random(20,370)), 10, 10);
  blueB.addImage(blueImg);
  blueB.velocityX = 4;
  blueB. lifetime = 150;
  blueB.scale=0.1;
}
function pinkB(){
  var pinkB= createSprite(0,Math.round(random(20,370)), 10, 10);
  pinkB.addImage(pinkImg);
  pinkB.velocityX = 4;
  pinkB. lifetime = 150;
  pinkB.scale=1.2;
}