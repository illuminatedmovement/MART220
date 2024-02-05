var pepperoniXs = [];
var pepperoniYs = [];
var pepperoniDiameters = [];

var cheeseXs = [];
var cheeseYs = [];
var cheeseDiameters = [];

var userX, userY; // User-controlled position

function setup() {
  createCanvas(800, 600);
  var x = 80;
  var y = 118;
  var diameter = 3;

  for (var i = 0; i < 30; i++) {
    pepperoniXs[i] = x;
    pepperoniYs[i] = y;
    pepperoniDiameters[i] = diameter;
    x += 5;
    y += 5;
    diameter += 1;
  }

  var c = 240;
  var d = 138;
  for (var a = 0; a < 30; a++) {
    cheeseXs[a] = c;
    cheeseYs[a] = d;
    cheeseDiameters[a] = diameter;
    c += 5;
    d += 5;
    diameter += 1.5;
  }

  // Initialize user-controlled position
  userX = width - 50;
  userY = height - 30;
}

function draw() {
  background(220);
  fill(225, 173, 103);
  triangle(10, 85, 305, 70, 276, 455); // slice
  line(10, 80, 305, 75); // crust
  line(10, 83, 305, 78);
  line(10, 86, 305, 73);
  line(10, 88, 305, 68);
  fill(217, 78, 57); // pep stacks
  for (var i = 0; i < pepperoniXs.length; i++) {
    circle(pepperoniXs[i], pepperoniYs[i], pepperoniDiameters[i]);
  }
  for (var a = 0; a < cheeseXs.length; a++) {
    circle(cheeseXs[a], cheeseYs[a], cheeseDiameters[a]);
  }
  fill(0, 0, 0); // eyes
  circle(224, 265, 20);
  circle(384, 285, 20);
  fill(255, 255, 255); // mouth
  ellipse(246, 355, 70, 40);
  line(213, 355, 280, 355);
  ellipse(192, 155, 50, 40); // cheese
  ellipse(236, 195, 30, 13);
  ellipse(130, 230, 20, 9);
  ellipse(276, 115, 27, 17);
  ellipse(176, 102, 47, 11);

  // Draw user-controlled shape
  fill(0, 150, 255); // blue color
  ellipse(userX, userY, 30, 30);
}

function keyPressed() {
  // Move user-controlled shape using keyboard events
  const step = 10;
  if (keyCode === LEFT_ARROW) {
    userX -= step;
  } else if (keyCode === RIGHT_ARROW) {
    userX += step;
  } else if (keyCode === UP_ARROW) {
    userY -= step;
  } else if (keyCode === DOWN_ARROW) {
    userY += step;
  }
}

function mousePressed() {
  // Move some of the shapes randomly when the mouse is pressed
  let randomIndex = floor(random(pepperoniXs.length));
  pepperoniXs[randomIndex] = random(width);
  pepperoniYs[randomIndex] = random(height);

  randomIndex = floor(random(cheeseXs.length));
  cheeseXs[randomIndex] = random(width);
  cheeseYs[randomIndex] = random(height);
}