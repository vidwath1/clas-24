const Engine = Matter.Engine;
const World = Matter.World; //name spacing nick names
const Bodies = Matter.Bodies;


var myengine,myworld;

function setup() {
createCanvas(1200,600)

myengine=Engine.create();
myworld = myengine.world;

box1 = new Box(900,500,70,70);
box2= new Box(1100,500,70,70);
pig1= new Pig(1000,500);
log1= new Log(1000,430,300,PI/2);

box3 = new Box(900,400,70,70);
box4= new Box(1100,400,70,70);
pig2= new Pig(1000,400);
log2= new Log(1000,330,300,PI/2);

box5= new Box(1000,300,70,70);
log3= new Log(1050,250,160,-PI/7);
log4= new Log(950,250,160,PI/7);

bird1= new Bird(500,500);




ground= new Ground();
}


function draw() { 

    Engine.update(myengine);
    background(0);
  
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display(); 
    bird1.display();
    
}

