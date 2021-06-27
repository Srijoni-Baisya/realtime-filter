function preload(){
    //add clown img link
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
        console.log("Nose x = "+ results[0].pose.nose.x);
        console.log("Nose y = "+ results[0].pose.nose.y);
    }
}

function draw(){
   //part2- load webcam on canvas
   image(video,0,0,400,400);
}

function take_snapshot(){
    save('FilteredClownNoseImage.png');//save snapshot on clicking button 
}