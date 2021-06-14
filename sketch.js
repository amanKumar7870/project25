
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var w;
var a;
var b;

function preload()
{

	a=loadImage('dustbingreen.png');
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1=new Ball(100,310,30);
	ground1=new Ground(width/2,340,1200,10);
	dustbin1=new Dustbin(810,280,10,100);
	dustbin2=new Dustbin(850,330,80,10);
	dustbin3=new Dustbin(890,280,10,200/2);
	w=createSprite(850,300,20,10);
    w.visible=false;
	b=createSprite(850,280,10,10);
	b.addImage(a);
	b.scale=0.3



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('pink');
  

  if (keyCode===UP_ARROW){

	ball1.body.position.x=w.x;
	ball1.body.position.y=w.y;
  }

  
  
  drawSprites();
  ball1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
 
}







