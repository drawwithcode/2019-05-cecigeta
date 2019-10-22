function preload() {
  // put preload code here

  myImageDue = loadImage("corona.png");

}

var myImage;
var myImageDue;
var capture;
var button;
var x = 100;
var y = 100;


function setup() {

  createCanvas(windowWidth, windowHeight);
  background('#f9afd6');

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  button = createButton('snap');
  button.mousePressed(takesnap);

}

function takesnap() {

  imageMode(CENTER);
  image(capture, width / 2, height / 2);

}

function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    x -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 3;
  }

 // clears the canvas
  image(myImageDue, x, y );


  button.position(width - 780, height - 90);
  button.size(150);
  button.style('background-color','white' );
  button.style('font-size', '15px');
  button.style('color', 'black');
  button.style('border-style', 'solid');
  button.style('border-width', '5px');
  button.style('border-color', 'black');
  button.style('border-radius', '2px');


  push();
  textAlign(CENTER, CENTER);
  textFont('Alfa Slab One');
  fill("#cc3333");
  textSize(35);
  text('Move your crown with the keyboard', windowWidth / 2, windowHeight / 6);
  text('then take a pic', windowWidth / 2, windowHeight - 130);
  pop();

  push();
  textAlign(CENTER, CENTER);
  fill("black");
  textSize(10);
  text('*if you want create a pattern with the trail', windowWidth / 8, windowHeight -70);
  pop();



}
