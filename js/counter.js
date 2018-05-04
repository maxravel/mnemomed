var d;

function counter(){

    const currentDate = new Date();

    const ExamDate = new Date(2018,8,22,12);

    var milisec = ExamDate-currentDate;
    var seconds = Math.floor(milisec/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    var s = seconds%=60;
    var m = minutes%=60;
    var h = hours%=24; 
    var d = days;

    const counterA = document.querySelector("#counterA");
    counterA.textContent = `Do LEKu pozostało: ${d} dni, ${h} godzin, ${m} minut, ${s} sekund.`;
}

counter();

d = setTimeout('counter()', 1000);



const changer = document.querySelector("#changeCount");

changer.addEventListener('click', finalTime);

function finalTime(){
    const pyear = document.querySelector("#year").value;
    const pmonth = document.querySelector("#month").value;
    const pday = document.querySelector("#day").value;
    const phour = document.querySelector("#hour").value;   
    console.log(pyear);
    let ExamDate = new Date(pyear,pmonth-1,pday,phour)
    console.log(ExamDate);

    let currentDate = new Date();

    var milisec = ExamDate-currentDate;
    var seconds = Math.floor(milisec/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    var s = seconds%=60;
    var m = minutes%=60;
    var h = hours%=24; 
    var d = days;

    const counterA = document.querySelector("#counterA");
    counterA.textContent = `Do LEKu pozostało: ${d} dni, ${h} godzin, ${m} minut, ${s} sekund.`;

    setTimeout('finalTime()', 1000);
    clearTimeout(d);

}