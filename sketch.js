var wall1,wall2,wall3,wall4;
var treasure
var thief,gm,gm1
var gamestate="start"
var button,button1;
var bg;
var green,red,pImage,tImg;
var life=5;
var t,d,r,l;
function preload(){
  gm=loadImage("go.jpg")
  green=loadImage("greenlaser.png");
red=loadImage("redlaser.png");
pImage=loadImage('r.png')
tImg=loadImage('t.png')
}

function setup() {
  createCanvas(innerWidth,innerHeight);
  gm1=createSprite(600,300)
  
  gm1.addImage(gm)
  gm1.visible=false;

  edges=createEdgeSprites()


  wall1=createSprite(600,50,1000,10)
  wall1.shapeColor="green"
  wall2=createSprite(600,550,1000,10)
  wall2.shapeColor="green"
  wall3=createSprite(100,270,10,450)
  wall3.shapeColor="green"
  wall4=createSprite(1100,300,10,510)
  wall4.shapeColor="green"
  
  wall5=createSprite(300,400,10,310)
  wall5.shapeColor="green"
  wall6=createSprite(300,250,130,10)
  wall6.shapeColor="green"
  wall7=createSprite(300,300,190,10)
  wall7.shapeColor="green"
  wall8=createSprite(660,460,610,10)
  wall8.shapeColor="green"
  wall9=createSprite(600,270,10,450)
  wall9.shapeColor="green"
  wall10=createSprite(440,120,10,140)
  wall10.shapeColor="green"
  wall11=createSprite(398,150,10,205)
  wall11.shapeColor="green"
  wall12=createSprite(1100,300,10,510)
  wall12.shapeColor="green"
  wall13=createSprite(500,200,10,310)
  wall13.shapeColor="green"
  wall14=createSprite(500,360,200,10)
  wall14.shapeColor="green"
  wall15=createSprite(420,400,260,10)
  wall15.shapeColor="green"
  wall16=createSprite(290,400,260,10)
  wall16.shapeColor="green"
  wall17=createSprite(375,360,50,10)
  wall17.shapeColor="green"
  wall18=createSprite(345,348,10,34)
  wall18.shapeColor="green"
  wall19=createSprite(1055,458,80,10)
  wall19.shapeColor="green"
  wall20=createSprite(650,525,10,50)
  wall20.shapeColor="green"
  wall21=createSprite(685,480,10,50)
  wall21.shapeColor="green"
  wall22=createSprite(725,505,10,40)
  wall22.shapeColor="green"
  wall23=createSprite(760,525,10,50)
  wall23.shapeColor="green"
  wall24=createSprite(960,490,10,50)
  wall24.shapeColor="green"
  wall25=createSprite(1010,510,90,10)
  wall25.shapeColor="green"
  wall26=createSprite(900,520,10,50)
  wall26.shapeColor="green"
  wall27=createSprite(840,490,10,50)
  wall27.shapeColor="green"
  wall28=createSprite(450,500,150,10)
  wall28.shapeColor="green"
  wall29=createSprite(528,520,10,50)
  wall29.shapeColor="green"
  wall30=createSprite(180,130,70,70)
  wall30.shapeColor="green"
  wall31=createSprite(145,340,60,50)
  wall31.shapeColor="green"
 // wall32=createSprite(200,250,50,50)
 // wall32.shapeColor="green"
  wall33=createSprite(277,200,50,50)
  wall33.shapeColor="green"
  wall34=createSprite(330,120,60,60)
  wall34.shapeColor="green"
  
  
  wall35=createSprite(840,250,50,300)
  wall35.shapeColor="yellow"
  wall36=createSprite(700,250,80,5)
  wall36.shapeColor="red"
  wall37=createSprite(980,250,80,5)
  wall37.shapeColor="red"
  wall38=createSprite(700,350,80,5)
  wall38.shapeColor="red"
  wall39=createSprite(980,350,80,5)
  wall39.shapeColor="red"
  wall40=createSprite(700,160,80,5)
  wall40.shapeColor="red"
  wall41=createSprite(980,160,80,5)
  wall41.shapeColor="red"
  

  
  iw1=createSprite(610,250,5,250)
  iw1.visible=false


 
  treasure=createSprite(630,70,30,30);
  treasure.addImage("t",tImg)
  treasure.scale=0.04
  treasure.shapeColor="yellow"
  bg=createSprite(600,300,1200,600)
  bg.shapeColor="yellow";
  button=createButton("START");
 button1=createButton("RESTART");
 thief=createSprite(20,560,10,10);
 thief.addImage("r",pImage)
 thief.scale=0.01
 t=createButton("top")
 d=createButton("down")
 r=createButton("right")
 l=createButton("left")
 t.size(20,20)
 d.size(20,20)
 r.size(20,20)
 l.size(20,20)
}

