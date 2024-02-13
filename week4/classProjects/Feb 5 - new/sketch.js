var pick;
var xImage = 100, yImage = 25;
var speedX, speedY;
var myFont;

var myTime = 10;
var myLevel = 1;

var pick2;
var xImage2 = 300, yImage2 = 25;
var speedX2, speedY2;

function setup()
{
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.mouseMoved(followMouse);
    pick = loadImage("images/chaser.jpeg");

    pick2 = loadImage("images/chasee.jpeg");

    myFont = loadFont("fonts/ProtestRiot-Regular.ttf");
    speedX = (1);
    speedY = random(1, 5);

    speedX2 = random(1, 5);
    speedY2 = random(1, 5);

    setInterval(changeTime, 1000);
}
// this runs continuously
function draw()
{
    background(120);
    image(pick, xImage,yImage);

    xImage += speedX;
    yImage += speedY;

    if(xImage >= width-100 || xImage <= 0)
    {
        speedX *=-1;
    }

    if(yImage >= height-100 || yImage <= 0)
    {
        speedY *=-1;
    }

    image(pick2, xImage2,yImage2);

    followMouse;

    

    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Hello and Yippee", 1000, 700);



    fill(36,250,100);
    textSize(15);

    text(myTime + " seconds", 50, 50);
    text("Level " + myLevel, 1300, 50);


   // var hasCollided = checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100);
    
    if(checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100))
    {
        myLevel = 1;
        myTime = 10;
        xImage = 100;
        xImage2 = 600;
        speedX = 1;

    }

   
    
    

}

function checkCollision(x,y,w,h, x2,y2,w2,h2)
{
   
	if (
		x - w/2 < x2 + w2/2 &&
		x + w2/2 > x2 -w/2 &&
		y - h2/2 < y2 + h/2 &&
		y + h2/2 > y2 - h/2
	
	){
     return true;
	} else {
     return false;
    }
}

function changeTime()

{
    myTime--;
    if(myTime < 0)
    {
        // reset
        myTime = 10;
        myLevel ++;
        speedX ++;
    }
    
}

function followMouse()
{
    xImage2 = mouseX;
    yImage2 =mouseY;
}
