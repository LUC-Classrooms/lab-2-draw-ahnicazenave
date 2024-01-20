function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  //floor
  line(0, 561, 800, 561);
  //arm left
  rect(300, 150, 200, 50);
  //body 2
  fill(240);
  ellipse(400, 450, 225, 225);
  //body 1
  fill(255, 0, 0);
  ellipse(400, 290, 200, 200);
  //head
  fill(114);
  ellipse(400, 140, 175, 175);
}
