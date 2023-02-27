leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload() {
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 500);
    canvas.position(580, 120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    background("yellow");
    document.getElementById("font_size").innerHTML = "Size of the text will be "+difference;
    fill("red");
    stroke("black");
    text("Aarav", 100, 200);
    textSize(difference);
}

function modelLoaded() {
    console.log("PoseNet has initialized!");
}

function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("Left wrist X is "+leftWristX+" and right wrist X is "+rightWristX+" and difference of the x's is " + difference);
    }
}