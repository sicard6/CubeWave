let angle = 0;
let w = 60;
let min = 100;
let magicangle;
let rotation = 0;

let offsetAmplitud = 3.14;
let SizeB = 0;
let zoomOut = 800



function setup() {
    createCanvas(700, 700, WEBGL);
    magicangle = atan(1/sqrt(2));
    frameRate(60);
    framecount = 0;
  }
  
function draw() {
    background(255);
    ortho(-zoomOut,zoomOut,-zoomOut,zoomOut,-zoomOut*3,zoomOut*3);  
    directionalLight(200, 127, 225, -0.8, -0.8, -1);
    directionalLight(200, 127, 225, 0.8, -0.8, -1);
    directionalLight(140, 41, 174, 1, 1, -1);

    rotateX(-QUARTER_PI);
    rotateY(rotation);
    offset = 0;
    for(let x = w/2; x < height; x+= w){
        for(let z = w/2; z < width; z+= w){
            push();
            d = dist(x,z,width/2,height/2);
            offset = map(d,0,width/2,-offsetAmplitud,offsetAmplitud);
            a = angle + offset;
            h = floor(map(sin(a), -1, 1, min, 300));
            translate(x - width/2,0,z - height/2);
            ambientMaterial(255);
            //normalMaterial();
            noStroke();
            box(w - SizeB,h,w - SizeB);
            //rect(x-width/2 + w, 0, w - 2, h);
            pop();
        }
    }
    angle-= 0.04;
    rotation+= 0.004;
}