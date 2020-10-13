const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var stone;
var mango1, mango2, mango3, mango4;
var tree;
var sling;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(150,620,150,300);
	stone = new Stone(155,500,40,40);
	tree = new Tree(700,350,750,750);
	mango1 = new Mango(500,300);
	mango2 = new Mango(550,200)
	mango3 = new Mango(650,250);
  mango4 = new Mango(400,250);
  sling = new Sling(stone.body,{x:100,y:550});
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode===32){
    sling.attach(stone.body);
  }
}