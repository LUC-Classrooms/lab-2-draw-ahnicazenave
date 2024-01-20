function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  //floor
  strokeWeight(30)
  line(0, 590, 800, 590);
  //body 2
  noStroke(); 
  fill(240);
  ellipse(400, 450, 225, 225);
  //body 1
  noStroke(); 
  fill(255, 0, 0);
  ellipse(400, 290, 200, 200);
  //head
  noStroke(); 
  fill(114);
  ellipse(400, 140, 175, 175);
}
