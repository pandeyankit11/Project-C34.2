const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6;
var ball,rope;

function preload(){
    backgroundImg=loadImage("GamingBackground.png");
}





function setup(){
    var canvas = createCanvas(1600,730);
    engine = Engine.create();
    world = engine.world;
    
ground =new Ground(500,600,1000,20);
box1 =new Box(600,100,70,70);
box2 =new Box(600,100,70,70);
box3 =new Box(600,100,70,70);
box4 =new Box(600,100,70,70);


box7 = new Box(746, 100, 70, 70);
box8 = new Box(746, 100, 70, 70);
box9 = new Box(746, 100, 70, 70);
box10 = new Box(746, 100, 70, 70);
box11 = new Box(746, 100, 70, 70);
box12 = new Box(746, 100, 70, 70);
box13 = new Box(673, 100, 70, 70);
box14 = new Box(673, 100, 70, 70);
box15 = new Box(673, 100, 70, 70);
box16 = new Box(673, 100, 70, 70);
box17 = new Box(673, 100, 70, 70);
box18 = new Box(673, 100, 70, 70);
box19 = new Box(673, 100, 70, 70); 
box20 = new Box(819, 100, 70, 70);
box21= new Box(819, 100, 70, 70);
box22 = new Box(819, 100, 70, 70);
box23 = new Box(819, 100, 70, 70);
box24 = new Box(819, 100, 70, 70);
box25 = new Box(892, 100, 70, 70);
box26 = new Box(892, 100, 70, 70);
box27 = new Box(892, 100, 70, 70);
box28 = new Box(892, 100, 70, 70);
box29 = new Box(892, 100, 70, 70);
box30 = new Box(892, 100, 70, 70);
box31 = new Box(892, 100, 70, 70);
box32 = new Box(892, 100, 70, 70);
ball=new Ball(200,200,80,80);
rope=new Rope(ball.body,{x:439,y:60});
monster=new Monster(1130,400,50,50);
}

function draw(){
    
   
    
    background(backgroundImg);
    
    Engine.update(engine);
    background.velocityX =-3;
  
    if(background.x<0){
    background.x =background.width/2;
    }
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    
    
    box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     
     box12.display();
box13.display();
box14.display();
 box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
rope.display();
monster.display();


    ball.display();
    
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}