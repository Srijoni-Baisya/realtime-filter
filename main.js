var noseX = 0;
var noseY = 0;
function preload(){
    //add clown img link
    img = loadImage("https://i.postimg.cc/s2gQQFD0/clown-Nose.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();//store canvas in var and place it in center
    //part1 - accessing webcam
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();//hiding extra component

    //part3 - intialize poseNet model 
    poseNet = ml5.poseNet(video,modelLoaded);

    //part5 - execute posenet model
    poseNet.on('pose',gotPoses);
}

//part4 - define modelLoaded()
function modelLoaded(){
    console.log("Posenet is initialized !");
}

//part6 - define gotPoses()
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = "+ results[0].pose.nose.x);
        console.log("Nose y = "+ results[0].pose.nose.y);
    }
}

function draw(){
   //part2- load webcam on canvas
   image(video,0,0,400,400);

   //draw red circle on nose
   //fill(255,0,0);
   //stroke(2455,0,0);
   //circle(noseX,noseY,20);

   //place clown nose img on nose
   image(img,noseX-15,noseY-10,30,30);
}

function take_snapshot(){
    save('FilteredClownNoseImage.png');//save snapshot on clicking button 
}