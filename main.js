Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,

    constraints: {
      facingMode: 'enviroment'
    }
});

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>"
    });
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('MobileNet',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
    
  function check() {
    var img = document.getElementById('captured_image');
    classifier.classify(img,gotResult)
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
        window.alert("Got error, Please try again !");
    } else {
        console.log(results);
        window.alert("Sucessfully Identified");
        document.getElementById('object_name').innerHTML = results[0].label;
    }
  } 