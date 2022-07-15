nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;




function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(500,500);
canvas = createCanvas(600,450);
canvas.position(550,100);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function draw(){
background('#77eb34');
document.getElementById("font_size").innerHTML="Width and Height of Square is "+difference;
textSize(difference);
fill("black");
text("Rayyan",30,200);

}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("Nosex is "+nosex  +  "Nosey is "+nosey);
    rightwristx=results[0].pose.rightWrist.x;
    leftwristx=results[0].pose.leftWrist.y;
    difference=floor(leftwristx-rightwristx);
    console.log("rightwristx is "+rightwristx  +"leftwristx is "+leftwristx + "difference is "+difference);
}
}
