function startClassification(){
    navigator.mediaDevices.getUserMedia({ aduio: true});
    classfier = ml5.soundClassifier('teachablemachine.withgoogle.com/models/e0pi21bHN/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}