const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width*2, 30);

  for (var j = 40; j <= width; j = j+50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for (var k = 15; k <= width-15; k = k+50)
  {
    plinkos.push(new Plinko(k, 175));
  }

  for (var i = 40; i <= width-40; i=i+50) 
  {
    plinkos.push(new Plinko(i, 275));
  }

  for (var k = 15; k <= width-15; k = k+50)
  {
    plinkos.push(new Plinko(k, 375));
  }

  for (var i = 0; i <= width; i = i+80) 
  {
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }


}


function draw() {
  background("black");  
  drawSprites();

  Engine.update(engine);





  if (frameCount % 50 === 0) 
  {
    particles.push(new Particle( random(width/2 - 10, width/2 + 10) , 10, 10));
  }

  for (var i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }

  fill("red");

  for (var i = 0; i < plinkos.length; i++) 
  {
    plinkos[i].display();
  }

  fill ("green");
  for (var i = 0; i < divisions.length; i++)
  {
    divisions[i].display();          
  }

  text(mouseX + "," + mouseY, 10, 10);




  fill("white");
  ground.display();

}