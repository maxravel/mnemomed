//letter o for output box
const odays = document.querySelector("#days");
const ohours = document.querySelector("#hours");
const ominutes = document.querySelector("#minutes");
const oseconds = document.querySelector("#seconds");
const otitle = document.querySelector("#counterDay");

var xyz;

function counter(name, year, month, day, hour){

    const currentDate = new Date();

    const ExamDate = new Date(year,month,day,hour);

    var milisec = ExamDate-currentDate;
    var seconds = Math.floor(milisec/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    var s = seconds%=60;
    var m = minutes%=60;
    var h = hours%=24; 
    var d = days;
    
    otitle.textContent = `Do ${name} pozostało:`;
    odays.textContent = d;
    ohours.textContent = h;
    ominutes.textContent = m;
    oseconds.textContent = s;
    
}

if(localStorage.getItem('rok')){
    xyz = setInterval('counter(localStorage.getItem("nazwa"),localStorage.getItem("rok"),localStorage.getItem("miesiąc"),localStorage.getItem("dzień"),localStorage.getItem("godzina"))',1000);
}
else{
    xyz = setInterval('counter("LEK 2018 jesień",2018,8,22,12)', 1000);
}


//*****************CHANGING COUNTING DAY
//global scope for setInterval !!
var abc;

const changer = document.querySelector("#changeCount");

changer.addEventListener('click', finalTime);

function finalTime(){
    
    //letter i for input values by user
    const iyear = document.querySelector("#year").value;
    const imonth = document.querySelector("#month").value;
    const iday = document.querySelector("#day").value;
    const ihour = document.querySelector("#hour").value;   
    const ititle = document.querySelector("#counterTitle").value;
    
    clearInterval(abc);
    if(ititle==""||iyear==""||imonth==""||iday==""){
        alert("Musisz wypełnic: nazwę, rok, miesiąc, dzień.");
    }
    else if(iyear<2018||iyear>2100||imonth<1||imonth>12||iday<0||iday>31){
        alert("Wybierz rok poźniejszy niż 2017, wcześniejszy niż 2100, miesiąc z przedziału 1-12 i dzień z przedziału 1-31");
    }
    else{

        clearInterval(xyz);
        
        abc = setInterval(() => counter(ititle,iyear,imonth-1,iday,ihour), 1000);

        //localStorage
        localStorage.setItem('nazwa',ititle);
        localStorage.setItem('rok',iyear);
        localStorage.setItem('miesiąc',imonth-1);
        localStorage.setItem('dzień',iday);
        localStorage.setItem('godzina',ihour);
        window.scrollTo(0, 0);
    }
}

//*************Preloader
setTimeout(function(){
    document.querySelector("#preloader-window").style.display="none";
},2000)