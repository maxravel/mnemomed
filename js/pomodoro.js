const pomodoroB = document.querySelector("#pomodoroStart");
let pomodoroC = document.querySelector("#pomodoroCounter");
console.log(typeof pomodoroC);

var pomodoroInterval;
pomodoroB.addEventListener("click", function(){
pomodoroInterval = setInterval(countingWorks, 1000);

function countingWorks(){
    pomodoroC.textContent-=1;

    
    if (pomodoroC.textContent === "0"){
        clearInterval(pomodoroInterval);
        console.log("stop!!!");
    }
};

})