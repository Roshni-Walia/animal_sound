
function tap() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cQ1Nytax5/model.json', modelReady);   
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("heading3").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("accuracy").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("heading3").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_r+")";

    document.getElementById("accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img3 = document.getElementById('img3');
   


    if(results[0].label == "Barking"){
     img3.src = 'dog_pic.jpg';
   
    }
    else if(results[0].label == "Meowing"){
        img3.src = 'cat_pic.jpg';
       
    }
   else if(results[0].label == "Background Noise"){
        img3.src = 'hear_symbol.png';
        
    }
    

}
}