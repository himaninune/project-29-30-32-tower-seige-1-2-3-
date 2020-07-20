const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImage, platform, sledge;
var myball, slingshot;

var gameState = "onSling";

function preload() {
    getBackgroundImage();
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    sledge = new Ground(900, 370, 395, 20);
    platform = new Ground(150, 305, 300, 170);

    boxa1 = new Box(737, 298, 70, 70);
    boxa2 = new Box(812, 298, 70, 70);
    box3 = new Box(882, 298, 70, 70);
    box4 = new Box(952, 298, 70, 70);
    box5 = new Box(1022, 298, 70, 70);

    box6 = new Box(777, 240, 70, 70);
    box7 = new Box(847, 240, 70, 70);
    box8 = new Box(917, 240, 70, 70);
    box9 = new Box(987, 240, 70, 70);

    box10 = new Box(812, 170, 70, 70);
    box11 = new Box(882, 170, 70, 70);
    box12 = new Box(952, 170, 70, 70)

    box13 = new Box(847, 100, 70, 70);
    box14 = new Box(917, 100, 70, 70);

    box15 = new Box(882, 30, 70, 70);



    myball = new ball(200, 50);


    slingshot = new SlingShot(myball.body, { x: 200, y: 50 });
    getBackgroundImage();
}

function draw() {
    if (backgroundImage) {
        background(backgroundImage);
    }
    Engine.update(engine);

    boxa1.display();
    boxa2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    myball.display();
    platform.display();
    sledge.display();

    slingshot.display();
}

function mouseDragged() {
    if (gameState !== "launched") {
        Matter.Body.setPosition(myball.body, { x: mouseX, y: mouseY });
    }
}


function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32) {
        // slingshot.attach(ball.body);
    }
}

async function getBackgroundImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var json = await response.json();
    var dateTime = json.datetime;
    console.log(dateTime);
    var time = dateTime.slice(11, 13);

    if (time >= "06" && time <= "19") {
        bg = "sprites/bg.png";
        console.log("insideifblock")
    }
    else bg = "sprites/bg2.jpg";

    backgroundImage = loadImage(bg);
} 
