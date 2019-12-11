let x = -300;

function setup() {
  // set canvas size
  var canvas = createCanvas(800, 300);
  canvas.parent('sketch');
}
     
function draw() {
  background(255, 255, 255);

  x = x + 1;
  if (x > 700) {
    x = -300;
  }

  fill(255,224,189);
  rect(x + 100, 100, 200, 150);

  rect(x + 100, 10, 50, 90, 0, 30, 0, 0);

  fill(234,192,134);
  rect(x + 175, 110, 125, 30);
  rect(x + 170, 142, 130, 30);
  rect(x + 173, 174, 127, 30);
  rect(x + 185, 206, 115, 30);

  fill(255, 255, 255);
  rect(x + 175, 112, 30, 25, 0, 30, 30, 0);
  rect(x + 170, 144, 30, 25, 0, 30, 30, 0);
  rect(x + 173, 177, 30, 25, 0, 30, 30, 0);
  rect(x + 185, 207, 30, 25, 0, 30, 30, 0);
}
