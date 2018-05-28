//buttons
const pomodoroB = document.querySelector("#pomodoroStart");
const add5min = document.querySelector("#up5");
const subtract5min = document.querySelector("#down5");

//text
const pomodoroT = document.querySelector("#pomodoroText");

//audio finish session
var audio = new Audio('../audio/finish.wav');

let pomodoroC = document.querySelector("#pomodoroCounter");
let pomodoroCInt = parseInt(pomodoroC.textContent);
if(localStorage.getItem("pomodoroValue")){
    pomodoroC.textContent = localStorage.getItem("pomodoroValue")/60;
    pomodoroCInt = localStorage.getItem("pomodoroValue")/60;
}


//for global scope of Interval
var pomodoroInterval;
//pomodoroCInt*=60;

if((Date.now()-parseInt(localStorage.getItem("pomodoroSession")))<parseInt(localStorage.getItem("pomodoroValue"))*1000){
    pomodoroC.textContent = 1800 - (Date.now()-parseInt(localStorage.getItem("pomodoroSession")))%1000;
    pomodoroCInt = 1800 - (Date.now()-parseInt(localStorage.getItem("pomodoroSession")))%1000;
    pomodoroInterval = setInterval(countingWorks, 1000);
    pomodoroB.disabled = "true";
}
//console.log((Date.now()-parseInt(localStorage.getItem("pomodoroSession")))<parseInt(localStorage.getItem("pomodoroValue"))*1000);
//console.log(parseInt(localStorage.getItem("pomodoroValue"))*1000);
//console.log(1800*1000);
console.log(typeof pomodoroCInt);
console.log(pomodoroCInt);



//button pomodoro listener
pomodoroB.addEventListener("click", function(){
    
    pomodoroInterval = setInterval(countingWorks, 1000);
    pomodoroCInt*=60;
    pomodoroB.disabled = true;
    add5min.disabled = true;
    subtract5min.disabled = true; 
    localStorage.setItem("pomodoroValue",pomodoroCInt);
    pomodoroT.textContent = "Pracuj dzielnie!";
    localStorage.setItem("pomodoroSession", Date.now());

})


function countingWorks(){
    if(pomodoroCInt%60<10){
        pomodoroC.textContent = Math.floor(pomodoroCInt/60) +":"+"0"+pomodoroCInt%60;
    }
    else{
        pomodoroC.textContent = Math.floor(pomodoroCInt/60)+":"+pomodoroCInt%60;
    }
    pomodoroCInt-=1;
    // pomodoroC.textContent=pomodoroCInt;
    
    if (pomodoroCInt < 0){
        audio.play();
        clearInterval(pomodoroInterval);
        console.log("stop!!!");
        pomodoroB.disabled = false;
        add5min.disabled = false;
        subtract5min.disabled = false; 
        pomodoroC.textContent = localStorage.getItem("pomodoroValue")/60;
        pomodoroCInt = localStorage.getItem("pomodoroValue")/60;
        pomodoroT.textContent = "Chwila przerwy i działaj dalej!";
    }
};

//Adding 5 minutes
add5min.addEventListener("click", function(){
    
    if(!pomodoroInterval){
        pomodoroC.textContent= parseInt(pomodoroC.textContent)+5;
        pomodoroCInt +=5;
    }
});

subtract5min.addEventListener("click", function(){
    
    if(!pomodoroInterval){
        if(pomodoroCInt>5){
        pomodoroC.textContent= parseInt(pomodoroC.textContent)-5;
        pomodoroCInt -=5;}
    }
})