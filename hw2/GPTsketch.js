function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
  
    // Draw pizza slice
    fill(255, 204, 0); // Pizza color
    triangle(200, 200, 50, 350, 350, 350); // Pizza slice shape
  
    // Draw pepperoni stacks as eyes
    drawPepperoniEye(150, 180); // Left eye
    drawPepperoniEye(250, 180); // Right eye
  
    // Draw fresh mozzarella cheese balls
    drawCheeseBall(200, 250); // Center cheese ball
  }
  
  function drawPepperoniEye(x, y) {
    // Draw pepperoni stack as an eye
    for (let i = 0; i < 30; i++) {
      fill(255, 0, 0); // Pepperoni color
      ellipse(x, y - i * 5, 20, 10); // Pepperoni shape
    }
  
    // Draw pupil
    fill(0); // Pupil color
    ellipse(x, y - 15 * 5, 10, 10); // Pupil shape
  }
  
  function drawCheeseBall(x, y) {
    // Draw a fresh mozzarella cheese ball
    fill(255, 255, 204); // Cheese color
    ellipse(x, y, 25, 25); // Cheese ball shape
  }
  