var myXs = []; // L. pep stack array variables
var myYs = []; 
var myDiameters = [];

var myCs = []; // R. pep stack array variables
var myDs = [];
var myDiameters = [];

var mouthX = 246; //starting position for mouth ellipse
var mouthY = 355;

var homeX = 246; //home location to return mouth to after random movement upon mouseClick
var homeY = 355;

var x = 80;//pep eye starting points
var y = 118;//"  "
var diameter = 3;//"   "
var c = 240;
var d = 138;

for(var i = 0; i < 30; i++)
    {
        myXs[i] = x;
        myYs[i] = y;
        myDiameters[i] = diameter;
        x += 5;
        y += 5;
        diameter += 1;
    }

   
    for(var a = 0; a < 30; a++)
    {
        myCs[a] = c;
        myDs[a] = d;
        myDiameters[a] = diameter;
        c += 5;
        d += 5;
        diameter += 1.5;
    }

    function mouseClicked() { //random movement of mouth upon mouseClick
        mouthX = random(1000);
        mouthY = random(800);
        }
   
class myPizza 
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    
    

    drawPizza()
    {
    fill(225, 173, 103);
    triangle(10, 85, 305, 70, 276, 455);//slice

    line(10,80,305,75);//crust
    line(10,83,305,78);
    line(10,86,305,73);
    line(10,88,305,68);

    fill(217, 78, 57);//pep stacks
    for(var i = 0; i < myXs.length; i++)
    {
        circle(myXs[i],myYs[i],myDiameters[i]);
    }
    for(var a = 0; a < myCs.length; a++)
    {
        circle(myCs[a],myDs[a],myDiameters[a]);
    }
    fill(0,0,0);//eyes
    circle(224,265,20);
    circle(384,285,20);

    fill(255,255,255);//mouth
    ellipse(mouthX,mouthY,70,40);
    line(213,355,280,355);
    

    ellipse(192,155,50,40);//cheese
    ellipse(236,195,30,13);
    ellipse(130,230,20,9);
    ellipse(276,115,27,17);
    ellipse(176,102,47,11);

    if (mouthX != 246 || mouthY != 355)  {
        // If off the screen, slowly return to home position
        
        var easing = 0.05;
        var dx = homeX - mouthX;
        var dy = homeY - mouthY;
        mouthX += dx * easing;
        mouthY += dy * easing;
       
    }
    }

    
   
}
