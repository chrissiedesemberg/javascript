var trainSpeed = 250;
var trainPosition = 0;
var animation;

//var train = document.getElementById("train");
//train.addEventListener("click", speedUp);

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);
/*
var refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", refresh);

function refresh() {
    clearInterval(animation);
    trainPosition = 0;
}
*/
function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 50;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 460) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 460) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}