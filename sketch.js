
var backgroundImage1, backgroundImage2, backgroundImage3, back;
var blue_guy, blue_guy_dead, blue_guy_attack, blue_guy_lazy, blue_guy_move_front,blue_guy_move_back;
var annoying_dragon, just_dragon;

function preload(){
  backgroundImage1 = loadImage("assets/half destroyed castle.jpg");
  backgroundImage2 = loadImage("assets/Normal castle.jpg");
  backgroundImage3 = loadImage("assets/totally destroyed castle.jpg");
  blue_guy_attack = loadAnimation("assets/blue guy attack 1.1.png","assets/blue guy attack 1.2.png","assets/blue guy attack 1.3.png","assets/blue guy attack 1.4.png","assets/blue guy attack 1.5.png","assets/blue guy attack 1.6.png","assets/blue guy attack 1.7.png","assets/blue guy attack 1.8.png","assets/blue guy attack 1.9.png","assets/blue guy attack 1.10.png");
  blue_guy_dead = loadAnimation("assets/blue guy dead 1.1.png","assets/blue guy dead 1.2.png","assets/blue guy dead 1.3.png","assets/blue guy dead 1.4.png","assets/blue guy dead 1.5.png");
  blue_guy_lazy = loadAnimation("assets/blue guy lazy1.1.png","assets/blue guy lazy1.2.png","assets/blue guy lazy1.3.png","assets/blue guy lazy1.4.png","assets/blue guy lazy1.5.png","assets/blue guy lazy1.6.png","assets/blue guy lazy1.7.png","assets/blue guy lazy1.8.png","assets/blue guy lazy1.9.png","assets/blue guy lazy1.10.png");
  blue_guy_move_front = loadAnimation("assets/blue guy move1.1.png","assets/blue guy move1.2.png","assets/blue guy move1.3.png","assets/blue guy move1.4.png","assets/blue guy move1.5.png");
  blue_guy_move_back = loadAnimation("assets/blue guy move1.5.png","assets/blue guy move1.4.png","assets/blue guy move1.3.png","assets/blue guy move1.2.png","assets/blue guy move1.1.png");
  annoying_dragon = loadAnimation("assets/That dragon1.png","assets/that dragon2.png","assets/that dragon3.png","assets/that dragon4.png");
  
}

function setup(){

createCanvas(windowWidth,windowHeight);
back = createSprite(width/2,height/2,width,height);
back.addImage(backgroundImage1);
back.scale= 2;

blue_guy = createSprite(width/2-150,height/2-75);
blue_guy.addAnimation('idle',blue_guy_lazy);
//blue_guy.addAnimation('move_front',blue_guy_move_front);
//blue_guy.addAnimation('move_back',blue_guy_move_back);
blue_guy.scale=0.3;


//annoying_dragon.frameDelay = 7;

just_dragon = createSprite(width/2+350,height/2-105);
just_dragon.addAnimation('dragon',annoying_dragon);
just_dragon.scale=3;           
}

function draw(){
  
background("white");

 if(keyDown("RIGHT_ARROW")){
  blue_guy.x=blue_guy.x+5;
}
if(keyDown("LEFT_ARROW")){
  blue_guy.x=blue_guy.x-5;
}
if(keyDown("UP_ARROW")){
  blue_guy.y=blue_guy.y-5;
}
if(keyDown("DOWN_ARROW")){
  blue_guy.y=blue_guy.y+5;
}

drawSprites();
    }
    

 




