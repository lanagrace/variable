var ellipseX = 400;
var ellipseY = 400;


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    colorMode(HSB)
    background(220);

    
}

function draw() {
  
    
    //noStroke()
    stroke(random(0,255), 255, 255, 0.5);
   
    line(mouseX, mouseY, mouseY, mouseY);

  
}