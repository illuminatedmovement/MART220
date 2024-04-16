var myFont;
var flob;

function preload(){
  myFont = loadFont('fonts/Protest_Revolution/ProtestRevolution-Regular.ttf');
  flob = loadModel('untitled 2.obj', true);
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
        translate(0, 200, 0);
        rotateRandomly();
        line(random(-500,0), 0, i, random(500), 0, i);
      
        // triangles
        translate(0, 200, 0);
        normalMaterial();
        rotateRandomly();
        triangle(
          0, sin( i + frameCount * 0.000000002) * 1.1, i, 
          60, 60, i, 
          -60, 60, i);
      
        // quad
        translate(200, 100, 0);
        rotateRandomly();
        quad(
          -100, i, 0,
          100, i, 0,
          -600, 800, i,
          -700, 2800, i
        );
        pop();
    }

    fill(125,25,125);
    textFont(myFont);
    textSize(32);
    text("Jeremy Jeffay", -330,-360);
    text("Random Precision", 150,370);

    push();
    rotateZ(90);
    model(flob);
    pop();
    mouseClicked();

    
}

function rotateRandomly() {
    rotateX(random(3)); // Random rotation around x-axis
    rotateY(random()); // Random rotation around y-axis
    rotateZ(random()); // Random rotation around z-axis
}

function mouseClicked()
{
  
  translate(flob,(random(600), random(600), random(1500)));

  
 /* push();
  (flob);
  translate(random(700), random(700), random(1500));
  pop();
  */
}