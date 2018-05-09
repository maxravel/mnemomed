const pomodoroB = document.querySelector("#pomodoroStart");
let pomodoroC = document.querySelector("#pomodoroCounter");
let pomodoroCInt = parseInt(pomodoroC.textContent);
console.log(typeof pomodoroCInt);
console.log(pomodoroCInt);

var pomodoroInterval;
pomodoroB.addEventListener("click", function(){
pomodoroInterval = setInterval(countingWorks, 1000);
pomodoroCInt*=60;
pomodoroB.disabled = true;

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
    }
};

})

const add5min = document.querySelector("#up5");
const subtract5min = document.querySelector("#down5");

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