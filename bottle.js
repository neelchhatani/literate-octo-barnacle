img1 = "";
function preload(){
img1 = loadImage('bottle.jpeg');
}
function setup(){
canvas = createCanvas(640 , 420);
canvas.center();
}
function draw(){
image(img1 , 0 , 0 , 640 , 420);
}