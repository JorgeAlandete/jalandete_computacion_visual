void setup(){
  size(1280, 720);
  draw();
}

void draw(){
  background(200);
  
  // Tranpolin
  pushMatrix();
  fill(250, 250, 250);
  translate(width/2, height/2);
  ellipse(0, 0, 600, 600);
  popMatrix();  
  
  // Cuadrado
  pushMatrix();
  fill(255, 0, 0);
  translate(width/2 + 100, height/2 + 100);
  rotate(frameCount * 0.02);
  scale( sin(frameCount * 0.05) + 0.1);
  rect(0, 0, 200, 200);
  popMatrix();
  
  // Elipse
  pushMatrix();
  fill(0, 255, 0);
  translate(width/2 - 100, height/2 - 100);
  rotate(frameCount * 0.1);
  scale(sin(millis() * 0.005) + 0.1);
  ellipse(0, 0, 200, 200);
  popMatrix();  
  
}
