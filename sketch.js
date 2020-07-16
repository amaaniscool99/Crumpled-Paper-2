var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;

var dustbin;

//var wall1, wall2, wall3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(180, 200, 30, 30);
	World.add(world, ball);

	//wall1 = createSprite(300, 670, 20, 100);
	//wall2 = createSprite(400, 690, 200, 20);
	//wall3 = createSprite(500, 670, 20, 100);

	Engine.run(engine);
	
	dustbin = new Dustbin(600, 790, 50, 100);
	World.add(world, dustbin);

	ground = new Ground(width/2, 700, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  dustbin.display();
  drawSprites();
}


function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body, ball.body.position,{x:11, y: 30});

}

}


