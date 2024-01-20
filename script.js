function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(204, 226, 225);
  //floor
  strokeWeight(80);
  stroke(246);
  line(0, 561, 800, 561);
  //arm left
  strokeWeight(2);
  stroke(64);
  fill(64);
  rect(200, 250, 150, 10);
  //arm right
  fill(64);
  rect(450, 250, 150, 10);
  //body 2
  fill(246);
  ellipse(400, 450, 225, 225);
  //body 1
  fill(246);
  ellipse(400, 290, 200, 200);
  //head
  fill(246);
  ellipse(400, 140, 175, 175);
  fill(251, 175, 33, 50);
  triangle(390, 170, 400, 180, 380, 160);
}
