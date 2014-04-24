
function sketch(p) {
  function setup(){
    p.size(1000,1000);
    p.background(255, 255, 255);
  }

  function draw() {
    ellipseMode (CENTER);
    ellipse(10,10,12,14);

  }
  p.setup = setup;
  p.draw = draw;

}

var p = new Processing(canvas, sketch); 