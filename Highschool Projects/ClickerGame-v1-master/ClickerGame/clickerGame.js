// Audio -----> EDDIT THE SOUND FILE
var bleep = new Audio();
            bleep.src = "bloop.mp3";
            
var craftSound = new Audio();
craftSound.src = "Judge.mp3";

// Buttons
var cashValue = 0;
var workBenchBuy = false;
var lumberJackNumber = 0;
var speedUp = 0;
var xpValue = 0;
var level = 1;

function wood() {
    cashValue++;
    var element = document.getElementById("cash");
    element.innerHTML = "$ " + cashValue;
    xpValue += 1;increaseXP();
    
}

function workBench(){
    if (cashValue >= 50 && workBenchBuy == false){
       cashValue -= 50;
       document.getElementById("bench").style.color = "green";
       workBench = true;
        var element = document.getElementById("cash");
        element.innerHTML = "$ " + cashValue;
    }
    if (workBenchBuy == true){
        var element = document.getElementById("bench");
        element.innerHTML = "WorkBench";
    }
    xpValue += 50;increaseXP();
}



function lumberJack (){
    if (cashValue >= 100){
       cashValue -= 100;
        lumberJackNumber ++;
        var element = document.getElementById("lumberJack");
        element.innerHTML = "Lumber Jack [" + lumberJackNumber + "] $100";
        speedUp += .25;
        xpValue += 50;increaseXP();
        
    }
}


var interval = setInterval( increment, 1000);

function increment(){
    cashValue += speedUp;
    var element = document.getElementById("cash");
    element.innerHTML = "$ " + cashValue;
}

function increaseXP(){
    
    var element = document.getElementById("xpUp");
    element.innerHTML = "xp [ "+xpValue+" ]";
    
}
