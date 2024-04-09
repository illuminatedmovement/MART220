var myFont;

function preload(){
  myFont = loadFont('fonts/Protest_Revolution/ProtestRevolution-Regular.ttf');
}
function setup() {
    createCanvas(800, 800, WEBGL);
}

function draw() {
    background(120);
    
    for(let i = 0; i < 150; i+=10){
        push();
        fill(i * 0.1, 100, 100);
      
        // line
        translate(0, 100, 0);
        rotateRandomly();
        line(random(-500,0), 0, i, random(500), 0, i);
      
        // triangles
        translate(0, 100, 0);
        normalMaterial();
        rotateRandomly();
        triangle(
          0, sin( i + frameCount * 0.02) * 2, i, 
          60, 60, i, 
          -60, 60, i);
      
        // quad
        translate(200, 100, 0);
        rotateRandomly();
        quad(
          -100, i, 0,
          100, i, 0,
          -100, 100, i,
          100, 100, i
        );
        pop();
    }

    fill(125,25,125);
    textFont(myFont);
    textSize(32);
    text("Jeremy Jeffay", -330,-360);
    text("Random Precision", 150,370);

    
}

function rotateRandomly() {
    rotateX(random(3)); // Random rotation around x-axis
    rotateY(random()); // Random rotation around y-axis
    rotateZ(random()); // Random rotation around z-axis
}
