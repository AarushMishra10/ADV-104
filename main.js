Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");



function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

consle.log('ml5 verssion:', ml5.version);

classifier= ml5.image.imageClassifier('https://teachablemachine.withgoogle.com/models/9dOiw-F5a/',modeloaded);