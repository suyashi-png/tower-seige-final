


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 

//variables
var engine, world;
var ground; 
var score=0

var ground, stand1, stand2;
var block1,block2,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24;
var polygon, polygonImage, slingshot;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

    ground  = new Ground(width/2,height-30,width,20);
 
    //first stack of boxes
    stand1 = new Ground(500,height-100, 300, 20);
    block1 = new Box(400,680,50,40)
    block2 = new Box(450,680,50,40)
    block3 = new Box(490,680,50,40)
    block4 = new Box(540,680,50,40)
    block5 = new Box(590,680,50,40)

    block6 = new Box(425,650,50,40)
    block7 = new Box(475,650,50,40)
    block8 = new Box(525,650,50,40)
    block9 = new Box(575,650,50,40)
    
    block10 = new Box(450,600,50,40)
    block11 = new Box(500,600,50,40)
    block12 = new Box(550,600,50,40)

    //POLYGON HOLDER WITH SLING
    var options={
        density : 0.2
    }
    polygon = Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    //sling to connect the polygon to a point
    slingshot = new SlingShot(this.polygon, {x:150, y:550})
}

function draw(){
    background("grey");
    textSize(25)
    fill("black")
    textFont('Georgia');
    text("Tower Siege - 2",500,100)
    text("Drag the Hexagonal stone and release(launch) it towards blocks",100,160);
    text('score '+score,500,300)
    text("Press SPACE to try again",100,210)
    Engine.update(engine);

    ground.display()

    stand1.display()
    fill("yellow")
    block1.display()
    block1.score()
    
    block3.display()
    block3.score()
    block2.score()

    block2.score()
    block4.display()
    block4.score()

    block5.display()
    block5.score()


    fill("red")
    block6.display()
    block6.score()

    block7.display()
    block7.score()

    block8.display()
    block8.score()

    block9.display()
    block9.score()

    
    fill("blue")
    block10.display()
    block10.score()

    block11.display()
    block11.score()

    block12.display()
    block12.score()



block2.display(


)

    imageMode(CENTER)
    image(polygonImage,polygon.position.x, polygon.position.y, 60,60)

    slingshot.display()
}

//when "SPACE" is pressed the Hexagon is attached back to the origional position
function keyPressed(){
	if(keyCode === 32){
        Matter.Body.setPosition(polygon, {x:150,y:550})
		slingshot.attach(polygon)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
