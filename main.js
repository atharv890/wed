function setup(){
yo=createCanvas(500,500);
yo.position(500,500);
camera=createCapture(VIDEO);
camera.hide();
andh="";
}
function draw(){
image( camera,0,0,500,500);
fill(0,0,250);
stroke(0,128,0);
circle(20,25,30);
circle(23,475,30);
circle(470,25,30);
circle(470,476,30);
fill(250,0,0);
stroke(250,0,0);
rect(35,20,420,10);
rect(35,470,420,10);
rect(15,40,10,421);
rect(465,40,10,421);
}
function take_snapshot(){
    save("AG.png");
    }
