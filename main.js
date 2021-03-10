noseX=0;
noseY=0;

function preload(){
    nose=loadImage("https://i.postimg.cc/TYJxqqyr/download.jpg");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet= ml5.poseNet(video,modelloaded);
    posenet.on("pose", gotResult);
}

function gotResult(results){
    
    if(results.length>0){
    console.log(results);
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);

    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
   }
}


function modelloaded(){
    console.log("your model is now loaded");

}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nose, noseX-13, noseY-20, 30, 30)

}

function take_snap(){
    save("filter_img_saved.jpeg");
    console.log("Filter Saved");
}

