function setup() {
  createCanvas(720, 400);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(240, 100, 100); 

  
  let heartSize = map(mouseY, 0, height, 20, 200); 

  
  let hueValue = map(mouseX, 0, width, 0, 360);  
  
  for (let i = 0; i < 5; i++) {
    fill((hueValue + i * 40) % 360, 100, 90); 
    
    drawHeart(width / 2 + (i - 2) * 80, height / 2, heartSize * (1 + 0.1 * i)); 
  }
}

function drawHeart(x, y, size) {
  beginShape();
  for (let t = 0; t < TWO_PI; t += 0.1) {
    
    let sx = 16 * pow(sin(t), 3);
    let sy = 13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t);
    vertex(x + sx * (size / 100), y - sy * (size / 100)); 
  }
  endShape(CLOSE);
}