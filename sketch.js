const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //bottom layer
  block1 = new BlueBox(500,360,20,30);
  block2 = new YellowBox(520,360,20,30);
  block3 = new GreenBox(540,360,20,30);
  block4 = new RedBox(560,360,20,30);
  block5 = new GreenBox(580,360,20,30);
  block6 = new YellowBox(600,360,20,30);
  // second level
  block7  = new RedBox(520,300,20,30);
  block8  = new GreenBox(540,300,20,30);
  block9 = new BlueBox(560,300,20,30);
  block10 = new YellowBox(580,300,20,30);
  // third level
  block11 = new BlueBox(540,240,20,30);
  block12 = new RedBox(560,240,20,30);
  // top
  block13 = new YellowBox(550,180,20,30);
  // starting second obstacle
  // bottom
  block17 = new Box(1300,175,30,40);
  block18 = new Box(1270,175,30,40);
  block19 = new Box(1240,175,30,40);
  block20 = new Box(1330,175,30,40);
  block21 = new Box(1360,175,30,40);
  // middle
  block22 = new Box(1300,135,30,40);
  block23 = new Box(1270,135,30,40);
  block24 = new Box(1360,135,30,40);
  // top
  block25 = new Box(1300,95,30,40);

  ball = new Ball(200,200,40);
  projectile = new Projectile(ball.body,{x:200,y:200});

  platform = new Platform(400,390,800,10);
}

function draw() {
  background("white");  
  Engine.update(engine);
  debug:true;
  
  text('Score : '+score,100,50);

 block1.display();
 block1.score();
 block2.display();
 block2.score();
 block3.display();
 block3.score();
 block4.display();
 block4.score();
 block5.display();
 block5.score();
 block6.display();
 block6.score();
 block7.display();
 block7.score();
 block8.display();
 block8.score();
 block9.display();
 block9.score();
 block10.display();
 block10.score();
 block11.display();
 block11.score();
 block12.display();
 block12.score();
 block13.display();
 block13.score();
 block17.display(); 
 
 block18.display();
 
 block19.display();
 
 block20.display();
 
 block21.display();

 block22.display();
 
 block23.display();
 
 block24.display();
 
 block25.display();
 

 ball.display();
 projectile.display();
 platform.display();

}
function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  projectile.release();
}

function keyPressed()
{
 if(keyCode === 32)
 {
  projectile.attach(this.ball) 
 }
}
