var myXs = [];
var myYs = [];
var myDiameters = [];

var myCs = [];
var myDs = [];
var myDiameters = [];



function setup()
{
    createCanvas(800,600);
    var x = 80;
    var y = 118;
    var diameter = 3;
    
    for(var i = 0; i < 30; i++)
    {
        myXs[i] = x;
        myYs[i] = y;
        myDiameters[i] = diameter;
        x += 5;
        y += 5;
        diameter += 1;
    }

    var c = 240;
    var d = 138;
    for(var a = 0; a < 30; a++)
    {
        myCs[a] = c;
        myDs[a] = d;
        myDiameters[a] = diameter;
        c += 5;
        d += 5;
        diameter += 1.5;
    }
}

  function draw() {
    background(220);
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
    ellipse(246,355,70,40);
    line(213,355,280,355);
    ellipse(192,155,50,40);//cheese
    ellipse(236,195,30,13);
    ellipse(130,230,20,9);
    ellipse(276,115,27,17);
    ellipse(176,102,47,11);




  }
