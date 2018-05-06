const pdays = document.querySelector("#days");
const phours = document.querySelector("#hours");
const pminutes = document.querySelector("#minutes");
const pseconds = document.querySelector("#seconds");
const title = document.querySelector("#counterDay");

var xyz;

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

    pdays.textContent = d;
    phours.textContent = h;
    pminutes.textContent = m;
    pseconds.textContent = s;
    
}

counter();
xyz = setInterval('counter()', 1000);



const changer = document.querySelector("#changeCount");

changer.addEventListener('click', finalTime);

function finalTime(){
    
    const pyear = document.querySelector("#year").value;
    const pmonth = document.querySelector("#month").value;
    const pday = document.querySelector("#day").value;
    const phour = document.querySelector("#hour").value;   
    let ExamDate = new Date(pyear,pmonth-1,pday,phour);
    const ptitle = document.querySelector("#counterTitle").value;
    console.log(ExamDate);

    if(title==""||pyear==""||pmonth==""||pday==""){
        alert("Musisz wypełnic: nazwę, rok, miesiąc, dzień.");
    }
    else if(pyear<2018||pyear>2100||pmonth<1||pmonth>12||pday<0||pday>31){
        alert("Wybierz rok poźniejszy niż 2017, wcześniejszy niż 2100, miesiąc z przedziału 1-12 i dzień z przedziału 1-31");
    }
    else{
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

        pdays.textContent = d;
        phours.textContent = h;
        pminutes.textContent = m;
        pseconds.textContent = s;
        title.textContent = `Do ${ptitle} pozostało:`;

        // pyear = "";
        // pmonth = "";
        // pday = "";
        // phour = ""; 


        clearInterval(xyz);
        setInterval('finalTime()', 1000);
        
    }
}