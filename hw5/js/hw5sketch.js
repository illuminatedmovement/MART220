var myAnimationObjects, myAnimationObjects2, myAnimationObjects3, myAnimationObjects4, myAnimationObjects5, myAnimationObjects6, myAnimationObjects7, myAnimationObjects8, myAnimationObjects9, myAnimationObjects10, myAnimationObjects11, myAnimationObjects12, myAnimationObjects13, myAnimationObjects14, myAnimationObjects15, myAnimationObjects16, myAnimationObjects17, myAnimationObjects18, myAnimationObjects19, myAnimationObjects20, myAnimationObjects21, myAnimationObjects22, myAnimationObjects23, myAnimationObjects24, myAnimationObjects25, myAnimationObjects26, myAnimationObjects27, myAnimationObjects28, myAnimationObjects29, myAnimationObjects30, myAnimationObjects31, myAnimationObjects32, myAnimationObjects33, myAnimationObjects34;
var myAnimationArray = [];
var time = 0;
var xImage = 25;
var yImage = 25;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    myAnimationObjects = new myAnimation("images/flow0 - 1.png", xImage,yImage, 100, 100);
    myAnimationObjects2 = new myAnimation("images/flow0 - 2.png", xImage,yImage, 100, 100);
    myAnimationObjects3 = new myAnimation("images/flow0 - 3.png", xImage,yImage, 100, 100);
    myAnimationObjects4 = new myAnimation("images/flow0 - 4.png", xImage,yImage, 100, 100);
    myAnimationObjects5 = new myAnimation("images/flow0 - 5.png", xImage,yImage, 100, 100);
    myAnimationObjects6 = new myAnimation("images/flow0 - 6.png", xImage,yImage, 100, 100);
    myAnimationObjects7 = new myAnimation("images/flow0 - 7.png", xImage,yImage, 100, 100);
    myAnimationObjects8 = new myAnimation("images/flow0 - 8.png", xImage,yImage, 100, 100);
    myAnimationObjects9 = new myAnimation("images/flow0 - 9.png", xImage,yImage, 100, 100);
    myAnimationObjects10 = new myAnimation("images/flow0 - 10.png", xImage,yImage, 100, 100);
    myAnimationObjects11 = new myAnimation("images/flow0 - 11.png", xImage,yImage, 100, 100);
    myAnimationObjects12 = new myAnimation("images/flow0 - 12.png", xImage,yImage, 100, 100);
    myAnimationObjects13 = new myAnimation("images/flow0 - 13.png", xImage,yImage, 100, 100);
    myAnimationObjects14 = new myAnimation("images/flow0 - 14.png", xImage,yImage, 100, 100);
    myAnimationObjects15 = new myAnimation("images/flow0 - 15.png", xImage,yImage, 100, 100);
    myAnimationObjects16 = new myAnimation("images/flow0 - 16.png", xImage,yImage, 100, 100);
    myAnimationObjects17 = new myAnimation("images/flow0 - 17.png", xImage,yImage, 100, 100);
    myAnimationObjects18 = new myAnimation("images/flow0 - 18.png", xImage,yImage, 100, 100);
    myAnimationObjects19 = new myAnimation("images/flow0 - 19.png", xImage,yImage, 100, 100);
    myAnimationObjects20 = new myAnimation("images/flow0 - 20.png", xImage,yImage, 100, 100);
    myAnimationObjects21 = new myAnimation("images/flow0 - 21.png", xImage,yImage, 100, 100);
    myAnimationObjects22 = new myAnimation("images/flow0 - 22.png", xImage,yImage, 100, 100);
    myAnimationObjects23 = new myAnimation("images/flow0 - 23.png", xImage,yImage, 100, 100);
    myAnimationObjects24 = new myAnimation("images/flow0 - 24.png", xImage,yImage, 100, 100);
    myAnimationObjects25 = new myAnimation("images/flow0 - 25.png", xImage,yImage, 100, 100);
    myAnimationObjects26 = new myAnimation("images/flow0 - 26.png", xImage,yImage, 100, 100);
    myAnimationObjects27 = new myAnimation("images/flow0 - 27.png", xImage,yImage, 100, 100);
    myAnimationObjects28 = new myAnimation("images/flow0 - 28.png", xImage,yImage, 100, 100);
    myAnimationObjects29 = new myAnimation("images/flow0 - 29.png", xImage,yImage, 100, 100);
    myAnimationObjects30 = new myAnimation("images/flow0 - 30.png", xImage,yImage, 100, 100);
    myAnimationObjects31 = new myAnimation("images/flow0 - 31.png", xImage,yImage, 100, 100);
    myAnimationObjects32 = new myAnimation("images/flow0 - 32.png", xImage,yImage, 100, 100);
    myAnimationObjects33 = new myAnimation("images/flow0 - 33.png", xImage,yImage, 100, 100);
    myAnimationObjects34 = new myAnimation("images/flow0 - 34.png", xImage,yImage, 100, 100);

    myAnimationArray[0] = myAnimationObjects;
    myAnimationArray[1] = myAnimationObjects2;
    myAnimationArray[2] = myAnimationObjects3;
    myAnimationArray[3] = myAnimationObjects4;
    myAnimationArray[4] = myAnimationObjects5;
    myAnimationArray[5] = myAnimationObjects6;
    myAnimationArray[6] = myAnimationObjects7;
    myAnimationArray[7] = myAnimationObjects8;
    myAnimationArray[8] = myAnimationObjects9;
    myAnimationArray[9] = myAnimationObjects10;
    myAnimationArray[10] = myAnimationObjects11;
    myAnimationArray[11] = myAnimationObjects12;
    myAnimationArray[12] = myAnimationObjects13;
    myAnimationArray[13] = myAnimationObjects14;
    myAnimationArray[14] = myAnimationObjects15;
    myAnimationArray[15] = myAnimationObjects16;
    myAnimationArray[16] = myAnimationObjects17;
    myAnimationArray[17] = myAnimationObjects18;
    myAnimationArray[18] = myAnimationObjects19;
    myAnimationArray[19] = myAnimationObjects20;
    myAnimationArray[20] = myAnimationObjects21;
    myAnimationArray[21] = myAnimationObjects22;
    myAnimationArray[22] = myAnimationObjects23;
    myAnimationArray[23] = myAnimationObjects24;
    myAnimationArray[24] = myAnimationObjects25;
    myAnimationArray[25] = myAnimationObjects26;
    myAnimationArray[26] = myAnimationObjects27;
    myAnimationArray[27] = myAnimationObjects28;
    myAnimationArray[28] = myAnimationObjects29;
    myAnimationArray[29] = myAnimationObjects30;
    myAnimationArray[30] = myAnimationObjects31;
    myAnimationArray[31] = myAnimationObjects32;
    myAnimationArray[32] = myAnimationObjects33;
    myAnimationArray[33] = myAnimationObjects34;

    myPizzaObject = new myPizza();

    setInterval(increment,50);
}

function draw()
{
    background(120);
    myAnimationArray[time].draw();
    myPizzaObject.drawPizza();

    if(keyIsPressed)
    {
        if(key == "a")
        {
            xImage -= 1;
            for(var i = 0; i < myAnimationArray.length; i++)
            {
                myAnimationArray[i].updateX(xImage);
            }
        }
        if(key == "d")
        {
            xImage += 1;
            for(var i = 0; i < myAnimationArray.length; i++)
            {
                myAnimationArray[i].updateX(xImage);
            }
        }
        if(key == "w")
        {
            yImage -= 1;
            for(var i = 0; i < myAnimationArray.length; i++)
            {
                myAnimationArray[i].updateY(yImage);
            }
        }
        if(key == "s")
        {
            yImage += 1;
            for(var i = 0; i < myAnimationArray.length; i++)
            {
                myAnimationArray[i].updateY(yImage);
            }
        }
    }
    
}

function increment()
{
    time++;
    if(time > myAnimationArray.length-1)
    {
        time = 0;
    }
}






