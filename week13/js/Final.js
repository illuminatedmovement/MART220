var img;
var myFont;

function preload(){
  img = loadImage('images/WayOut.jpg');
  myFont = loadFont('fonts/Protest_Revolution/ProtestRevolution-Regular.ttf');
}
function setup() {
    createCanvas(800, 800, WEBGL);
    image(img, 0, 0);
}

function draw() {
    background(120);
    fill(125,25,125);
    textFont(myFont);
    textSize(32);
    text("Jeremy Jeffay", -390,-360);
    text("Fractals Uncovered", 130,370);


    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    
    texture(img);
    for(let i = 0; i < 350; i+=10)
    {
      translate(i, -100);
      beginShape();
      vertex(0, 0, 200, 0, 0);
      vertex(i, 100, i, 1, 0);
      vertex(200, 200, 300, 1, 1);
      vertex(0, i, 500, 0, 1);
      endShape(CLOSE);
      if(mouseIsPressed)
      {
      rotateRandomly(frameCount * .00001);
      for(let i = 0; i < 150; i+=10)
      {
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
      }
    }
}

function rotateRandomly() {
    rotateX(random(3)); // Random rotation around x-axis
    rotateY(random()); // Random rotation around y-axis
    rotateZ(random()); // Random rotation around z-axis
}