function draw() {
  background(0);
  drawSprites()
  
  if(gamestate==="start"){
    life=5
    gm.visible=false;
    bg.visible=true;
    bg.shapeColor="yellow";
    button.show();
    button1.hide()
    thief.visible=false;
    textSize(24)
    text("WELCOME TO THE GAMEING WORLD",400,200);
    text("Developed by Mohammed Soni",470,500);
    button.size(100,50)

    button.position(600,400)
    button.mousePressed(()=>{
      gamestate="play"
    })
  }




  if(gamestate==="play"){
    textSize(24)
    text("LIVES:"+life,1050,30)
    thief.visible=true
    button1.hide();
    button.hide();
    bg.visible=false;
    if (keyDown("UP_ARROW")){
    thief.y-=5
  }
  if (keyDown("DOWN_ARROW")){
    thief.y+=5
  }
  if (keyDown("RIGHT_ARROW")){
    thief.x+=5
  }
  if (keyDown("LEFT_ARROW")){
    thief.x-=5
  }
  t.position(innerWidth-100,innerHeight-100)
  d.position(innerWidth-100,innerHeight-50)
  r.position(innerWidth-20,innerHeight-100)
  l.position(innerWidth-80,innerHeight-100)
  t.mousePressed(()=>{
    thief.y-=5
  })
  d.mousePressed(()=>{
    thief.y+=5
  })
  r.mousePressed(()=>{
    thief.x+=5
  })
  t.mousePressed(()=>{
    thief.x-=5
  })
 if(wall36.isTouching(iw1)){
  wall36.bounceOff(iw1)
 } 
 wall36.bounceOff(wall35)

 if(wall38.isTouching(iw1)){
  wall38.bounceOff(iw1)
 } 
 wall38.bounceOff(wall35)

 if(wall40.isTouching(iw1)){
  wall40.bounceOff(iw1)
 } 
 wall40.bounceOff(wall35)
 
 if(wall41.isTouching(wall4)){
  wall41.bounceOff(wall4)
 } 
 wall41.bounceOff(wall35)

 if(wall37.isTouching(wall4)){
  wall37.bounceOff(wall4)
 } 
 wall37.bounceOff(wall35)

 if(wall39.isTouching(wall4)){
  wall39.bounceOff(wall4)
 } 
 wall39.bounceOff(wall35)


if(thief.isTouching(wall36)||thief.isTouching(wall37)||thief.isTouching(wall38)||thief.isTouching(wall39)||thief.isTouching(wall40)||thief.isTouching(wall41)){
thief.visible=false
gamestate="end"
}

if(thief.isTouching(wall1)||thief.isTouching(wall2)||thief.isTouching(wall3)||thief.isTouching(wall4)||thief.isTouching(wall5)||thief.isTouching(wall6)||thief.isTouching(wall7)||thief.isTouching(wall8)||thief.isTouching(wall9)||thief.isTouching(wall10)||thief.isTouching(wall11)||thief.isTouching(wall12)||thief.isTouching(wall13)||thief.isTouching(wall14)||thief.isTouching(wall15)||thief.isTouching(wall16)||thief.isTouching(wall17)||thief.isTouching(wall18)||thief.isTouching(wall19)||thief.isTouching(wall20)||thief.isTouching(wall21)||thief.isTouching(wall22)||thief.isTouching(wall23)||thief.isTouching(wall24)||thief.isTouching(wall25)||thief.isTouching(wall26)||thief.isTouching(wall27)||thief.isTouching(wall28)||thief.isTouching(wall29)||thief.isTouching(wall30)||thief.isTouching(wall31)||thief.isTouching(wall32)||thief.isTouching(wall33)||thief.isTouching(wall34)||thief.isTouching(wall35))
{ thief.x=20
  thief.y=560
  life=life-1

  
}
if(life<=0){
  gamestate="end"
}
  thief.bounceOff(edges)
  thief.collide(wall1)
  thief.collide(wall2)
  thief.collide(wall3)
  thief.collide(wall4)
  thief.collide(wall5)
  thief.collide(wall6)
  thief.collide(wall7)
  thief.collide(wall8)
  thief.collide(wall9)
  thief.collide(wall10)
  thief.collide(wall11)
  thief.collide(wall12)
  thief.collide(wall13)
  thief.collide(wall14)
  thief.collide(wall15)
  thief.collide(wall16)
  thief.collide(wall17)
  thief.collide(wall18)
  thief.collide(wall19)
  thief.collide(wall20)
  thief.collide(wall21)
  thief.collide(wall22)
  thief.collide(wall23)
  thief.collide(wall24)
  thief.collide(wall25)
  thief.collide(wall26)
  thief.collide(wall27)
  thief.collide(wall28)
  thief.collide(wall29)
  thief.collide(wall30)
  thief.collide(wall31)
  //thief.collide(wall32)
  thief.collide(wall33)
  thief.collide(wall34)
  thief.collide(wall35)
  thief.collide(wall36)
  thief.collide(wall37)
  thief.collide(wall38)
  thief.collide(wall39)
  thief.collide(wall40)
  thief.collide(wall41)
  thief.collide(treasure)
  }

  if(gamestate==="end"){
    bg.visible=true;
    bg.shapeColor="green";
   gm.visible=true;
     textSize(50)
     text("Game Over",innerWidth/2-200,innerHeight/2)
   button1.size(100,50)
   button1.show()
   button1.position(500,400)
   button1.mousePressed(()=>{
     gamestate="start"
   })
  }
//console.log(gamestate);
 // drawSprites();
}