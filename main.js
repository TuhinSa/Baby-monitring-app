


objects = [];
function setup(){
canvas = createCanvas(380,380);
canvas.center();

video = createCapture(VIDEO);
video.size(380, 380);
video.hide();
objectDetector = ml5.objectDetector('cocssd', modelLoaded)
document.getElementById("status").innerHTML = "Status :Detecting Objects";

} 
function modelLoaded(){
console.log("model loaded")
}
function draw(){
image(video,0,0, 380,380)
for(i = 0 ; i < objects.length ; i++){
if(objects[i].label == "person"){
document.getElementById("status").innerHTML = "Baby is detected";
alarm.pause()
}
else {
document.getElementById("status").innerHTML = "Baby is  not detected";
alarm.play()
}
if(objects[i].length <0){
document.getElementById("status").innerHTML = "Baby is not detected";
alarm.play()
}
}
}

function preload(){
	song = loadSound("mixkit-warning-alarm-buzzer-991.wav");
}