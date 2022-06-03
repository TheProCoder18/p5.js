function setup(){
    canvas = createCanvas(400,400);
    
   canvas.position(110, 250);
   video = createCapture(VIDEO);
   video.hide();

   

}

function draw() {
    image(video, 0, 0 ,640 ,480);
    
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(50, 50, 20, 20);
    rect(300, 50, 20, 20);
    circle(200,190,60);
    
}

function take_snapshot() {
    save('student_name.png');
}