class myImage {

    constructor(myFileName, x, y, w, h) 
    {

        this.characterImage = loadImage(myFileName);
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
       
        
    }
    
    updateX(x) 
    {
        this.x = x;
    }

    updateFlip(flipX) {
        this.flipX = flipX;
    }
    draw() 
    {
        this.characterImage.resize(this.w/4, this.h/4);
        if (this.flipX) {
            
            push();
            
            scale(-1, 1);
            
            image(this.characterImage, -this.x - this.w / 4, this.y);
            pop();
        }
        else {
            
            image(this.characterImage, this.x, this.y);

        }

    }

   
    /*
  isCharacterColliding(objectToEat)
    {
        var topEdge1 = this.y + this.h;
        var rightEdge1 = this.x + this.w; 
        var leftEdge1 = this.x;
        var bottomEdge1 = this.y;
        var topEdge2 = objectToEat + objectToEat;
        var rightEdge2 = objectToEat + objectToEat; 
        var leftEdge2 = objectToEat;
        var bottomEdge2 = objectToEat;   
        
        if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
            return true; 
       }
       return false;
    }
    */


  
  
   checkCollision(x2, y2, w2, h2) {

        return collideRectRect(this.x - this.w/2, this.y - h2/2, this.w, this.h, x2,y2,w2,h2);

    }
}