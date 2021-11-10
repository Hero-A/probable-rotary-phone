Webcam.set({
    height: 376,
    width: 400,
    image_format:'jpg',
    png_quality:90
    
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="capture_image" src="'+ data_uri +'"/>';
    });
}
console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Fx1zwDUKK/', modelLoaded);

function modelLoaded(){
    console.log('model loaded');
}