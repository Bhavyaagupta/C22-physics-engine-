

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;

var engine, world;

var  ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world,ground);

  var options = {
    isStatic : false,
    restitution:1.0
  }
  ball = Bodies.circle(200,200,10, options);
  World.add(world, ball);

  console.log( ball);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ellipseMode(RADIUS);
  circle( ball.position.x, ball.position.y,10);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

}