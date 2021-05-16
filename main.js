function preload() {}

function setup()
{
    canvas = createCanvas(450, 350) ;
    canvas.position(530, 300) ;
    video = createCapture(VIDEO) ;
    video.hide() ;
    tint_color = "" ;
}
function draw() {
    image(video, 0, 0, 450, 350) ;
    tint(tint_color) ;
    fill(0,0,255) ;
    circle(50,100, 70) ;
}
function filter_tint() {
    tint_color = document.getElementById("tint_color").value ;
}
function take_snapshot() {
    save('yourFilterPic.png')
}