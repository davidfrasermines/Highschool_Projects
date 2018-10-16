var audio, audio2;

audio = new Audio();
audio.src = "Sound_Files/bensound-cute.mp3";
audio.loop = true;

audio2 = new Audio();
audio2.src = "Sound_Files/bensound-feild.mp3";
audio2.loop = true;

if (1 == 1){current = 1;}

if (current == 1){
    parkMusic();
}
var name = prompt("what's your name");

var chapter1 = ["ok", "great " + name, "lets go!!!", "who's that", "Hey " + name, "how are you", "good an you?"];

function parkMusic(){
    audio.play();
}

var x = 0;

function nextLine(){
    if (x < chapter1.length){
    document.getElementById("lines").innerHTML = chapter1[x];
    x++;
    }
    
    if (x == 5){
        document.getElementById("characters").style.backgroundImage = "url('images/example_girl.png')";
    }
    if (x == 5){
        document.getElementById("background").style.backgroundImage = "url('images/example_background2.jpg')";
        document.getElementById("header").innerHTML = "The Park";
        }
    if (x == 5){
        audio.pause();
        audio2.play();
    }
}

