function counter(){

    const currentDate = new Date();
    // console.log(currentDate);

    const ExamDate = new Date(2018,8,22,12);
    // console.log(ExamDate);

    // console.log(ExamDate-currentDate);

    var milisec = ExamDate-currentDate;
    var seconds = Math.floor(milisec/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    var s = seconds%=60;
    var m = minutes%=60;
    var h = hours%=24; 
    var d = days;

    // console.log(days);
    // console.log(hours%=24);
    // console.log(minutes%=60);
    // console.log(seconds%=60);

    const counterA = document.querySelector("#counterA");
    counterA.textContent = `Do LEKu pozostało: ${d} dni, ${h} godzin, ${m} minut, ${s} sekund.`;
    // const pdays = document.querySelector("#days");
    // const phours = document.querySelector("#hours");
    // const pminutes = document.querySelector("#minutes");
    // const pseconds = document.querySelector("#seconds");
    // pdays.textContent = `${d} dni`
    // phours.textContent = `${h} godzin`
    // pminutes.textContent = `${m} minut`
    // pseconds.textContent = `${s} sekund`
    


    setTimeout('counter()', 1000);

}

counter();


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

    clearTimeout('counter()');
    setTimeout('finalTime()', 1000);


}