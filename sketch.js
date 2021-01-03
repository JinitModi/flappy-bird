const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, mango, stone, tree;
var boyimg, mangoimg, stoneimg, treeimg;

function preload()
{
	boy = loadImage("boy.png, boy");
	mango = loadImage("mango.png, mango");
	stone = loadImage("stone.png, stone");
	tree = loadImage("tree.png, tree");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



