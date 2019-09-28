function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(40, 60), height-10-random(h));
  noStroke();


  x = x + 16;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }


  
  
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}

function mousePressed() {

    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  
}
