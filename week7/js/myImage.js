class myImage {

    constructor(myFileName, x, y, w, h) {

        this.characterImage = loadImage(myFileName);
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
       
        
    }
    
    updateX(x) {
        this.x = x;
    }

    updateFlip(flipX) {
        this.flipX = flipX;
    }
    draw() {
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

    checkCollision(x2, y2, w2, h2) {

        return collideRectRect(this.x- this.w/1, this.y - h2/1, this.w, this.h, x2, y2,w2,h2);

    }
}