
rightWristX=0;
leftWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.center();
    background("gray");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background('#969A97');

}