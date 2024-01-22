//state
let circleX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = 168;
}

function draw() {
  print(mouseX, mouseY);

  //clear out old frames
  background(10, 216, 247);

  //background
  noStroke();
  fill(18, 247, 10);
  rect(1, 335, windowWidth, windowHeight);

  //sun
  fill(247, 237, 10);
  ellipse(55, 78, 70, 70);
  strokeWeight(3);
  stroke(247, 237, 10);
  line(89, 69, 121, 62);
  line(89, 85, 103, 88);
  line(84, 98, 105, 116);
  line(72, 108, 78, 120);
  line(56, 113, 60, 138);
  line(43, 112, 41, 122);
  line(30, 104, 10, 123);
  line(21, 91, 14, 96);
  line(82, 54, 93, 47);
  line(68, 45, 83, 25);
  line(21, 73, 0, 72);
  line(24, 62, 13, 55);
  line(33, 49, 17, 30);
  line(49, 43, 49, 32)

  //cloud #1
  fill(255);
  noStroke();
  ellipse(250, 150, 100, 60);
  ellipse(290, 160, 70, 40);
  ellipse(230, 160, 70, 40);

  //cloud #2
  fill(255);
  noStroke();
  ellipse(500, 50, 100, 60);
  ellipse(540, 60, 70, 40);
  ellipse(480, 60, 70, 40);

  //person #1 label
  fill(0);
  strokeWeight(1);
  text("person #1", 81, 149);
  
  //person #1: head
  strokeWeight(3);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  ellipse(138, 206, 85, 85);
  
  //person #1: face
  fill(0, 0, 0);
  ellipse(124, 192, 5, 5);
  ellipse(156, 192, 5, 5);
  arc(139, 215, 25, 25, 0, PI);
  
  //person #1: body
  strokeWeight(3);
  stroke(0, 0, 0);
  line(137, 250, 138, 310);
  
  //person #1: arms
  strokeWeight(3);
  stroke(0, 0, 0);
  line(137, 273, 100, 290);
  line(138, 275, 169, 290);

  //person #1: legs
  strokeWeight(3);
  stroke(0, 0, 0);
  line(137, 310, 100, 340);
  line(138, 310, 169, 340);

  //person #2 label
  fill(0);
  strokeWeight(1);
  text("person #2", 471, 143);
  
  //person #2: head
  fill(255, 255, 255);
  strokeWeight(3);
  ellipse(510, 206, 85, 85);

  //person #2: face
  fill(0, 0, 0);
  ellipse(496, 192, 5, 5);
  ellipse(528, 192, 5, 5);
  arc(511, 215, 25, 25, 0, PI);

  //person #2: body
  strokeWeight(3);
  stroke(0, 0, 0);
  line(510, 250, 510, 310);

  //person #2: arms
  strokeWeight(3);
  stroke(0, 0, 0);
  line(510, 273, 479, 290);
  line(510, 273, 536, 290);

  //person #2: legs
  strokeWeight(3);
  stroke(0, 0, 0);
  line(510, 310, 483, 340);
  line(510, 310, 540, 340);
  
  //ball
  fill(247, 10, 10);
  strokeWeight(3);
  ellipse(circleX, 318, 40, 40);

  //conditional statements for the ball to move
  if (circleX == 168) {
    textSize(20);
    text("press your mouse for the ball to move from person #1 to person #2", 75, 40);
    text("press any keys for the ball to move from person #2 to person #1", 90, 60);

  } else if(circleX < 470) {
    textSize(20);
    text("keep pressing your mouse for the ball to move to person #2", 117, 40);
    text("keep pressing any keys for the ball to move to person #1", 117, 60);
    
  } else if (circleX > 470) {
    textSize(25);
    text("You passed the ball!", 147, 40);
    text("Press any key to move the ball back to person #1", 110, 60);
  }

  if (mouseIsPressed) {
    circleX = circleX + 1; 

  } else if(keyIsPressed) {
    circleX = circleX - 1; 
  }
}
