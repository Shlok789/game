var wall,wall1,wall2,Villian,villian1;
var wall3,wall4,wall5,wall7;
var villianImg,villian1Img,villian2Img,villianGroup;
var Hero,HeroImg;
var bullet,bulletImg,bulletGroup;
function preload() {
villian1Img=loadImage("IMAGES/V.png")
villianImg=loadImage("IMAGES/V1.png")
HeroImg=loadImage("IMAGES/hero.png")
bulletImg=loadImage("IMAGES/bullet.png")

}

 
function setup() {
  createCanvas(1200,800);
 wall = createSprite(200,84,2020,10)
 wall1 = createSprite(1100,164,2020,10);
 wall2 = createSprite(90,250,10,180);
 wall3 = createSprite(5,250,10,340);
 wall4 = createSprite(200,424,1700,10);
 wall5 = createSprite(260,350,10,150);
 wall6 = createSprite(380,240,10,150);
 wall7 = createSprite(520,350,10,150);
 bulletGroup=new Group()
 villianGroup=new Group()


 Villian = createSprite(44,211);
 villian1 = createSprite(230,125);
  Hero = createSprite(1100,100);    

Villian.addImage(villianImg);
Villian.scale=0.2;

villianGroup.add(Villian);
//villianGroup.add(villian1);

Hero.addImage(HeroImg);
Hero.scale=0.1;







villian1.addImage(villian1Img);
villian1.scale=0.17;


Villian.velocityY=-0.9;
}

function draw() {
  background(5,48,80);  
   edges=createEdgeSprites();

   if (bulletGroup.isTouching(villianGroup)) {
    bulletGroup.destroyEach();
    villianGroup.destroyEach();
   }

   if(keyDown("space") ){
    bullet1();
}
    
    if (Villian.bounceOff(edges[1])) {
    Villian.visible=true;
      }
        
    if (Villian.collide(wall)) {
    Villian.velocityX=6;
    }
    
  if(keyDown(LEFT_ARROW) ){
      Hero.velocityX=-6;
      Hero.velocityY=0;
  }

  if(keyDown(RIGHT_ARROW) ){
    Hero.velocityX=6;
    Hero.velocityY=0;
}


if(keyDown(DOWN_ARROW) ){
  Hero.velocityY=4;
  Hero.velocityX=0;
}

if(keyDown(UP_ARROW) ){
  Hero.velocityY=-5;
  Hero.velocityX=0;
}

Hero.collide(wall);
Hero.collide(wall1);
Hero.collide(wall2);
Hero.collide(wall3);
Hero.collide(wall4);
Hero.collide(wall5);
Hero.collide(wall6);
Hero.collide(wall7);
      
      

  drawSprites();
}
function bullet1() {
  
bullet = createSprite(Hero.x,Hero.y);  
bullet.addImage(bulletImg);
bullet.scale=0.1;
bullet.velocityX=-3;
bulletGroup.add(bullet)
}