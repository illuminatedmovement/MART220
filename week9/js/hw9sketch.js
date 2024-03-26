
var idlePaths = [];
var myAnimation;
var walkPaths = [];
var deadPaths = [];
let flobImage;
let patternsImage;
let swoopImage;
var health = 3;
var score = 0;
var myTime = 5;

function preload() {
   idlePaths = loadStrings("textFiles/idle.txt");
   walkPaths = loadStrings("textFiles/walk.txt");
   deadPaths = loadStrings("textFiles/dead.txt");
   
}

function setup() {
  createCanvas(800,600);
  myAnimation = new animationImage( 200, 200, 50, 50);
  myAnimation.myLoadAnimation('idle', idlePaths);
  myAnimation.myLoadAnimation('walk', walkPaths);
  myAnimation.myLoadAnimation('dead', deadPaths);

  //compact way to add an image
  flobImage = new Sprite(random(750), random(550),50,50, 'static');
  flobImage.img = "images/FlobSolo copy.png";
  flobImage.scale = 0.05;
  flobImage.diameter = 100;

  flobImage = new Sprite(random(750), random(550),50,50, 'static');
  flobImage.img = "images/FlobSolo copy.png";
  flobImage.scale = 0.05;
  flobImage.diameter = 100;

  flobImage = new Sprite(random(750), random(550),50,50, 'static');
  flobImage.img = "images/FlobSolo copy.png";
  flobImage.scale = 0.05;
  flobImage.diameter = 100;


  //compact way to add an image
  patternsImage = new Sprite(500, 500,100,100, 'static');
  patternsImage.img = "images/Patterns Revealed.jpg";
  patternsImage.scale = 0.05;
  patternsImage.diameter = 50;

  swoopImage = new Sprite(random(750), random(550),50,50, 'static');
  swoopImage.img = "images/Glacial Swoop.jpg";
  swoopImage.scale = 0.02;
  swoopImage.diameter = 50;
}

setInterval(changeTime, 1000);

// display all the frames using the draw function as a loop
function draw() 
{

    background(120);  
   
    fill(100, 252, 169);
    textSize(24);
    text("Score:" + score, 50, 50);

    fill(100, 252, 169);
    textSize(24);
    text("Health:" + health, 700, 50);

    text(myTime + " seconds", 680, 570);
    
    if(kb.pressing('d'))
    {
        if(myAnimation.isColliding(flobImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(patternsImage))
        {
            patternsImage.remove();
            score += 1;
            
        }  
        else if(myAnimation.isColliding(swoopImage))
        {
            swoopImage.remove();
            health -= 1;
            
        }  
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');    
          
    }
    else if(kb.pressing('a'))
    {
        if(myAnimation.isColliding(flobImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');  
        }  
        else if(myAnimation.isColliding(patternsImage))
        {
            patternsImage.remove();
            score += 1;
            
        }  
        else if(myAnimation.isColliding(swoopImage))
        {
            swoopImage.remove();
            health -= 1;
            
        }  
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');        
    }
    else if(kb.pressing('w'))
    {
        if(myAnimation.isColliding(flobImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(patternsImage))
        {
            patternsImage.remove();
            score += 1;
            
        }  
        else if(myAnimation.isColliding(swoopImage))
        {
            swoopImage.remove();
            health -= 1;
            
        }  
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk'); 

    }
    else if(kb.pressing('s'))
    {
        if(myAnimation.isColliding(flobImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(patternsImage))
        {
            patternsImage.remove();
            score += 1;
            
        }  
        else if(myAnimation.isColliding(swoopImage))
        {
            swoopImage.remove();
            health -= 1;
            
        }  
        myAnimation.updatePosition('down');   
        myAnimation.drawAnimation('walk');        
    }
    else
    {
        myAnimation.drawAnimation('idle');
        myAnimation.drawAnimation('idle');
    } 
    
    patternsImage.debug = mouseIsPressed;
    
    if(health <= 0)
            {
                textSize(40);
                text("Deadzo!!!", 300, 300);
                myAnimation.drawAnimation('dead');
                myAnimation.updatePosition('dead');
            }
    if(score >= 10)
            {
                textSize(40);
                text("Winner!!!", 300, 300);
            }

   
}

function changeTime()
{
    myTime--;
    if(myTime <= -1){

        myTime = 5;
        
        flobImage = new Sprite(random(750), random(550),50,50, 'static');
        flobImage.img = "images/FlobSolo copy.png";
        flobImage.scale = 0.05;
        flobImage.diameter = 100;

        patternsImage = new Sprite(random(750), random(550),100,100, 'static');
        patternsImage.img = "images/Patterns Revealed.jpg";
        patternsImage.scale = 0.05;
        patternsImage.diameter = 50;
        if(myAnimation.isColliding(patternsImage))
        {
            patternsImage.remove();
            score += 1;
            
        }  

        swoopImage = new Sprite(random(750), random(550),50,50, 'static');
        swoopImage.img = "images/Glacial Swoop.jpg";
        swoopImage.scale = 0.02;
        swoopImage.diameter = 50;
        if(myAnimation.isColliding(swoopImage))
        {
            swoopImage.remove();
            health -= 1;
            
        }  
        

     }
}

