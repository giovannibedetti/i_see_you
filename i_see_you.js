/*I See You
sound+code: http://www.giovannibedetti.com
illustration: https://www.behance.net/monocolo
*/

var imgCount = 8;
var imgs = [];

var recording=false;
var index=0;
var randomly=true;
var bg;

function preload(){
  loadImages();
  loadBg();
}

function windowResized() {
  resizeCanvas(sketchParent.offsetWidth, sketchParent.offsetHeight);
}

function setup() {
  sketchParent = document.getElementById("sketch-holder");
  var canvas = createCanvas(sketchParent.offsetWidth, sketchParent.offsetHeight);
  canvas.parent('sketch-holder');
  smooth();
  frameRate(24);
  background(0);
  noStroke();
}

function loadImages(){
for (var i = 0; i < imgCount; i++){
    imgs[i] = loadImage("data/iseeyou"+nf(i, 2)+".png");
  }
}

function loadBg(){
  bg = new Howl({
    src: ['data/icu.bg.mp3', 'data/icu.bg.wav', 'data/icu.bg.aac', 'data/icu.bg.ogg'],
    loop: true,
  });
  bg.play();
}

function setPos(){
  var rnd = random(bg.duration());
  bg.seek(rnd);
}

function draw(){
 
  background(0);
  drawImages();
}

function drawImages() {
  if(randomly) image(imgs[int(random(imgs.length))], 0, 0, width, height);
  
  else {
    var rnd = random();
    if(rnd<0.5)
      image(imgs[index], 0, 0, width, height);
    else 
      image(imgs[index+1], 0, 0, width, height);
  }  
}

function mousePressed(){
  if(randomly) randomly=false; 
  else {
    randomly=true; 
    if(index<imgs.length-2) 
      index+=2; 
      else index=0;
  }
  setPos();
}







