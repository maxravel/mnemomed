//buttons
const pomodoroB = document.querySelector("#pomodoroStart");
const add5min = document.querySelector("#up5");
const subtract5min = document.querySelector("#down5");

//text
const pomodoroT = document.querySelector("#pomodoroText");

let pomodoroC = document.querySelector("#pomodoroCounter");
let pomodoroCInt = parseInt(pomodoroC.textContent);
if(localStorage.getItem("pomodoroValue")){
    pomodoroC.textContent = localStorage.getItem("pomodoroValue")/60;
    pomodoroCInt = localStorage.getItem("pomodoroValue")/60;
}

console.log(typeof pomodoroCInt);
console.log(pomodoroCInt);

//for global scope of Interval
var pomodoroInterval;

//button pomodoro listener
pomodoroB.addEventListener("click", function(){
    pomodoroInterval = setInterval(countingWorks, 1000);
    pomodoroCInt*=60;
    pomodoroB.disabled = true;
    add5min.disabled = true;
    subtract5min.disabled = true; 
    localStorage.setItem("pomodoroValue",pomodoroCInt);
    pomodoroT.textContent = "Pracuj dzielnie!";

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

})



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