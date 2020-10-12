
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Floor (400,310,400,30)
makeshiftbird = new paper (200,300,20,20)
can = new Trashcan (600,310,40,50)
	Engine.run(engine);
  

	if (keydown (UP_ARROW)){
		keyPresed()
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPresed()
{
 if (keyCode === UP_ARROW) {

matter.Body.applyForce(makeshiftbird.body,makeshiftbird.body.position,{x:85,y:85})

 }

}


