var xImage = 50, yImage = 300;
var myFont;
var myTime = 3;
var i = 0;
var idleStrings = [];
var slideStrings = [];
var idleArray = [];
var slideArray = [];
var flipX = false;

var objectToEat;
var objectNotToEat;
var objectToDraw;
var score  = 0;

var x;
var y;

var w;
var h;

var backgroundSound, goodSound, badSound;

var scribble = new Scribble();

function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    slideStrings= loadStrings("../textfiles/slide.txt");
    backgroundSound = loadSound("sounds/finalDraft copy.wav");
    goodSound = loadSound("sounds/goodSound.wav");
    badSound = loadSound("sounds/badSound.wav");
}

function setup() {
    createCanvas(800, 800);
    x = 100;
    y = width;
    w = 100;
    h = height;
    for (let k = 0; k < idleStrings.length; k++) {
        idleArray.push(new myImage(idleStrings[k], 50, 300, 680, 472));
    }
    for (let k = 0; k < slideStrings
    .length; k++) {
        slideArray.push(new myImage(slideStrings[k], 50, 300, 680, 472));
    }

    objectToEat = new myImage("images/Patterns Revealed.jpg", 500, 400, 100, 100);
    objectNotToEat = new myImage("images/FlobSolo copy.png", random(window.width), random(window.height), 175, 175);
    myFont = loadFont("fonts/ProtestRiot-Regular.ttf");

    setInterval(changeTime, 100);
    setInterval(changeClock, 1000);
}
function draw() {
    background(180);

    if (objectToEat != null) {
        objectToEat.draw();
        objectNotToEat.draw();
    }

    if (keyIsPressed) {
        if (key == "w") {
            yImage -= 1;
        }
        if (key == "s") {
            yImage += 1;
        }
        if (key == "a") {
            xImage -= 1;
            flipX = true;
        }
        if (key == "d") {
            xImage += 1;
            flipX = false;
        }

        for (var ii = 0; ii < idleArray.length; ii++) 
        {
            idleArray[ii].updateX(xImage);
            idleArray[ii].updateFlip(flipX);
            idleArray[ii].y = yImage;
            slideArray[ii].updateX(xImage);
            slideArray[ii].y = yImage;
            slideArray[ii].updateFlip(flipX);
        
            
            if (objectToEat != null) {
                
                if (slideArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                    objectToEat = null;
                    score++;
                    goodSound.play();
                    }
                if (slideArray[ii].checkCollision(objectNotToEat.x, objectNotToEat.y, objectNotToEat.w, objectNotToEat.h)) {
                    //objectNotToEat = null; this seems to break it upon collision and can't seem to reconcile, without it the score continues to be decreased while colliding
                    score -= 1;
                    badSound.play();
                    }
                    
                }
                
                
        }
           
            

        
        objectToDraw = slideArray;
    }
    else {
        objectToDraw = idleArray;     
    }

    objectToDraw[i].draw();

    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Score:" + score, 400, 50);

    fill(36, 250, 100);
    
    text(myTime + " seconds", 50, 50);
}

function changeTime() {
    i++;
    if (i > idleArray.length - 1) {
        i = 0;

    }
}

function changeClock()
{
    myTime--;
    if(myTime <= 0){

        myTime = 5;
        
        addNewFood();
     }
}

function addNewFood()
{
  
        objectToEat = new myImage("images/Patterns Revealed.jpg", random(x,y), random(w,h), 100, 100);
        objectNotToEat = new myImage("images/FlobSolo copy.png", random(window.width), random(window.height), 175, 175);
   
}

function mousePressed()
{
    backgroundSound.play();
}


scribble.scribbleLine( x1, y1, x2, y2 );
