class myAnimation
{
    constructor(myFilePath, x, y)
    {
        this.myFilePath = myFilePath;
        this.myAnimationObject = loadImage(this.myFilePath);
        this.x = x;
        this.y = y;
    }

    updateX(x)
    {
        this.x = x;
    }
    updateY(y)
    {
        this.y = y;
    }

    draw()
    {
        this.myAnimationObject.resize(504,672);
        image(this.myAnimationObject, this.x, this.y);
        
    }

}